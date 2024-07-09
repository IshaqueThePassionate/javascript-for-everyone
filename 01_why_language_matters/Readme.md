
## Why Language Matters

In the beginning, at the birth of computing, there were no programming languages. Programs looked something like this:

```
00110001 00000000 00000000
00110001 00000001 00000001
00110011 00000001 00000010
01010001 00001011 00000010
00100010 00000010 00001000
01000011 00000001 00000000
01000001 00000001 00000001
00010000 00000010 00000000
01100010 00000000 00000000
```

Here's a program that adds the numbers from 1 to 10 together and prints the result: 1 + 2 + ... + 10 = 55. Early computers required programmers to set many switches in the correct positions or punch holes in strips of cardboard to input programs. This process was very tedious and prone to errors. Even writing simple programs needed a lot of clever thinking and precision. Creating complex programs was almost unimaginable.

Certainly! Manually entering these mysterious patterns of bits (the ones and zeros) did give the programmer a deep sense of being a powerful wizard. That feeling of mastery must have been quite satisfying in terms of job enjoyment.

Each line of the previous program contains a single instruction. It could be written in English like this:

1. Store the number 0 in memory location 0.
2. Store the number 1 in memory location 1.
3. Store the value of memory location 1 in memory location 2.
4. Subtract the number 11 from the value in memory location 2.
5. If the value in memory location 2 is the number 0, continue with instruction 9.
6. Add the value of memory location 1 to memory location 0.
7. Add the number 1 to the value of memory location 1.
8. Continue with instruction 3.
9. Output the value of memory location 0.

Although that is already more readable than the soup of bits, it is still rather obscure. Using names instead of numbers for the instructions and memory locations helps:

```
Set “total” to 0.
Set “count” to 1.
[loop]
Set “compare” to “count”.
Subtract 11 from “compare”.
If “compare” is zero, continue at [end].
Add “count” to “total”.
Add 1 to “count”.
Continue at [loop].
[end]
Output “total”.
```

Can you see how the program works at this point? The first two lines give two memory locations their starting values: total will be used to build up the result of the computation, and count will keep track of the number that we are currently looking at. The lines using compare are probably the most confusing ones. The program wants to see whether count is equal to 11 to decide whether it can stop running. Because our hypothetical machine is rather primitive, it can only test whether a number is zero and make a decision based on that. It therefore uses the memory location labeled compare to compute the value of count - 11 and makes a decision based on that value. The next two lines add the value of count to the result and increment count by 1 every time the program decides that count is not 11 yet.

Here is the same program in JavaScript:

```javascript
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
// → 55
```

This version gives us a few more improvements. Most importantly, there is no need to specify the way we want the program to jump back and forth anymore—the while construct takes care of that. It continues executing the block (wrapped in braces) below it as long as the condition it was given holds. That condition is count <= 10, which means “the count is less than or equal to 10”. We no longer have to create a temporary value and compare that to zero, which was just an uninteresting detail. Part of the power of programming languages is that they can take care of uninteresting details for us.

At the end of the program, after the while construct has finished, the console.log operation is used to write out the result.

Finally, here is what the program could look like if we happened to have the convenient operations range and sum available, which respectively create a collection of numbers within a range and compute the sum of a collection of numbers:

```javascript
console.log(sum(range(1, 10)));
// → 55
```

The moral of this story is that the same program can be expressed in both long and short, unreadable and readable ways. The first version of the program was extremely obscure, whereas this last one is almost English: log the sum of the range of numbers from 1 to 10. (We will see in later chapters how to define operations like sum and range.)

A good programming language helps the programmer by allowing them to talk about the actions that the computer has to perform on a higher level. It helps omit details, provides convenient building blocks (such as while and console.log), allows you to define your own building blocks (such as sum and range), and makes those blocks easy to compose.