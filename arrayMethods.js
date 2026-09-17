
// //array means Store the orderd collection of values in a single variable 


// const array = ["banana" , "apple" , "graps", "papaya"]
// console.log(array.length)  //4

// //PUSH : add the element to end of array
// // Adds the value to the original array.
// // Returns the new array length.

// let fruits = ["apple", "banana"];

// fruits.push("watermelon")
// console.log(fruits)

// //POP : remove the last element of an array

// fruits.pop()
// console.log(fruits)

// //UNSHIFT : Adds an element to the beginning.

// fruits.unshift("coconut")
// console.log(fruits)

// //SHIFT : remove an element to the beginning
// fruits.shift();

// console.log(fruits);

// //Searching Methods 
// // includes() : Check whether an element exist

// let fruit = ["apple", "banana", "mango"];

// console.log(fruit.includes("banana"));

// //indexOf() : Return the index of an element // if not return -1

// console.log(fruit.indexOf("banana"));

// // Extracting / Combining
// //slice() : Returns a portion of an array without changing the original array.

// let array1 = ["apple", "banana", "mango", "orange"];

// let result = array1.slice(1, 3);

// console.log(result);

// // splice() : Used to add, remove, or replace elements.

// let result1 = array1.splice(1,4, 'pink');

// console.log(result1);

// //forEach():Runs a function for every element.

// let fruits2 = ["apple", "banana", "mango"];

// fruits2.forEach(function(fruit) {
//     console.log(fruit);
// });

// //map() : Creates a new array by changing each element.

// let nums = [2,3,4,6,8]
// let rel = nums.map(function(num){
//     return num *2
// })

// console.log(rel)

// //filter() : Creates a new array containing elements that satisfy a condition.
// let numbers = [10, 15, 20, 25, 30];

// let resu = numbers.filter(function(num) {
//     return num > 20;
// });

// console.log(resu);



//Add "Orange" to the end of the array using push().
var fruits = ["mango" , 'apple',"grap" , 'banana']
var result = fruits.push("orange")
console.log(fruits)

//Use map() to create a new array where every number is multiplied by 2.
var num = [10, 20, 30, 40]
var reslt = num.map((i) =>{
    return i*2
})
console.log(reslt)

//Use filter() to create a new array containing only the numbers greater than 20.

var num2 = [10, 15, 20, 25, 30, 35]

var rel = num2.filter((i) =>{
    return i > 20
})
console.log(rel)

//Use find() to get the first number greater than 15.

var num3 = [5, 12, 18, 25, 30]
 var value = num3.find(function(i) {
    return i > 15
 })
 console.log(value)

 //Use forEach() to print each item separately using console.log().
 var language = ["HTML", "CSS", "JavaScript", "Python"]

 var lang = language.forEach((i) => {
      console.log(i) 
 })
//Use includes() to check whether "JavaScript" exists in the array.

var include = language.includes("JavaScript")
console.log(include)

//Use indexOf() to find the position of "JavaScript".
var findpostion = language.indexOf("JavaScript")
console.log(findpostion)

//Print the new array.
var fruitss = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

var nerarray = fruitss.slice(1,4)
console.log(nerarray)

var newarray = fruitss.splice(2,1)
console.log(fruitss)
