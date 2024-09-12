# Most Commonly used NodeJs File System Methods

1. **What is the Node.js File System Module (`fs`)?**
   - The `fs` module is a built-in module in Node.js that provides an interface for interacting with the file system. It allows you to read, write, and manipulate files and directories.

2. **How do you read a file using `fs`?**
   - To read the contents of a file, you can use the `fs.readFile()` method. It reads the entire file asynchronously and provides the data in a callback.

3. **How do you write to a file using `fs`?**
   - To write data to a file, use the `fs.writeFile()` method. It creates or overwrites a file with the specified content.

4. **What's the difference between synchronous and asynchronous file operations in `fs`?**
   - Synchronous methods (e.g., `fs.readFileSync()`, `fs.writeFileSync()`) block the execution until the operation completes.
   - Asynchronous methods (e.g., `fs.readFile()`, `fs.writeFile()`) allow non-blocking execution and use callbacks or Promises.

5. **How do you check if a file exists using `fs`?**
   - You can use the `fs.existsSync()` method to check if a file exists synchronously.
   - For asynchronous checks, use `fs.access()` or `fs.stat()`.

6. **How do you create a new directory using `fs`?**
   - Use `fs.mkdir()` to create a new directory asynchronously.
   - For synchronous directory creation, use `fs.mkdirSync()`.

7. **How do you list files and directories in a directory using `fs`?**
   - To list files and directories in a directory, use `fs.readdir()`.
   - It returns an array of filenames.

8. **How do you rename or move a file using `fs`?**
   - Use `fs.rename()` to rename or move a file asynchronously.
   - For synchronous renaming, use `fs.renameSync()`.

9. **How do you delete a file using `fs`?**
   - To delete a file, use `fs.unlink()` asynchronously.
   - For synchronous deletion, use `fs.unlinkSync()`.

10. **How do you get file information (metadata) using `fs`?**
    - Use `fs.stat()` to get information about a file (e.g., size, modification time, etc.).

## Solutions

## 1. Reading Files

To read the contents of a file, use the `fs.readFile()` method. Here's an example that reads an HTML file and returns its content:

```javascript
const fs = require('fs');

fs.readFile('demofile1.html', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:\n', data);
});
```

## 2. Creating Files

You can create new files using methods like `fs.appendFile()`, `fs.open()`, or `fs.writeFile()`. Here are examples for each:

- Using `fs.appendFile()`:
  ```javascript
  fs.appendFile('mynewfile1.txt', 'Hello content!', (err) => {
    if (err) throw err;
    console.log('File created or updated!');
  });
  ```

- Using `fs.open()`:
  ```javascript
  fs.open('mynewfile2.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log('Empty file created!');
  });
  ```

- Using `fs.writeFile()`:
  ```javascript
  fs.writeFile('mynewfile3.txt', 'Hello content!', (err) => {
    if (err) throw err;
    console.log('File created or updated!');
  });
  ```

## 3. Updating Files

To update files, you can use `fs.appendFile()` or `fs.writeFile()`. Here are examples:

- Appending content to an existing file:
  ```javascript
  fs.appendFile('mynewfile1.txt', ' This is my text.', (err) => {
    if (err) throw err;
    console.log('File updated!');
  });
  ```

- Replacing the content of an existing file:
  ```javascript
  fs.writeFile('mynewfile3.txt', 'This is my text', (err) => {
    if (err) throw err;
    console.log('File updated!');
  });
  ```