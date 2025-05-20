const promise = new Promise (function(resolve, reject){
    console.log("A")
    setTimeout(()=>{
        console.log("B")
        resolve()

    }, 2000)
    console.log("C")
})

// promise
// .then(()=>{
//     console.log('D')
// })

async function consumePromise(){
    try{
        await promise;
        console.log('D')
    }
    catch{
        console.log('Promise Failed')
    }
}

consumePromise()