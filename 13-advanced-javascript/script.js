// // Ternary Operator
// function isUserValid(bool) {
//     return bool;
// }

// var answer = isUserValid(true) ? "You may enter" : "Access denied.";

// // Switch statement
// function moveCommand(direction) {
//     let whatHappens;
//     switch (direction) {
//         case "forward":
//             whatHappens = "you encounter a monsterr";
//             break;
//         case "left":
//             whatHappens = "you find a chest";
//             break;
//         case "right":
//             whatHappens = "you enter a small room";
//             break;
//         default:
//             whatHappens = "you meet your doom";
//     }
//     return whatHappens;
// }

// console.log(moveCommand("left"));

// ES5 and ES6
// let + const

// const player = 'bobby'; // can't reassign value of a const variable.
// let experience = 200;
// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true; // won't change parent variable because let sets scope to this block.
//     console.log('inside', wizardLevel);
// }

// console.log('outside', wizardLevel);

// // If we know a value is not going to change, like in a function us const
// const a = function() {
//     console.log("a");
// }

// // Note with objects you can't reassign the variable but you can change the objects values.
// const obj = {
//     player: "bobby",
//     experience: 110,
//     wizardLevel: false
// }

// // can't do: Uncaught TypeError: Assignment to constant variable.
// //obj = 4;

// // can do:
// obj.experience += 10;
// console.log(obj);

// // Destructuring
// const {player, experience} = obj;
// console.log(player, experience);
// console.log(obj);
// let {wizardLevel} = obj;
// console.log(wizardLevel);

// // Object Properties
// // Can have dynamic variable names
// const name1 = 'john';

// const obj2 = {
//     [name1]: 'hello',
//     ['ray' + 'smith']: 'hiiii'
// }

// console.log(obj2);

// Template Strings
// const customer = "sally";
// const age = 43;
// const greeting = `Hello ${customer} you seem to be ${age - 5}`;
// console.log(greeting);

// // Default arguments
// function greet(cust = '', age = 34, pet = 'cat') {
//     console.log(`Hello ${cust} you seem to be ${age - 5}. I like your ${pet}`);
// }

// greet('sally');

// Symbol 
// - Creates a complete unique type.
// - Mostly used as an identifier for object properties.

// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo');

// Arrow Functions
// If we have a single return we can put it on one line like this:
// const add = (a, b) => a + b;


// Advanced Functions 

// Closures
// - The function first ran. The function executed. It's never going to execute again.
// - The function second will still have access to the greet variable in first because a function 
//   always has access to variables in it's parent scope.
// const first = () => {
//     const greet = 'Hi';
//     const second = () => {
//         return greet;
//     }
//     return second;
// }

// const newFunc = first();
// console.log(newFunc());

// Currying
/*
    The process of converting a function, that takes multiple arguments, into a function that takes them
    one at a time.

*/
// instead of:
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// console.log(curriedMultiply(3)(4));
// // The reason we might do this is it makes the function more extensible.
// const multiplyBy5 = curriedMultiply(5);
// console.log(multiplyBy5(4));

// Compose
/*
    The act of putting two functions together to create a third function
    where the output of one function is the input of the other.
*/
// const compose = (f, g) => (a) => f(g(a));

// const sum = (num) => num + 1;

// console.log(compose(sum, sum)(5));

// Avoiding Side Effects, Functional Purity.
/*
    - Side Effects can be ok but we should avoid if at all possible.
    - Functional Purity - Complete avoidance of side effectss.
        - Always avoide side effects
        - Always return a value
    - If we do this our function will be Deterministic
    - Deterministic: Same input arguments will result in the same output returned.
*/
// let a = 1;
// function b() {
//     a = 2; // Side Effect. Something that happens in a function that effects outside its scope.
//     console.log("function b has been ran."); // Another side effect.
// }

//Solve these problems:

//#1 Create a one line function that adds adds two parameters
// const sum2 = (a, b) => a + b;

//Closure: What does the last line return?
// const addTo = x => y => x + y;
// let addToTen = addTo(10);
// addToTen(3); // 13

