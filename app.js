//============//Declare-and-initialize-Array//========//
let arrays = []

// arrays.push([])
// arrays.push([])

// arrays[0].push([1])
// arrays[1].push([2])

// console.log(arrays)

//===//Declare-and-initialize-a-multidimensional-array//===//
arrays.push(0)
arrays.push(1)
arrays.push(2)
arrays.push(3)
arrays.push(1)
arrays.push(0)
arrays.push(1)
arrays.push(2)
arrays.push(2)
arrays.push(1)
arrays.push(0)
arrays.push(1)
console.log(arrays)
document.write("<h2>"+arrays+"</h2>")

// ========//print numeric counting from 1 to 10//=====//

let counting = 1
for(counting; counting <=10; counting++){
    console.log(counting)
    document.write("<br/>"+counting)
}

// ==========//Multiplication-User-Number//===========//
var userNumber = prompt("Enter a number to show its multiplication table")
var numberLength = prompt("Enter legth multiplication table")
console.log("Multiplication for table "+userNumber+(" length "+numberLength+"."))
document.write("<br/><br/>Multiplication for table "+userNumber+(" length "+numberLength+"."))
for( var i=1; i<=numberLength; i++){
    let multiplication = userNumber * i
    console.log(userNumber + " x " + i + " = "+multiplication)
    document.write("<br/>"+userNumber + " x " + i + " = "+multiplication)
}

// ==========//Prints Items Using-For-Loop//===========//

var fruits = ["apple", "banana", "mango", "orange","strawberry"]
for(let fruit of fruits){
    console.log(fruit)
    document.write("<br/>"+fruit)
}

// for(i=0; i< fr i++){
// console.log("Element at index "+i+" is "+fruits)
// }


var printedFruits = [];

for (let i = 0; i < fruits.length; i++) {
    var fruit = fruits[i];
    if (!printedFruits.includes(fruit)) {
        console.log("Element at index " + i + " is " + fruit);
        document.write("<br/>Element at index " + i + " is " + fruit);
        printedFruits.push(fruit);
    }
}

// ============//Genrat-The-Following-Series//============//
//============//Counting-1-to-15//============//
document.write("<br/><h2>Counting:</h2>")
console.log("Counting:")
let count = 1;
for(i; i<16; i++){
    console.log(i)
    document.write(+i+",")
}
//==============//Reserve-Counting-10-to-1//============//
document.write("<br/><h2>Reverse Counting:</h2>")
console.log("Reverse Counting:")
let count1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
count1.reverse()
for(let counts of count1){
    console.log(counts)
    document.write(counts+",");
}
//==============//Even-Counting-0-to-20//============//
document.write("<br/><h2>Even:</h2>")
console.log("Even:")
var evenNumber = 0;
for(i = 0; i <= 20; i++){
    if(i % 2 === 0){
    console.log(i)
    document.write(i+",")
}
}
//==============//Odd-Counting-1-to-19//============//
document.write("<br/><h2>Odd:</h2>")
console.log("Odd:")
var oddNumber = 0;
for(i = 0; i <= 20; i++){
    if(i % 2 != 0){
    console.log(i)
    document.write(i+",")
}
}
//==============//Series-Counting-1-to-20+K//============//
document.write("<br/><h2>Series:</h2>")
console.log("Series:")
var evenNumber = 0;
for(i = 2; i <= 20; i++){
    if(i % 2 === 0){
    console.log(i+"k")
    document.write(i+"k,")
}
}
// //=============//“search-by-user-input”//=============//
document.write("<br/><h2>Welcome to our bakery!</h2>")
console.log("Welcome to our bakery!")
A = ["cake", "apple pie", "cookie", "chips", "patties"]
userInput = prompt("Welcome to ABC Bakery. what do you want to order sir/ma'am?")
if(userInput === A[0] || userInput === "Cake" || userInput === "Cakes"){
    console.log("Cake is Available at index 2 in our bakery.")
    document.write("Cake is <b>Available</b> at index 2 in our bakery.")
}
else if(userInput === A[1] || userInput === "Apple Pie"){
    console.log("Apple Pie is Available at index 2 in our bakery.")
    document.write("Apple Pie is <b>Available</b> at index 2 in our bakery.")
}
else if(userInput === A[2] || userInput === "Cookie" || userInput === "Cookies" ){
    console.log("Cookie is Available at index 2 in our bakery.")
    document.write("Cookie is <b>Available</b> at index 2 in our bakery.")
}
else if(userInput === A[3] || userInput === "Chips"){
    console.log("Chips is Available at index 2 in our bakery.")
    document.write("Chips is <b>Available</b> at index 2 in our bakery.")
}
else if(userInput === A[4] || userInput === "Patties"){
    console.log("Patties is Available at index 2 in our bakery.")
    document.write("Patties is <b>Available</b> at index 2 in our bakery.")
}
else{
    console.log("We are Sorry. "+userInput+" is not available in our bakery")
    document.write("We are Sorry. "+userInput+" is not <b>available</b> in our bakery")
}
//==============//Largest-Number-In-Array//============//
document.write("<br/><h2>Largest Number In Array.</h2>")
console.log("Largest Number In Array.")
console.log("Array Items:")
document.write("<h3>Array Items:</h3>")
let number = [24, 53, 78, 91, 12]
for(let numbers of number){
console.log(numbers)
document.write(numbers+",")
}
console.log("The Largest Number is: ")
let notFound = true
while (notFound && number.length > 0) {
    if (number[0] === 91) {
    console.log("91");
    document.write("<br/>The Largest number is: "+"91") 
    notFound = false;
    } else {
    number.shift();
    }
    }
  
//==============//Smallest-Number-In-Array//============//
document.write("<br/><h2>Smallest Number In Array.</h2>")
console.log("Smallest Number In Array.")
console.log("Array Items:")
document.write("<h3>Array Items:</h3>")
let smallNumber = [24, 53, 78, 91, 12]
for(let number1 of smallNumber){
console.log(number1)
document.write(number1+",")
}
console.log("The Largest Number is: "+smallNumber[4])
document.write("The Largest Number is: "+smallNumber[4])

//==============//Multiples-of-5-Ranging-1-to-100//===============//
document.write("<br/><h2>Multiples of 5 Ranging 1 to 100.</h2>")
console.log("Multiples of 5 Ranging 1 to 100.")
var multiples = 5
for(var i=1; i<=20; i++){
 let multiplication = multiples * i
    console.log(multiplication)
    document.write(multiplication+",")
}






    