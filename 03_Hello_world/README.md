## Getting Started

### Prerequisites

Before diving into JavaScript, it is helpful (though not strictly necessary) to have a basic understanding of HTML and CSS. These technologies work together to create and style web pages, and JavaScript adds the interactive layer.

### Setting Up Your Environment

1. **Text Editor or Integrated Development Environment (IDE)**: Choose a text editor like Visual Studio Code, Sublime Text, or an IDE like WebStorm. These tools will help you write and manage your code efficiently.
2. **Web Browser**: Ensure you have a modern web browser such as Google Chrome, Firefox, or Safari. These browsers come with built-in developer tools that are invaluable for debugging JavaScript code.

### Your First JavaScript Program

To get started with JavaScript, let's write a simple "Hello, World!" program.

1. **Create an HTML file**: Open your text editor and create a new file named `index.html`. Add the following code:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JavaScript Introduction</title>
    </head>
    <body>
        <h1>Welcome to JavaScript!</h1>
        <script src="script.js"></script>
    </body>
    </html>
    ```

2. **Create a JavaScript file**: In the same directory, create another file named `script.js`. Add the following code:

    ```javascript
    console.log('Hello, World!');
    ```

3. **Open the HTML file in your browser**: Open `index.html` in your web browser. You won't see any visible output on the page, but if you open the browser's developer tools (usually by right-clicking on the page and selecting "Inspect" or pressing `F12`), you will see "Hello, World!" printed in the console.

Congratulations! You've just written and executed your first JavaScript program.

<br/>

# JavaScript in Node.js


Node.js is a powerful, open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine and is designed for building scalable network applications.

## Why Use Node.js?

- **JavaScript Everywhere**: Use JavaScript for both front-end and back-end development, simplifying the development process and allowing code reuse.
- **Asynchronous and Event-Driven**: Node.js excels in handling asynchronous operations, making it ideal for applications that require real-time data and high concurrency.
- **Non-blocking I/O**: The non-blocking I/O model ensures efficient use of system resources, which is perfect for I/O-heavy applications such as web servers.
- **Rich Ecosystem**: Node.js has a vast ecosystem of libraries and modules available through npm (Node Package Manager), which accelerates development and reduces the need to reinvent the wheel.

<br>

## Setting Up Node.js

### Installation

1. **Download and Install**: Visit the [Node.js website](https://nodejs.org/) and download the installer for your operating system. Follow the installation instructions provided.
2. **Verify Installation**: Open your terminal or command prompt and run the following commands to ensure Node.js and npm are installed correctly:

    ```sh
    node -v
    npm -v
    ```

    These commands will display the installed versions of Node.js and npm.

### Your First Node.js Program

To get started with Node.js, let's write a simple "Hello, World!" program.

1. **Create a new directory**: Open your terminal and create a new directory for your project. Navigate into this directory.

    ```sh
    mkdir my-node-app
    cd my-node-app
    ```

2. **Initialize the project**: Run the following command to create a `package.json` file, which will keep track of your project's dependencies and scripts.

    ```sh
    npm init -y
    ```

3. **Create a JavaScript file**: Create a new file named `app.js` and add the following code:

    ```javascript
    console.log('Hello, World from Node.js!');
    ```

4. **Run the program**: In your terminal, execute the script using Node.js.

    ```sh
    node app.js
    ```

    You should see "Hello, World from Node.js!" printed in the terminal.