//Currying: What does the last line return?
// const sum3 = (a, b) => a + b;
// const curriedSum1 = (a) => (b) => a + b;
// curriedSum1(30)(1); // 31


//Currying: What does the last line return?
// const sum4 = (a, b) => a + b;
// const curriedSum2 = (a) => (b) => a + b;
// const add5 = curriedSum2(5);
// add5(12); // 17

//Composing: What does the last line return?
// const compose = (func1, func2) => (a) => func1(func2(a));
// const add1 = (num) => num + 1;
// const add10 = (num) => num + 10;
// compose(add1, add5)(10); // 21

//What are the two elements of a pure function?
// - There are no side effects. Nothing outside the function is affected 
//   by what happens inside the function. It depends only on it's own inputs
//   and no state or data change outside of the function.
// - It returns a value.
// - This makes the function deterministic. Meaning when ever the same values
//   go in the same value will come out.

// -----------------------------------------------------------------------------------------------------------------------

// Advanced Arrays
// const array = [1, 3, 6, 7, 15, 3, 16];
// const newArray = []
// array.forEach((num) => {
//     newArray.push(num * 2);
// });

// console.log(newArray);
// console.log(array);
// // Map
// const mapArray = array.map((num) => {
//     return num * 2;
// });
// If map function has one parameter you can remove brackets
// if map function has on one line then you can remove return keyword
// const mapArray2 = array.map( num => num * 2);

// console.log(mapArray);

// Filter
// const filterArray = array.filter( num => num > 5);
// console.log(filterArray);

// Reduce
// const reduceValue = array.reduce( (accumulator, num) => {
//     return accumulator + num;
// }, 0);

// console.log(reduceValue);

// -----------------------------------------------------------------------------------------

// Advanced Objects
// Reference Type
// Here object1 is equal to object2 but not object 3 for the reasons shown below.
// let object1 = { value: 10};
// let object2 = object1; // object to is passed a reference to the same place in memory as object 1 
// let object3 = { value: 10}; // object 3 refers to a different space in memory.

// Context
/*
    - Context different to Scope
    - Context tells us where we are within the object
    - This refers to the object we are in
    - To create a new context we create a new object

*/
// console.log(this);
// this.alert("hello");

// const object4 = {
//     a: function() {
//         console.log(this);
//     }
// }

// object4.a();


// Instantiation
// class Player {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }

//     introduce() {
//         console.log(`Hi I am ${this.name}. I am a ${this.type}.`);
//     }
// }

// class Wizard extends Player {
//     constructor(name) {
//         super(name, 'Wizard');
//     }

//     play() {
//         console.log(`Weeeee I'm fighting like a ${this.type}`);
//     }
// }

// const warlock1 = new Player("Raymond", "Warlock");
// warlock1.introduce();
// console.log(warlock1.name);

// const wizard1 = new Wizard("Warlfrud");
// wizard1.introduce();
// wizard1.play();


// ES7 (ES 2016) - Two Additions
// includes()
// console.log('Helloooo'.includes('o'));

// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('dog'));
// console.log(pets.includes('bird'));

// exponential operator
// const square = (x) => x ** 2;
// console.log(square(5));

// ES8
// 'Turtle'.padStart(10);
// console.log('Turtle'.padEnd(10, '.'));

// Trailing commas in function parameters allowed
// const fun = (a, b, c, d, ) => {
//     console.log(a);
// }

// fun(1, 2, 3, 4);

// Object.entries and object.values
// let obj = {
//     un1: 'Santa',
//     un2: 'Rudolph',
//     un3: 'Grinch'
// }

// Object.values(obj).forEach( value => {
//     console.log(value);
// });

// Object.entries(obj).forEach( entry => {
//     console.log(entry);
// });

// for(const [index, value] of Object.entries(obj)) {
//     console.log(index, value);
// }

// const array2 = Object.entries(obj).map( value => value[1] + value[0].replace('un', ''));
// console.log(array2);

// // ES10
// // .flat() flattens array to one level by default or a set number of levels
// const array = [1, [2, 4, 3], 4, 4, ['a', 'b', [1, 3, 4]]];
// // console.log(array.flat());
// // console.log(array.flat(2));

