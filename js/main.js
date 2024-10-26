$(document).ready(function() {
    
    const checkSelectedCells = (function(cells) {
        // Kontrolli, kas kõik "isCorrect: true" lahtrid on valitud
        var allCorrectSelected = cells.every(function(cell) {
            // Kui lahter on õige (isCorrect: true), siis peab see olema ka valitud (selected: true)
            if (cell.isCorrect) {
                return cell.selected;
            }
            return true; // Jätame valed lahtrid vahele (kontrollime neid hiljem)
        });

        // Kontrolli, et ükski vale lahter ("isCorrect: false") poleks valitud
        var noIncorrectSelected = cells.every(function(cell) {
            // Kui lahter on vale (isCorrect: false), siis see ei tohi olla valitud (selected: false)
            return !(cell.selected && !cell.isCorrect);
        });

        // Tagasta tõene ainult siis, kui kõik õiged on valitud ja ükski vale pole valitud
        return allCorrectSelected && noIncorrectSelected;
    });

    const createGrid = (function(gridSize) {

        // Shuffle the answers array to ensure unique random text selection
        const shuffleArray = function(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];  // Swap elements
            }
            return array;
        };

        answers = quiz.answers.slice();
    
        // Ensure 'answers' exists in the data
        if (!answers || !Array.isArray(answers)) {
            console.error("No valid 'answers' array found in JSON.");
            return;
        }

        let cellTexts = {};

        // Shuffle the answers array if shuffle is true
        if (shuffle) {
            cellTexts = shuffleArray(answers.slice());
        } else {
            cellTexts = answers.slice();
        }
        
        $("#header").text(quiz.header);
        $("#question").html(quiz.question);

        // Get the grid element
        var $grid = $('#grid');
        $grid.empty(); // Clear any existing content
    
        // Ensure grid size forms a square
        if (gridSize % 1 !== 0) {
            $grid.append("<p><strong>Error</strong>: The number of massive elements does not form a square!</p>");
            return;
        }
    
        // Loop to create grid
        for (let index = 0; index < gridSize * gridSize; index++) {
            // Create a new row for every `gridSize` elements
            if (index % gridSize === 0) {
                $grid.append('<div class="row justify-content-center"></div>');
            }
    
            // Get the last created row
            var $lastRow = $grid.children().last();
    
            // Initialize cells[index] as an object
            cells[index] = {};  // Ensure cells[index] is an object
            cells[index].id = 'cell' + index;
            cells[index].text = cellTexts[index].value;  // Assign a unique random text        
            cells[index].isCorrect = cellTexts[index].isCorrect;  // Assign a unique random text
            cells[index].selected = false;
    
            // Create a new column with custom HTML
            var $newCol = $('<div>', { id: 'cell' + index, class: 'col cell unselected' });
    
            // Add the HTML content into the column
            $newCol.html(cells[index].text);
    
            // Append the new column to the last row
            $lastRow.append($newCol);
        }
    });
    
    const resetStates = (function() {
        $.each(cells, function(index, cell) {
            cells[index].selected = false;
            $('#'+cells[index].id).removeClass('selected');
        });
    });

    // Disable text selection globally
    $('body').css({
        'user-select': 'none',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none'
    });

    var cells = [];
    var quiz;
    var gridSize;
    var shuffle;
    
    $('#result').hide();

    // Fetch the JSON data from an external file
    $.getJSON("data.json", function(data) {

        $("#title").text(data.title);
        $("#reset").text(data.reset);

        if (data.fixedQuestion !== -1) {
            quiz = data.questions[data.fixedQuestion];
            console.log(quiz)
            console.info('Fix question number:',data.fixedQuestion, ' - Question:', quiz.question);
        } else {
            const questionCount = data.questions.length;
            var questionNumber = Math.floor(Math.random() * questionCount);
            quiz = data.questions[questionNumber];
            console.info('Random question number:',questionNumber, ' - Question:', quiz.question);
        }
 
        gridSize = data.squareRoot;
        shuffle = data.shuffledtexts;

        createGrid(gridSize);

    }).fail(function() {
        console.error('Failed to load JSON data.');
        $("#debug").text("Failed to load JSON data.");
    });

    // Add click event for dynamically created .cell elements using event delegation
    $(document).on('click', '.cell', function() {
        var id = $(this).attr("id");

        // Find the corresponding cell in the array
        var cellIndex = cells.findIndex(cell => cell.id === id);

        // Toggle the selected state
        cells[cellIndex].selected = !cells[cellIndex].selected;

        // Toggle the visual appearance based on the selected state
        if (cells[cellIndex].selected) {
            $(this).addClass('selected');
        } else {
            $(this).removeClass('selected');
        }

        if (checkSelectedCells(cells)) {  
            $("#bigText").html(quiz.bigText);
            $("#winText").html(quiz.winText);
            $("#descText").html(quiz.descText);
            $('#result').show();
        } 
        
        if (cells[cellIndex].isCorrect === false) {
            $("#bigText").html(quiz.wrongText);
            $("#winText").html(quiz.tryAgain);
            $("#descText").html("");
            $('#result').show();
        }

    });

    $('#result').on('click', function() {
        resetStates();
        createGrid(gridSize);
        $('#result').hide();
    });

    $('#reset').on('click', function() {
        resetStates();
        createGrid(gridSize);
    });

});

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('Service worker registered with scope:', registration.scope);
    }).catch(function(error) {
        console.log('Service worker registration failed:', error);
    });
}