//1

function fromPairs(arr){
    return Object.fromEntries(arr)
}

console.log(fromPairs([
    ["a", 1],
    ["b", 2],
    ]));


//2
function getHead(arr){
    return arr[0];
}
console.log(getHead([1, 2, 3]));

function getTail(arr){
    return arr.slice(1);
}

console.log(getTail([1, 2, 3]));


//3
function zipObject(arr1,arr2){
   
    let obj ={};

    for(let i=0;i<arr1.length; i++){
        obj[arr1[i]] = arr2[i]
    }

    return obj

}

console.log(zipObject(["a", "b", "c"], [1, 2]))


//4
// function groupBy(arr, func){

// }

// groupBy([6.1, 4.2, 6.3])