// // .flat() can be used to clean up null values
// // const entries = ['bob', 'sally', , , , 'cindy'];
// // console.log(entries.flat());

// // .flatMap() allows us to use the map then flat functions combined on an array
// const arrayFlattened = array.flatMap( value => {
//     console.log(value);
//     return value + "---";
// });
// console.log(arrayFlattened);

// // trimStart(), trimEnd()
// const userEmail = "      bob@bob.com";
// const userEmail2 = "sal@big.com     ";
// console.log(userEmail.trimStart());
// console.log(userEmail2.trimEnd());

// // fromEntries transforms a list of key, value pairs into an object.
// userProfiles = [['commanderTom', 23], ['zoolander', 40], ['hansle', 18]];
// console.log(Object.fromEntries(userProfiles));

// // try catch update so it can have but does not require (error) after catch
// try {
//     bob45 + 6
// } catch {
//     "ooopsie"
// }
/*
// Advanced Loops
const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

// For of - iterating of arrays and strings
for (item of basket) {
    console.log(item);
}

// For in - enumerating over object properties
for (item in detailedBasket) {
    console.log(item);
}

*/

/*
// ES2020
// BigInt - add 'n' to convert number to BigInt data type.
9007199254740991 + 10 // gives wrong answer 9007199254741000
9007199254740991n + 10n // gives write answer 9007199254741001

// Optional Chaining Operator ?.
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}
let dan_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.49,
        weight: 60
    }
}

console.log(will_pokemon?.pikachu?.weight);
console.log(dan_pokemon?.pikachu?.weight);

// Nullish Coalescing Operator - Checks if a value is null or undefined
// Optional Chaining Operator ?.
let sally_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: ''
    }
}
let tammy_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.49,
        weight: 60
    }
}

console.log('sally', sally_pokemon?.pikachu?.power ?? 'no power');
console.log('tammy', tammy_pokemon?.pikachu?.power ?? 'no power');
*/

/*
// ES2021
const str = "this a realy good string";
const newStr = str.replaceAll('good', 'bad');
console.log(newStr);

// ES2022
const arr = [100, 200, 400, 5000, 10];
const secondLast = arr.at(-2);
console.log(secondLast);
console.log(arr.at(1));

// ES2023
// .findLast finds the last item in a filtered array
// monstors.findLast(x => y.z > a);

// .findLastIndex(item => item.level > 15);
// instead of the last value findLastIndex returns the index of the last filtered value

const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];
console.log(ztmMonstersList.toReversed());
console.log(ztmMonstersList);
console.log(ztmMonstersList.toSorted());
console.log(ztmMonstersList);

console.log(ztmMonstersList.with(2, 'Bongo'));

// ES2024
const pokemons = [
    { name: "bulbasaur", type: "grass"},
    { name: "blastoise", type: "water"},
    { name: "charmander",  type: "fire"},
    { name: "ivysaur", type: "grass"},
    { name: "charmeleon",  type: "fire"},
    { name: "charizard",  type: "fire"},
    { name: "squirtle", type: "water"},
    { name: "venusaur", type: "grass"},
    { name: "wartortle", type: "water"},
    { name: "pikachu", type: "electric"}
  ];

console.log(Object.groupBy(pokemons, (i) => i.type));
*/
/* 
// Debugging
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        debugger;
        return accumulator.concat(array);
    }, []
)

console.log(flattened);
*/
/*
Q1 https://academy.zerotomastery.io/courses/complete-web-developer-zero-to-mastery/lectures/13250441

const array = [1,2,4,591,392,391,"2",2,5,10,2,"15",1,1,"2",1,20,20];

const organiseArray = (array) => {
    let organisedArray = [];
    
    let numberArr = filterArr('int', array);
    let stringArr = filterArr('string', array);
    
    numberArr = sortedUniquesArr(numberArr);
    numberArr = numberArr.map((arr) => {
        if (arr.length > 1) {
            return arr;
        } else {
            return arr[0];
        }
    });
    organisedArray.push(numberArr);
    
    stringArr = convertArray('int', stringArr); 
    stringArr.sort((a,b) => a-b);
    stringArr = convertArray('string', stringArr);
    stringArr = sortedUniquesArr(stringArr);
    organisedArray.push(stringArr);
   
    return organisedArray;
}

const filterArr = (type, arr) => {
    switch (type) {
        case 'int': 
            return arr.filter( (value) => Number.isInteger(value));
        case 'string':
            return arr.filter( (value) => typeof value === 'string');
        default:
            return "type not allowed";
    }
}

const sortedUniquesArr = (array) => {
    array.sort((a,b) => a-b);
    uniques = array.filter((value, index, arr) => arr.indexOf(value) === index);
    
    newArray = uniques.map((value) => {
        return array.filter((value2) => value === value2)
    });
    return newArray;
}

const convertArray = (toType, array) => {
    switch (toType) {
        case 'int':
            return array.map((value) => Number.parseInt(value));
        case 'string':
            return array.map((value) => value.toString());
    }
    return array;
}

const organisedArray = organiseArray(array);
console.log(organisedArray);

*/
/*
const findNumSumTarget = (array, target) => {
    // flatten the array
    array = array.flat();
    //debugger;
    // for each item in the array test it being added to each item in the array
    for (const num1 of array) {
        // create a new array that removes the first instance of num1 from the array
        const array2 = [...array];
        array2.splice(array.indexOf(num1), 1);
        for (const num2 of array2) {
            if (num1 + num2 === target) {
                return [num1, num2];
            }
        }
    }
    return [];
}

console.log(findNumSumTarget([7, 2, 3, 2, 1], 4));
*/

