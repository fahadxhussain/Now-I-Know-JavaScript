const arr = [1, 2, 3, 4, 5, 6]

// array wil be undefined becasue forEach does not return anything even if you write return explicitly
const array = arr.forEach((num)=>{
    return num +2
})



console.log(arr)

const array2 = arr.map((num) => {
    return num * 2
})

console.log(arr)
console.log(array)
console.log(array2)

// Changes the origional arrray
arr.forEach((num, index, array) => {
    array[index] = num + 3
})

console.log(arr)

const array3 = arr.map((num) => {
    num * 2 // It will form an array and return undefined with each iteration
})

console.log(array3)