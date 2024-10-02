
# Bingo Game

This project is a simple bingo game implemented using JavaScript, jQuery, and HTML. The game displays a grid of cells where users can select cells, and if they select the correct cells (matching a predefined set of winning numbers), they win the game. The winning condition and game data are fetched from an external JSON file.

## Features

- Displays a grid of cells with values fetched from a `data.json` file.
- Allows users to select or deselect cells by clicking on them.
- Checks if the selected cells match the winning combination.
- Displays a win message when the correct cells are selected.
- Uses a simple Fisher-Yates algorithm for shuffling arrays (if needed).
- Responsive interface that updates the appearance of selected/unselected cells.

## How It Works

1. **Data Loading**: The game data, such as the question, cell values, and winning combination (`winnums`), is loaded from an external `data.json` file.
2. **Cell Interaction**: Users can select or deselect cells in the grid by clicking on them. The selected state is visually represented by adding or removing a `selected` class.
3. **Winning Condition**: The game checks if the selected cells match the predefined winning numbers (`winnums`). If the correct cells are selected, the win message is displayed, and the game board is hidden.
4. **Reload Option**: After winning, users can click the win message to reload the game and start over.

## Files

### `index.html`

This is the main HTML file that contains the structure for the game board, win message, and debug information.

### `main.js`

This file contains the JavaScript logic for the game, including:
- Loading the game data.
- Handling cell clicks and toggling their selected state.
- Checking if the selected cells match the winning combination.
- Displaying the win message and allowing the user to restart the game.

### `data.json`

This file contains the game data, including:
- `header`: The title of the game.
- `question`: A question or instruction for the player.
- `bingo`: The main text to be displayed on the board.
- `win`: The text to be displayed when the player wins.
- `gift`: Any additional reward or message.
- `winnums`: The array of indexes that represent the winning cells.
- `cell`: An array of objects representing each cell's value and state.

### Example `data.json`:

```json
{
    "header": "Bingo Game",
    "question": "Select the correct cells to win",
    "bingo": "BINGO",
    "win": "Congratulations, You Won!",
    "gift": "Your prize is a virtual high five!",
    "winnums": [0, 1, 2],  // Indexes of winning cells
    "cell": [
        {"id": "cell0", "value": "A"},
        {"id": "cell1", "value": "B"},
        {"id": "cell2", "value": "C"},
        {"id": "cell3", "value": "D"},
        {"id": "cell4", "value": "E"}
    ]
}
```

### `style.css`

This file contains the styles for the game, including the layout of the grid, the appearance of selected cells, and the win message.

## Setup and Installation

1. Clone the repository or download the project files.
   
   ```bash
   git clone https://github.com/your-username/bingo-game.git
   ```

2. Ensure you have a `data.json` file with the necessary game data (example shown above).
3. Open the `index.html` file in your browser to run the game.

## How to Play

1. Upon loading, you will see a grid of cells with values.
2. Click on the cells to select them. The cell's appearance will change when selected.
3. When the correct cells are selected (as defined in the `data.json` file), a win message will be displayed.
4. Click on the win message to restart the game.

## Dependencies

- [jQuery](https://jquery.com/) is used for DOM manipulation and handling events.

## Code Structure

### Key Functions

- **`checkSelectedCells(cells, indexes)`**: Checks if the selected cells match the indexes provided in the `winnums` array.
- **`shuffleArray(array)`**: (Optional) Shuffles the array of cell values using the Fisher-Yates (Knuth) Shuffle.
- **Cell click event**: Toggles the selection of the clicked cell and checks the winning condition.

## Known Issues and Improvements

- The game currently depends on a static JSON file for the winning numbers and cell values. This could be improved by adding a backend to dynamically generate the grid.
- The visual design can be enhanced for better user experience.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.

