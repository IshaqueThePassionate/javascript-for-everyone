
# Values in Computers

To understand what primitive or value types are, we first need to understand how values are stored in the computer.

Imagine a sea of bits—an ocean of them. A modern computer has over 100 billion bits in its working memory (volatile data storage). Nonvolatile storage (like a hard disk) has even more bits.

## Understanding Values in JavaScript

To work with these bits, we group them into chunks called values. In a JavaScript environment, these values represent pieces of information. Even though all values are made of bits, they serve different purposes. Each value has a type that determines its role:
- **Numbers**: Represent numerical data.
- **Text**: Represent pieces of text.
- **Functions**: Represent executable code.

## Creating Values

Creating a value is simple—just invoke its name, and it appears. You don’t need to gather materials or pay for them. However, each value occupies space in the computer's memory. If you create too many values at once, you might run out of memory. Fortunately, this is rarely an issue. Once you stop using a value, its memory is freed up and can be reused for new values.

In summary:
- **Values**: Chunks of bits representing information.
- **Types**: Define the role of each value (numbers, text, functions, etc.).
- **Memory**: Values occupy memory, but unused values free up space for new ones.

<br>

## Types of Values in JavaScript

### Primitive Types (Value Types)

Primitive types are the most basic kinds of data in JavaScript. They are immutable, meaning their value cannot be changed after they are created. Primitive types include:
- **Number**: Represents numerical data.
- **String**: Represents textual data.
- **Boolean**: Represents true/false values.
- **null**: Represents an intentional absence of any object value.
- **undefined**: Represents a variable that has been declared but not assigned a value.
- **Symbol**: Represents a unique identifier.
- **BigInt**: Represents integers with arbitrary precision.

<br>

### Reference Types

Reference types, or objects, are more complex data structures. Unlike primitive types, reference types are mutable and can be modified. Reference types include:
- **Object**: A collection of properties and methods.
- **Array**: An ordered list of values.
- **Function**: A block of code designed to perform a particular task.
- **Date**: Represents a single moment in time.
- **RegExp**: Represents regular expressions, used for pattern matching within strings.

<br>

## Conclusion

Understanding the different types of values and how they are stored in memory is fundamental to working effectively with JavaScript. Primitive types, or value types, are simple and immutable, whereas reference types are more complex and mutable. By recognizing these differences, you can write more efficient and effective code.

