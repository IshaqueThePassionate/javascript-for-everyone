# Indenting Code

## Introduction

Indentation is a crucial aspect of writing clean and readable code in JavaScript. It helps to visually separate code blocks and understand the structure and flow of the code. Proper indentation improves code readability and maintainability, making it easier for developers to collaborate and debug code.

## The Role of Indentation

In the examples, spaces are added in front of statements that are part of a larger statement. These spaces are not required—the computer will accept the program just fine without them. In fact, even the line breaks in programs are optional. You could write a program as a single long line if you felt like it.

### Example without Proper Indentation

```javascript
if (false != true) { console.log("That makes sense."); if (1 < 2) { console.log("No surprise there."); } }
```

### Importance of Indentation

The role of this indentation inside blocks is to make the structure of the code stand out to human readers. In code where new blocks are opened inside other blocks, it can become hard to see where one block ends and another begins. With proper indentation, the visual shape of a program corresponds to the shape of the blocks inside it.

## Indentation Practices

### Using Spaces or Tabs

- **Spaces**: Some developers prefer using spaces for indentation. Common practices include using 2 or 4 spaces per indentation level.
- **Tabs**: Some developers prefer using tabs for indentation.

The important thing is that each new block adds the same amount of space.

### Example with Proper Indentation

I like to use two spaces for every open block, but tastes differ—some people use four spaces, and some people use tab characters.

```javascript
if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}
```

## Tools for Enforcing Indentation

### Code Editors

Most code editor programs will help by automatically indenting new lines the proper amount. For example, Visual Studio Code (VS Code) is a popular code editor that assists with automatic indentation.

## Conclusion

Proper indentation is a fundamental aspect of writing clean and maintainable JavaScript code. By following consistent indentation practices, you can ensure that your code is readable, maintainable, and free of unnecessary complexity.
