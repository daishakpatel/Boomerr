# Boomerr.com - PC Recommendation Project

This project is a web application that helps users find the best PC for their needs. It consists of a frontend built with HTML, CSS, and JavaScript, and a backend built with Node.js and Express.

## Table of Contents
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/bummer-com.git
cd bummer-com
```

2. Install the dependencies:

```sh
npm install
```

3. Start the server:

```sh
node server/server.js
```

The server will be running on `http://localhost:3000`.

## Project Structure

```
/project-directory
    /public
        index.html
        mac.html
        windows.html
        results.html
        style.css
        script.js
    /server
        server.js
    package.json
```

## Features

- **Dynamic Greeting Message**: Displays a greeting based on the time of day.
- **Smooth Scrolling**: Smooth scrolling when clicking on navigation links.
- **Toggle Dark/Light Mode**: Allows users to toggle between dark and light mode.
- **Form Validation**: Validates a simple form and provides feedback.
- **API Endpoints**: Provides basic API endpoints for recommendations.

## Usage

1. Open a web browser and go to `http://localhost:3000`.
2. Navigate through the different pages: Home, Mac, Windows, Business, Education, and Build Your Own.
3. Submit the form on the home page and see the validation in action.
4. Toggle between dark and light mode using the provided button.

## API Endpoints

- **GET /api/recommendations**: Returns a list of PC recommendations.

Example response:

```json
[
    { "id": 1, "name": "MacBook Pro", "category": "Mac" },
    { "id": 2, "name": "Dell XPS", "category": "Windows" },
    { "id": 3, "name": "Surface Laptop", "category": "Windows" }
]
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
