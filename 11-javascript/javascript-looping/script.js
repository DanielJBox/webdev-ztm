
// For Each loop
var todos = [
    "clean room",
    "make dinner",
    "clean dishes", 
    "study javascrtip",
    "build Worth It"
];

var homeTodos = [
    "clean house",
    "make breakfast",
    "clean clothes", 
    "study",
    "build bird house"
];

function logTodos(todoItem, index) {
    console.log(todoItem);
    todos[index] += "!";
}

todos.forEach(logTodos);
homeTodos.forEach(logTodos);
console.log(todos);



// Do While loop
// var counterTwo = 10
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);


// While loop
// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++;
// }

// For loop
// var todos = [
//     "clean room",
//     "make dinner",
//     "clean dishes", 
//     "study javascrtip",
//     "build Worth It"
// ];

// todosLength = todos.length;
// for (let i = 0; i < todosLength; i++) {
//     console.log(todos.pop());
// }
// console.log(todos);


// var todos = [
//     "clean room",
//     "make dinner",
//     "clean dishes", 
//     "study javascrtip",
//     "build Worth It"
// ];

// for (let i = 0; i < todos.length; i++) {
//     todos[i] = todos[i] + "!";
// }
// console.log(todos);