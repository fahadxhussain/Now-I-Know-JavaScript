const promise01 = new Promise(function (resolve, reject){
    setTimeout(() => {
        console.log("1 Second")
        let xyz = "HHehe"
        resolve(xyz)
    }, 1000)
})

promise01.then( function(abc){
    console.log("Promise 01 Consumed")
    console.log(abc)
} )

// Create a promise that resolves after 2 seconds
const delayedPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved!');
    }, 2000);
  });
  
  // Using .then()
  // The following logs execute immediately without waiting for the promise to resolve
  console.log('Before .then');
  delayedPromise.then(result => {
    console.log('Inside .then:', result);
  });
  console.log('After .then');
  
  // Using await inside an async function
  async function testAwait() {
    console.log('Before await');
    // The execution of this function pauses here until delayedPromise resolves
    const result = await delayedPromise;
    console.log('After await:', result);
  }
  
  testAwait();

  // Note : Await blocks the code only in its own block
  