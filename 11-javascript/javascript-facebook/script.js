// Database of users
var database = [
    {
        username: "bobby",
        password: "secretpw"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "tim",
        password: "bingbang"
    }
    
]

// Database of newsFeed items
var newsFeed = [
    {
        username: "bobby",
        timeline: "something for the timeline?"
    },
    {
        username: "bobby",
        timeline: "something for the timeline as well?"
    },
    {
        username: "sally",
        timeline: "what is on thit timeline? This is."
    },
    {
        username: "tim",
        timeline: "something for the timeline as well?"
    },
    {
        username: "tim",
        timeline: "what is on thit timeline? This is."
    },
    {
        username: "bobby",
        timeline: "something for the timeline as well?"
    },
    {
        username: "sally",
        timeline: "what is on this timeline? This is sdfsafsdfa."
    }
];

let userName = prompt("What is your username?");
let  password = prompt("What is your password?");
let user;

if (isUserValid(userName, password)) {
    user = getUser(userName, password);
    userNewsFeed = getUserFeed(user);
    displayNewsFeed(userNewsFeed);
} else {
    console.log("Your username or password is incorrect. Please try again.");
}

// Function to check if user is in the database
function isUserValid(username, password) {
    for(let i = 0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            return true;
        }
    }
    return false;
}

function getUser(username, password) {
    for(let i = 0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            return database[i];
        }
    }
    return null;
}

function getUserFeed(user) {
    let userNewsItems = [];
    newsFeed.forEach( function (newsItem) {
        if (user.username === newsItem.username) {
            userNewsItems.push(newsItem);
        }
    });
    return userNewsItems;
}

function displayNewsFeed(userNewsItems) {
    userNewsItems.forEach(function(newsItem) {
        console.log(newsItem.timeline);
    });
}














// var loggedIn = signIn(userName, password);

// function signIn(enteredUsername, enteredPassword) {
//console.log(database);
//     for (let i = 0; i < database.length; i++) {
        
//         if (enteredUsername === database[i].username && enteredPassword === database[i].password) {
//             console.log("You are now logged in.");
//             newsFeed.forEach(function(nfItem) {
//                 if (nfItem.username == database[i].username) {
//                     console.log(nfItem.timeline);
//                 }
//             });
//             return true;
//         }
//     }
    // database.forEach(function(user) {
    //     if (enteredUsername === user.username && enteredPassword === user.password) {
    //         console.log("You are now logged in.");
    //         newsFeed.forEach(function(nfItem) {
    //             console.log("nfItem: " + nfItem + ", user.username: " + user.username);
    //             if (nfItem.username == user.username) {
    //                 console.log(nfItem.timeline);
    //             }
    //         });
    //         //console.log(newsFeed);
    //         return true;
    //     }
    // });
//     console.log("Your username or password is incorrect. Please try again.");
//     return false;    
// }
//console.log("Logged In: " + loggedIn);
