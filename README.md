# ✨Mood Tracker✨ Node.js Server

This is a simple Node.js server project for tracking and saving your mood using HTTP POST requests. The server allows you to submit your mood and stores it in a text file for reference. It's a minimalistic example to get you started with Node.js and HTTP handling.

## Getting Started

To set up and run this project on your local machine, follow these steps:

### Prerequisites

1. Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

2. Clone this repository to your local machine:

```bash
git clone https://github.com/kagerer19/mood-tracker-nodejs.git
```

3. Navigate to the project directory:

```bash
cd mood-tracker-nodejs
```

4. Install project dependencies:

```bash
npm install
```

### Usage

5. Start the server:

```bash
npm start
```

6. Open your web browser and visit [http://localhost:3000](http://localhost:3000).

7. You'll see a simple web page with a mood tracking form. Enter your mood and click "Send."

8. Your mood will be saved to a text file named `user_mood.txt` in the project directory.

## Project Structure

- `server.js`: The main server script that listens for incoming HTTP requests and handles mood data submissions.

## Acknowledgments

- This project was created as a learning exercise for handling HTTP requests in Node.js.
