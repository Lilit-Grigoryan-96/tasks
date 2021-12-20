//tasks__6 

//1

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3 = arr1.concat(arr2);
console.log(arr3)

//2

function sum(...args) {
 return args.reduce((sum, current) => {
 return sum + current;
 });
}
console.log(sum(1, 2)); // prints 3
console.log(sum(1, 2, 3)); // prints 6


//3

function sum(x, y, z) {
 return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(numbers[0],numbers[1],numbers[2]));

//4
let a = 3;
let b = 6;
[b,a]=[a,b];

console.log('a='+a);
console.log('b='+b);


//sort

function sortBy(arr,str){

    arr.sort(function(a,b){
        if(str==="Desc"){
            return b-a;
        }else{
            return a-b;
        }
        
    });
    console.log(arr);
}

sortBy([4, 3, 2, 1, 5], "Desc" );


//map

const users = [
     {
         username: "Yuri Gagarin",
         lang: "ru",
     },
     {
         username: "Nil Armstrong",
         lang: "ENG",
     },
 ];

 function getUserNames(users){
    return users.map(item => item.username);
 }
 console.log(getUserNames(users));

function getUsernameLengths(users){
    return users.map(item => item.username.length)
}

console.log(getUsernameLengths(users));


function parseInteger(num){
    return num.map(item => {
        if(Number(item)){
            return Number(item)
        }
        else{
            return null
        }
    })
}

console.log(parseInteger(["1", "2",'3']));



//filter

function filterNumbers(arr){
    return arr.filter(item => {
        return typeof(item) ==='number' && !isNaN(item)
    });
}


const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
166, NaN];

console.log(filterNumbers(arr))


function filterUsers(users){
    return users.filter(item => item.lang !== "ru")
}


console.log(filterUsers(users));


function filterByField(users){
     return users.filter(item => item.isAstronaut)
}


 const filter_users = [
     {
         username: "Yuri Gagarin",
         lang: "ru",
         isAstronaut: true,
     },
     {
         username: "Nil Armstrong",
         lang: "ENG",
         isAstronaut: true,
     },
     {
         username: "Elon Musk",
         isAstronaut: false,
     },
 ];

console.log(filterByField(filter_users));

//Reduce
const arr_2 = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

let s = arr_2.reduce((sum, current) => {
    if(current>=18){
        
        sum += current;
    }
    return sum;
},0);


console.log(s);



function getAverageAge(users){
    
    let s = users.reduce((sum, current) => {
           
          return  sum+current.age;
          
    },0);

    return s/users.length
}


 reduce_users = [
     {
         username: "Yuri Gagarin",
         lang: "ru",
         age: 56,
     },
     {
         username: "Nil Armstrong",
         lang: "ENG",
         age: 54,
     },
 ];


console.log( getAverageAge(reduce_users) )