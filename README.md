
# BINGO

BINGO is a Bingo web application where users interact with a grid of cells related to various topics such as home loans and electric vehicle experiences. The goal is to select cells that answer questions correctly to win the game.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Customization](#customization)
- [Technologies Used](#technologies-used)
- [Service Worker](#service-worker)
- [License](#license)

## Features

- Interactive Bingo grid with themed questions and answers.
- Real-time feedback on selected answers.
- Support for multiple questions, each with unique answers.
- Visual indication for correct and incorrect answers.
- Fully responsive layout using CSS and Bootstrap.
- Progressive Web App (PWA) capabilities with offline access through a service worker.

## Project Structure

```
.
├── index.html             # Main HTML file for the Bingo application
├── data.json              # JSON file containing questions, answers, and settings
├── js/main.js             # JavaScript file for game logic and interactivity
├── css/styles.css         # Custom CSS for styling the application
├── manifest.json          # Web App Manifest for PWA configuration
├── service-worker.js      # Service worker for offline support
└── icons/                 # Application icons for different devices
```

### Key Files

- **index.html**: Contains the structure and layout of the Bingo game, including the grid and buttons.
- **data.json**: Holds configuration data such as questions, answers, and winning conditions.
- **main.js**: Implements the game logic, including handling clicks, checking win conditions, and resetting the game.
- **styles.css**: Provides responsive and device-specific styling for the game.
- **manifest.json**: Defines the PWA settings and icons.
- **service-worker.js**: Caches assets for offline use.

## Getting Started

To run the game locally:

1. Clone or download the project files.
2. Open `index.html` in a modern web browser.

For better accessibility, you may host the project on any static server or deploy it as a Progressive Web App (PWA).

## How to Play

1. Begin by selecting the answers you believe are correct from the Bingo grid on the main page.
2. When all correct answers are selected, and no incorrect ones are chosen, you win the game.
3. If you select an incorrect answer, you’ll receive a prompt to try again.
4. Click **Reset** to start a new round.

## Customization

You can customize the game through the `data.json` file:

- **title**: Title displayed on the webpage.
- **header**: Header text displayed above the game grid.
- **questions**: Array containing each question object. Each object includes:
  - **question**: The question text.
  - **answers**: Array of answers, each with `value` (text or image) and `isCorrect` (boolean).
  - **winText**, **bigText**, **descText**: Text displayed upon winning.
  - **wrongText** and **tryAgain**: Text displayed for incorrect selections.
  
## Technologies Used

- **HTML5** for page structure.
- **CSS3** and **Bootstrap** for responsive design and styling.
- **JavaScript (ES6)** and **jQuery** for game logic and interactivity.
- **Service Worker** for PWA functionality and offline support.

## Service Worker

The `service-worker.js` file caches necessary assets for offline access, making the game playable even without an internet connection.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as long as appropriate credit is given.
