# HTTP/JSON/AJAX + Asynchronous Javascript
## Promise
- A promise allows us to do something in the background without holding up the flow of code.
- When the promise is resolved or rejected we will get a result.
- Promises are a bit like event listeners except they only listen once.
- A promise can only succeed or fail once.
- This is useful for things that are asynchronouse success and failure. Such as API calls or fetch data from a server or database.
- Useful when we want to react to something once it happens.
- A promise is an object that may return a single value sometime in the future.
- It returns either a resolved value, EG an array of users, or a reason that it's not resolved (rejected)
- A Promise can be in one of three possible states, fullfilled (resolved), rejected, or pending.