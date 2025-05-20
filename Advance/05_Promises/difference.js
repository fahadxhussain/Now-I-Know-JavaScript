// A SIMPLE DIFFERENCE BETWEEN .then AND await
// .then() does not block execution (execution of the function it is placed in); it schedules the callback to run later without pausing the function.

// await pauses the async function at that line until the promise resolves, delaying code after it in the same function
// But Neither .then() nor await pauses or blocks code running outside the async function.

function usingThen() {
  console.log("Start usingThen");

  let promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise resolved in usingThen");
      resolve();
    }, 2000);
  });

  promise.then(() => {
    console.log("Inside .then()");
  });

  console.log("End usingThen");
}

async function usingAwait() {
  console.log("Start usingAwait");

  let promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise resolved in usingAwait");
      resolve();
    }, 2000);
  });

  await promise;  // Pauses here until promise resolves

  console.log("After await in usingAwait");
  console.log("End usingAwait");
}

usingThen();

setTimeout(() => {
  usingAwait();
}, 3000);
