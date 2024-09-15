# NodeJS File System & OS

Date: September 11, 2024
Topic: nodejs file system, nodejs os

NodeJS Files System & OS

### Files System

The Node.js File System module allows you to work with the file system on your computer. It provides a way of reading from and writing to files, as well as performing various operations on directories. Some common operations include:

- Reading files (fs.readFile)
- Writing files (fs.writeFile)
- Appending to files (fs.appendFile)
- Deleting files (fs.unlink)

These operations can be performed synchronously or asynchronously, with the asynchronous versions being preferred for better performance in most cases.

```jsx
// First import file system
import fs from "fs";
```

- Commonly use Methods
    - Reads the contents of a file asynchronously.
        
        `fs.readFile(path, [options], callback)`
        
        - `path`: Path to the file.
        - `options`: Optional object with encoding, flag, and other options.
        - `callback`: Callback function receiving error and data.
        - Code
            
            ```jsx
            function readFile(path) {
              fs.readFile(path, (err, data) => {
                err
                  ? console.log("Error while reding File: " + err)
                  : console.log(data.toString());
              });
            };
            readFile("./example-file.txt");
            ```
            
    - Reads the contents of a file synchronously.
        
        `fs.readFileSync(path, [options])`
        
        - `path`: Path to the file.
        - `options`: Optional object with encoding, flag, and other options.
        - Returns the data read.
        - Code
            
            ```jsx
            function readFileSync(path) {
              const data = fs.readFileSync(path, "utf-8");
              console.log(data);
            }
            readFileSync("example-file.txt");
            ```
            
    - Writes data to a file asynchronously.
        
        `fs.writeFile(path, data, [options], callback)`
        
        - `path`: Path to the file.
        - `data`: Data to write.
        - `options`: Optional object with encoding, flag, and other options.
        - `callback`: Callback function receiving error.
        - Code
            
            ```jsx
            function writeFile(path, data) {
              fs.writeFile(path, data, (err)=>{
                err
                ? console.log(`Error While Creating File: ${err}`)
                : readFile(path) // Calling readFile() function from above
              });
            };
            writeFile("example-file.txt", "Hello, World!");
            ```
            
    - Writes data to a file synchronously.
        
        **`fs.writeFileSync(path, data, [options])`:**
        
        - `path`: Path to the file.
        - `data`: Data to write.
        - `options`: Optional object with encoding, flag, and other options.
        - Code
            
            ```jsx
            function writeFileSync(path, data) {
              fs.writeFileSync(path, data);
              readFileSync(path);
            }
            writeFileSync("example-file.txt", "Hello, World!");
            ```
            
    - Appends data to the end of a file asynchronously.
        
        `fs.appendFile(path, data, [options], callback)`:
        
        - `path`: Path to the file.
        - `data`: Data to append.
        - `options`: Optional object with encoding, flag, and other options.
        - `callback`: Callback function receiving error.
        - Code
            
            ```jsx
            function appendFile(path, data) {
              fs.appendFile(path, data, (err)=>{
                err
                ? console.log(`Error While Creating File: ${err}`)
                : readFile(path);
              });
            };
            appendFile("example-file.txt", "\nHello, World!");
            ```
            
    - Creates a directory asynchronously.
        
        **`fs.mkdir(path, [options], callback)`**
        
        - `path`: Path to the directory.
        - `options`: Optional object with mode, recursive, and other options.
        - `callback`: Callback function receiving error.
        - Code
            
            ```jsx
            function createDirectory(path) {
              fs.mkdir(path, (err)=>{
                err
                ? console.log(`Error While Creating Directory: ${err}`)
                : console.log(`Directory Created Successfully!`)
              })
            }
            createDirectory("example-directory"); 
            ```
            
    - Removes a directory asynchronously.
        
        `fs.rmdir(path, [options], callback)`
        
        - `path`: Path to the directory.
        - `options`: Optional object with recursive option.
        - `callback`: Callback function receiving error.
        - Code
            
            ```jsx
            function removeDirectory(path) {
              fs.rmdir(path, (err)=>{
                err
                ? console.log(`Error While Removing Directory: ${err}`)
                : console.log(`Directory Removed Successfully!`)
              })
            }
            removeDirectory("example-directory");
            ```
            
    - Renames a file or directory asynchronously.
        
        `fs.rename(oldPath, newPath, callback)`
        
        - `oldPath`: Path to the original file or directory.
        - `newPath`: Path to the new name.
        - `callback`: Callback function receiving error.
        - Code
            
            ```jsx
            function renameDirectory(path, newPath) {
              fs.rename(path, newPath, err=>{
                err
                ? console.log(`Error While Renaming Directory: ${err}`)
                : console.log(`Directory Renamed Successfully! from ${path} to ${newPath}`)
              })
            }
            renameDirectory("example-directory", "example-directory-renamed");
            ```
            
    - Gets information about a file or directory asynchronously.
        
        `fs.stat(path, callback)`
        
        - `path`: Path to the file or directory.
        - `callback`: Callback function receiving error and stats object.
        - Code
            
            ```jsx
            function getFileInfo(path) {
              fs.stat(path, (err, stats)=>{
                err
                ? console.log(`Error While Getting File Info: ${err}`)
                : console.log(stats)
              })
            }
            getFileInfo("example-file.txt");
            ```
            
    - Checks if a file or directory exists asynchronously.
        
        `fs.exists(path, callback)`
        
        - `path`: Path to the file or directory.
        - `callback`: Callback function receiving boolean indicating existence.
        - Code
            
            ```jsx
            function getFileInfo(path) {
              fs.stat(path, (err, stats)=>{
                err
                ? console.log(`Error While Getting File Info: ${err}`)
                : console.log(stats)
              })
            }
            getFileInfo("example-file.txt");
            ```
            

### OS

The Node.js OS module provides a way to interact with the operating system. It offers methods for retrieving information about the system's CPU, memory, network interfaces, and more. Some common uses include:

- Getting information about the operating system (os.platform(), os.type())
- Retrieving system memory information (os.totalmem(), os.freemem())
- Getting CPU information (os.cpus())

These functions can be useful for system monitoring, performance optimization, and creating cross-platform applications.

---

### Keywords

- What is Buffer
    
    In NodeJS, Buffer is a special type of object used to handle binary data directly, unlike JavaScript’s standard way of dealing with strings and array. Buffers allow you to work with raw memory, which is particularly useful for handling file I/O [Input & Output], network communications, and other binary data operations.
    

---