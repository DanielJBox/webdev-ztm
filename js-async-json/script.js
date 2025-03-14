// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const makeFakeAPICall = () => {
    return "success";
};

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(makeFakeAPICall());
    }, 4000);
});

// #2) Run the above promise and make it console.log "success"
promise
    .then((response) => response + "!")
    .then((response) => {
        console.log(response + "?");
    })
    .catch((err) => {
        console.log("Error message" + err);
    });
// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise2 = Promise.resolve(
    setTimeout(() => {
        console.log(makeFakeAPICall() + "##");
    }, 5000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject("failed").catch(console.log("oops something went wrong"));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
    "http://swapi.dev/api/people/1",
    "http://swapi.dev/api/people/2",
    "http://swapi.dev/api/people/3",
    "http://swapi.dev/api/people/4",
];

Promise.all(
    urls.map((url) => {
        return fetch(url).then((resp) => resp.json());
    })
).then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    console.log(results[3]);
});
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
const urls2 = [
    "http://swapi.dev/api/people/1",
    "http://swap.dev/api/people/2",
    "http://swapi.dev/api/people/3",
    "http://swapi.dev/api/people/4",
];

Promise.all(
    urls2.map((url) => {
        return fetch(url).then((resp) => resp.json());
    })
)
    .then((results) => {
        console.log(results[0]);
        console.log(results[1]);
        console.log(results[2]);
        console.log(results[3]);
    })
    .catch(() => console.log("error, woopsie"));

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