// Turn Hex to RGB or RGB to Hex depending which one is sent
// Hex #00FF00 or #FFF or 00FF00 or FFF, rgb(0, 255, 0)
const colorConvert = (value) => {
    const hexReg = new RegExp(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    const rgbReg = new RegExp(/^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/);

    if (hexReg.test(value)) {
        return hexToRGB(value);
    } else if (rgbReg.test(value)) {
        return rgbToHex(value);
    } else {
        return "color format not excepted. Try #FF00FF or #F0F or rgb(255, 0, 255)";
    }
}

const hexToRGB = (value) => {
    value = value.replace('#', '');
    
    value = value.length === 3 ? doubleCharacters(value) : value;

    // let red = Number("0x" + value.slice(0,2));
    // let green = Number("0x" + value.slice(2,4));
    // let blue = Number("0x" + value.slice(4,6));
    let red = hexToDec(value.slice(0,2));
    let green = hexToDec(value.slice(2,4));
    let blue = hexToDec(value.slice(4,6));

    return `rgb(${red}, ${green}, ${blue})`;
}

const rgbToHex = (value) => {
    value = value.replace('rgb(', '');
    value = value.replace(')', '');
    //debugger;
    let red, green, blue;
    [red, green, blue] = value.split(', ')
    //debugger;
    red = decToHex(parseInt(red));
    red = red.length === 1 ? doubleCharacters(red) : red;
    green = decToHex(parseInt(green));
    green = green.length === 1 ? doubleCharacters(green) : green;
    blue = decToHex(parseInt(blue));
    blue = blue.length === 1 ? doubleCharacters(blue) : blue;
    return `#${red}${green}${blue}`;
}

const decToHex = (dec) => {
    let val = dec.toString(16);
    return val;
}

const doubleCharacters = (string) => string.split('').reduce( (acc, char) => acc + char + char, '');

const hexToDec = (hex) => Number("0x" + hex);


console.log("#00FF00", colorConvert("#00FF00"));
console.log("#0F0", colorConvert("#0F0"));
console.log("#00FF00", colorConvert("#ff5882"));
console.log("#00FF00", colorConvert("#4ecc4e"));
console.log("rgb(0, 255, 0)", colorConvert("rgb(0, 255, 0)"));
console.log("rgb(78, 15, 29)", colorConvert("rgb(78, 15, 29)"));
console.log("rgb(78, 204, 78)", colorConvert("rgb(78, 204, 78)"));
console.log("rgb(23, 37, 165)", colorConvert("rgb(23, 37, 165)"));
console.log("rgb(255, 88, 130)", colorConvert("rgb(255, 88, 130)"));