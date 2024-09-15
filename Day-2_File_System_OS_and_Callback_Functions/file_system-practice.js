import fs from "fs";

/* Read File */
function readFile(path) {
  fs.readFile(path, (err, data) => {
    err
      ? console.log("Error while reding File: " + err)
      : console.log(data.toString());
  });
}
// readFile("./example-file.txt");

/* Write File */
function writeFile(path, data) {
  fs.writeFile(path, data, (err)=>{
    err
    ? console.log(`Error While Creating File: ${err}`)
    : readFile(path)
  })
}
// writeFile("example-file.txt", "Hello, World!")

/* Append Data */ 
function appendFile(path, data) {
  fs.appendFile(path, data, (err)=>{
    err
    ? console.log(`Error While Creating File: ${err}`)
    : readFile(path);
  });
}
// appendFile("example-file.txt", "\nHello, World!")

/* Reads the contents of a file synchronously. */
function readFileSync(path) {
  const data = fs.readFileSync(path, "utf-8");
  console.log(data);
}
// readFileSync("example-file.txt");

/* Write File Synchronously */
function writeFileSync(path, data) {
  fs.writeFileSync(path, data);
  readFileSync(path);
}
writeFileSync("example-file.txt", "Hello, World!");

/* Create Directory */
function createDirectory(path) {
  fs.mkdir(path, (err)=>{
    err
    ? console.log(`Error While Creating Directory: ${err}`)
    : console.log(`Directory Created Successfully!`)
  })
}
// createDirectory("example-directory"); 

/* Remove Directory */
function removeDirectory(path) {
  fs.rmdir(path, (err)=>{
    err
    ? console.log(`Error While Removing Directory: ${err}`)
    : console.log(`Directory Removed Successfully!`)
  })
}
// removeDirectory("example-directory-renamed");

/*Rename Director */
function renameDirectory(path, newPath) {
  fs.rename(path, newPath, err=>{
    err
    ? console.log(`Error While Renaming Directory: ${err}`)
    : console.log(`Directory Renamed Successfully! from ${path} to ${newPath}`)
  })
}
// renameDirectory("example-directory", "example-directory-renamed");

/* Get File / Directory Info */
function getFileInfo(path) {
  fs.stat(path, (err, stats)=>{
    err
    ? console.log(`Error While Getting File Info: ${err}`)
    : console.log(stats)
  })
}
getFileInfo("example-file.txt");