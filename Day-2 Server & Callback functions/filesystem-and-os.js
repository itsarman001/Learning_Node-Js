import fs from "fs";
import os from "os";

const user = os.userInfo();
console.log(user);

// This code block is creating a file in root directory
fs.appendFile("./greeting.txt", `Hi, i am ${user.username}! \n`, () =>
  console.log("File Created and writing completed")
);