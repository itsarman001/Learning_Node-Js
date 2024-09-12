import { ifError } from "assert";
import fs from "fs";
import os from "os";

const user = os.userInfo();
console.log(user);


// Practice Questions
// Creating and Writing Files
// This code block is creating a file in root directory
fs.appendFile("./greeting.txt", `Hi, i am ${user.username}!\n`, () =>
  console.log("File Created and writing completed")
);

// Creating a new blank file
fs.open("empty-file.txt", "w", (err, file)=>{
  if(err) return console.log(`Error while creating empty file: ${err}`);
  console.log("File created successfully!")
})

// Reading Files
fs.readFile("greeting.txt", "utf-8", (err, data) => {
  if (err) return console.error("Error reading file:", err);
  console.log("File content:\n", data);
});
