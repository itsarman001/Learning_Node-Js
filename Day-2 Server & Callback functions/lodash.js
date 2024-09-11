import _ from 'lodash'

// Filter
const numbers = [10, 20, 30, 40, 50];
const filteredNumbers = _.filter(numbers, (num) => num > 30);
console.log(filteredNumbers)

// Map
const names = ["Alice", "Bob", "Charlie"];
const upperCaseNames = _.map(names, (name) => name.toUpperCase());
console.log(upperCaseNames)

// Chunked Array
const myArray = [1, 2, 3, 4, 5, 6];
const chunkedArray = _.chunk(myArray, 2);
console.log(chunkedArray)

// Working with objects

// merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = _.merge(obj1, obj2);

// Get value from nested objects
const user = { info: { name: "John", age: 30 } };
const userName = _.get(user, "info.name");
console.log(`Merged Object: ${mergedObj}, value from nested object: ${userName}`)
