/*
// FUNCTIONS

// a function is almost like a variable. But a variable holds a value and a function holds a piece of code
// functions are the most simple form of a piece of code that we can reuse through our entire 
// applikation

function logger() {
    console.log("Lets learn about functions");
}
// first we define the function by using function and then name it
// function logger() and then we put paretheses
// after the () comes the function body 
// the function body is defines by using {} 
// so if we wanted to log this piece of code many times
// instead of writing alot of console.logs... we just call the function

//logger();
//logger();
//logger();
// and we can call the function as many times as we want
// but this example isnt really useful to us

// and functions can do so much more!
// think of it like this:
// a function is like a machine, and we can put stuff into that machine
// the machine can then process that and give us a for example a finished product in return

// in this example we are using a fruit processor as example and we are going to make juice
function fruitProcessor(apples, oranges) {
  // so inside of () we can define parameters. Like what stuff we should put into ourmachine
  // in this case we want apple & orange juice returned to us, so we put apples and oranges in
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    // then we define juice
    // and this is important! the variable juice ONLY lives inside the fucntion body if
    // we do not return it. We cannot reach it outside of the function body
    return juice;
    // we use the leyword return to return the value (juice in this case)
    // if we dont use return the fucntion wont actually return anything
}

fruitProcessor(3, 0);
fruitProcessor(5, 4);
// here we call for the function and this is the place where we tell the function
// how many apples and oranges we want!
// we can use whatever number we want it doesnt matter
// so inside (5, 4) 5 represents apples and 4 represents oranges

const appleJuice = fruitProcessor(3, 5);
// for us to actually log it to the consol we first need to put the result into a variabel

console.log(appleJuice);
// then we can consol.log it
// so you can think of the parameter like blank spaces that you will need
// need to fill out later on
// the value of the parameters are called argument

function calcAge(age1, age2) {
    const resAge = age1 + age2;
    return resAge;
}

console.log(calcAge(20, 10));

// we created a very generic function which will work for any numer of apples and oranges
// so we left our apples and oranges as our blank spaces
// and then we filled them in
// we can call it as many times we want but we should call it atleast 1 time
// if we dont call it the code will never run
// the first function we wrote doesnt return anythign which is ok
// but its way more usual that it does return something

// this is probably a little bit confusing for you which is totally normal
// so after class i want you to really go through what we did this lecture
// and read the resources fot this lecture

// conslusion - functions allow us to write more maintainable code
// cause it lets us write reusable code so we dont have to write code over and over again
// DRY - do not repeat yourself! this goes for all programming languages

// remember the built in function we used?
const num = Number('23');
console.log(num);



// FUNCTION DECLARATION & EXPRESSION

function calcAge(birthYear) {
    return 2020 - birthYear;
}
// FUNCTION DECLARATION

const myAge = calcAge(1997);
console.log(myAge);

// this is a function declaration the same as we used above

const calcAge2 = function (birthYear) {
    return 2020 - birthYear;
}
// and this is a function expression

const age2 = calcAge(1985);
console.log(age2);
// FUNCTION EXPRESSION

// in js functions are actually just values
// and if it is an value we can store it in a variable
// so whats the big deal?
// well the main difference is that we can actually call function declarations
// before they are defined in the code
// we cant do the same with the expression
// this happens because of a process called hoisting - will not talk about now :)

// which to use?
// personal preference 

// ARRAYS

// lets say we want to store our friends names in a variable so we can use them
// later in our program

const friend1 = 'Janne';
const friend2 = 'Nisse';
const friend3 = 'Sara';
// doing this is repeating yourself and if we had like 50 friends
// it would be soooo much code. So not a good practice
// and we can actually store this in one place because of  data structures in js 
// array is a data structure
// its like a big container where we can store data in case we have more than a single value
// most important data structures are arrays and objects

const friends = ['Janne', 'Nisse', 'Sara'];
//console.log(friends);
// storing all our friends into oine array is a much better approach

//const years = new Array(1994, 1985, 2015, 2020);

// array can hold any value and type 
// above is a different way of creating an array
// we needed to use the new keyword
// use the literal syntax with brackets - its way more common

//console.log(friends[0]);
// lets say we want to log the first element, the first name in the array
// then we write 0 becuase arrays starts at 0. So the first element is always 0

//console.log(friends[2]);
// what do we get? 

//console.log(friends.length);
// this will give us the exact number of elements in the array more about length later

//console.log(friends[friends.length -1]);
// this is very useful so we dont have to count all elements in the array imagine big data


// we can mutate the array of we want to change something
// lets say we are no longer friends with Nisse and we want to change that name
friends[1] = 'Karin';
//console.log(friends);
// and now Nisse is replaced with Karin
// have a look at where it changes
// but wait? const cant be changed or?
// what i didnt tell u at that time is that only primitive values are not changeable
// an array is a non-primitive value (object) and this works because how js stores in its memory
// but we cannot replace the whole array like this
//friends = ['Bob', 'Åke'];

const firstName = 'Helena';
const helena = [firstName, 'Johansson', 2020-1985, 'developer', friends];
// an array can hold different values
//console.log(helena);
//console.log(helena.length);
//console.log(helena[4]);


const calcAge = function (birthYear) {
    return 2020 - birthYear;
}
// function to calculate age

const yearOfBirth = [1999, 1985, 2020, 2016, 1978];
// array with birth years

calcAge(yearOfBirth);
//console.log(calcAge(yearOfBirth));
// yearsOfBirth is an array and now the function wont know what to do
// we cant take a number minus an array

// but we can do it with indiviual elements in the array
const firstAge = calcAge(yearOfBirth[0]);
const secondAge = calcAge(yearOfBirth[1]);
const thirdAge = calcAge(yearOfBirth[yearOfBirth.length -1]);
//console.log(firstAge, secondAge, thirdAge);

// JS has some built in functions that we can apply on arrays and these are called methods
// think of them as array operations
// there are countless array methods in js but we are going to learn the basic ones

friends.push('Benny');
console.log(friends);
// push adds an element to the last index of the array
// push is a method which technically is a function
// and now we have the origianl array plus the new name
// push is a function so it can also return something
// the value it retuns is the length of the new array

friends.unshift('Lena');
console.log(friends);
// unshift adds an element in the beginning of the array
// just like push method also returns the new length

// we can also remove elements from the array
friends.pop();
// pop cannot execute anything else than remove the last element
// opposite of push and no argument is needed causde it removes the last element
console.log(friends);
// pop doesnt return the new length but the removed element

// lets remove first element
friends.shift();
console.log(friends);
// we do not need an argument and it returns the element that was removed

// very useful is indexOf which tells us what position an element is located at
console.log(friends.indexOf('Janne'));
// if u do this for an element that is not there you wel get -1
console.log(friends.indexOf('Helena'));

// es6 feature includes
// will return true if the element is in the array and false if not
console.log(friends.includes('Janne'));
// this is testing with strict equality which means it does not do type coersion
// so if we push a number into the array and then test if it includes the string '22'
// it wont work it will return false
// but if we test if it includes the number 22 it will return true
// we can use the includes method to write conditions
// like this
if (friends.includes('Sara')) {
    console.log('You have a friend caled Sara');
}

// OBJECTS

// to define an object we use curly bracers
// we used arrays before like this
//const helenaOld = ['Helena', 'Johansson', 2020-1985, 'developer'];

// and here is the same but now it an object
const helena = {
  firstName: "Helena",
  lastName: "Johansson",
  age: 2020 - 1985,
  job: "developer",
  dogs: ["Tore", "Clementine", "Doris"],
};
// this object has 5 properties
// we can assign values to these properties
// objects are one of the fundamentals things in javascript
// this is the object literal syntax
// just like array we use objects to group together properties that belong 
// together. But with objetcs the order how we access them doesnt matter
// in array it matters
// so how do we get data from ab object?
//console.log(helena);

// first way of getting a prop is using the . notation
console.log(helena.lastName);

// we can do the same with bracket notaiton
console.log(helena["lastName"]);

//const nameKey = "Name";
//console.log(helena["last" + nameKey]);
// in brackets we can put any expression
// we can not do that in the dot notaion

const interestedIn = prompt(
  "What do you want to know about Helena? Choose between firstName, lastName, age, job and dogs"
);
//console.log(interestedIn);
//console.log(helena.interestedIn);
// can we do helena.interestedIn?
// we get undefined
// and we get that when we try to access a prop that does not exist


//console.log(helena[interestedIn]); 
// if we use bracket notation we can put any expression in there
// js will now replace interestedin with the actual value so this will work
// the expression in the brackets will get evaluated
// we can also try to access something that is not here a prop that doesnt exist
// so lets handle if the case is that we try to do that
// we know that undefined is a falsy value
// we can use that to our advantage and log a custom sentence when a prop doesnt exist

if (helena[interestedIn]) {
    console.log(helena[interestedIn]);
} else {
    console.log('Wrong request!');
}
// if the value exists ( the if condition) that code will be executed
// if its not true then execute the else block
// so instead of loggin undefined we log our custom sentence when a prop doesnt exist
// so now we actually handled an error
*/


