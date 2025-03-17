// Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
};

const newAnimals = { ...animals };

const { tiger, ...rest } = { ...animals, monkey: 3 };

console.log("tiger", tiger);
console.log("The rest", rest);

console.log(newAnimals);

// // Async Await

// // Instead of:
// const playerStart = () => {
//     movePlayer(100, "Left")
//         .then(() => movePlayer(10, "Right"))
//         .then(() => movePlayer(400, "Left"))
//         .then(() => movePlayer(330, "Right"));
// };

// // Async Await is written like this:
// const playerStartAwait = async () => {
//     const firstMove = await movePlayer(100, "Left"); // pause
//     await movePlayer(10, "Right"); // pause
//     await movePlayer(400, "Left"); // pause
//     await movePlayer(330, "Right"); // pause
// };

// // Instead of:
// const fetchUsersPromise = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((resp) => resp.json())
//         .then(console.log);
// };

// // Async Await is written like this:
// const fetchUsersAwait = async () => {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await resp.json();
//     console.log(data);
// };
// // fetchUsersPromise();

// // fetchUsersAwait();

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums",
// ];

// // Instead of:
// // Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
// //     .then((array) => {
// //         console.log("users", array[0]);
// //         console.log("posts", array[1]);
// //         console.log("albums", array[2]);
// //     })
// //     .catch("oops");

// const getData = async () => {
//     try {
//         const [ users, posts, albums ] = await Promise.all(urls.map(
//             (url) => fetch(url).then((resp) => resp.json())
//         ));
//         console.log("users", users);
//         console.log("posts", posts);
//         console.log("albums", albums);
//     } catch (err) {
//         console.log('oops', err);
//     }
// }

// getData();

// Solve the below problems:

// // #1) Convert the below promise into async await
// fetch("https://jsonplaceholder.typicode.com/users/")
//     .then((response) => response.json())
//     .then(console.log);

// const getData1 = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/");
//     const data = await response.json();
//     console.log(data);
// };

// // #2) ADVANCED: Update the function below from the video to also have
// // async await for this line: fetch(url).then(resp => resp.json())
// // So there shouldn't be any .then() calls anymore!
// // Don't get discouraged... this is a really tough one...
// const urls1 = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums",
// ];

// const getData = async function () {
//     try {
//         const [users, posts, albums] = await Promise.all(
//             urls1.map(async (url) => {
//                 const response = await fetch(url);
//                 return response.json();
//             })
//         );
//         console.log("users", users);
//         console.log("posts", posts);
//         console.log("albums", albums);
//     } catch (error) {
//         console.log("ooooops", error);
//     }
// };

// getData();

// // #3)Add a try catch block to the #2 solution in order to catch any errors.
// // Now, use the given array containing an invalid url, so you console.log
// // your error with 'oooooops'.
// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholdeTYPO.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums",
// ];

// // Solve the questions below:

// // #1) Create a promise that resolves in 4 seconds and returns "success" string
// const makeFakeAPICall = () => {
//     return "success";
// };

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(makeFakeAPICall());
//     }, 4000);
// });

// // #2) Run the above promise and make it console.log "success"
// promise
//     .then((response) => response + "!")
//     .then((response) => {
//         console.log(response + "?");
//     })
//     .catch((err) => {
//         console.log("Error message" + err);
//     });
// // #3) Read about Promise.resolve() and Promise.reject(). How can you make
// // the above promise shorter with Promise.resolve() and console loggin "success"
// const promise2 = Promise.resolve(
//     setTimeout(() => {
//         console.log(makeFakeAPICall() + "##");
//     }, 5000)
// );

// // #4) Catch this error and console log 'Ooops something went wrong'
// Promise.reject("failed").catch(console.log("oops something went wrong"));

// // #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// // Console.log the output and make sure it has a catch block as well.
// const urls = [
//     "http://swapi.dev/api/people/1",
//     "http://swapi.dev/api/people/2",
//     "http://swapi.dev/api/people/3",
//     "http://swapi.dev/api/people/4",
// ];

// Promise.all(
//     urls.map((url) => {
//         return fetch(url).then((resp) => resp.json());
//     })
// ).then((results) => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
//     console.log(results[3]);
// });
// // #6) Change one of your urls above to make it incorrect and fail the promise
// // does your catch block handle it?
// const urls2 = [
//     "http://swapi.dev/api/people/1",
//     "http://swap.dev/api/people/2",
//     "http://swapi.dev/api/people/3",
//     "http://swapi.dev/api/people/4",
// ];

// Promise.all(
//     urls2.map((url) => {
//         return fetch(url).then((resp) => resp.json());
//     })
// )
//     .then((results) => {
//         console.log(results[0]);
//         console.log(results[1]);
//         console.log(results[2]);
//         console.log(results[3]);
//     })
//     .catch(() => console.log("error, woopsie"));

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ];

// Promise.all(urls.map(url => {
//     return fetch(url).then(resp => resp.json())
// })).then( results => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
// }).catch( () => console.log('error'));

// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("Stuff Worked");
//     } else {
//         reject("Error, it broke");
//     }
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'Hiiii');
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'POOKIE');
// });

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, 'Is it me you are looking for.');
// });

// Promise.all([promise, promise2, promise3, promise4])
//     .then(values => {
//         console.log(values);
//     })
