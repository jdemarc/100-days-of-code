/**
 * Promises
 */

// A promise to do something.  When a task completes, you either fulfill a promise or fail to do so.

// Syntax
const myPromise = new Promise((resolve, reject) => {
  // forever pending
});

// resolve and reject are methods used to determine the outcome of the promise.

// Three states: pending, fulfilled, rejected.

/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data")
  } else {  
    reject("Data not received")
  }
});
*/

// then
// do something after the promise is fulfilled.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
}).then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});

// May also be written as...

// makeServerRequest.then(result => {
//   console.log(result);
// });

// catch
// do something if the promise is rejected.

// makeServerRequest.catch(error => {
//   console.log(error);
// })