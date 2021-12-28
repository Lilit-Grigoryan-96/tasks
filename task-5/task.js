//1

function sum(x){
    return function (y) {
        return x+y;
    }
}


console.log(sum(1)(2));

const addOne = sum(1);
console.log(addOne(4));
const addTen = sum(10);
console.log(addTen(2));



//2
function redundant(str) {
    return function(){
        return str
    }

}
const f1 = redundant("apple");
console.log(f1());


//3
function add_suffix(suffix){
    return function (word) {
        return word+suffix
    }
}

add_ly = add_suffix("ly");

console.log(add_ly("total"));

add_less = add_suffix("less");

console.log(add_less("fear"));


//4
function printAfter(print) {
    console.log('hello, world');
    print();
}

const print = () => console.log("Elon Musk");

printAfter(print);


//5
function filterFalsyValues(values){
    return values.filter(Boolean)
}


const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

console.log(filterFalsyValues(values));


//6
function filterByLength(strs) {
    return strs.filter((el) => el.length<=3)
}
console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]));


//7
function unique(arr) {
    let repeated= arr.filter((el,ind, arr) => arr.indexOf(el)!==ind);
    if(repeated.length!==0){
        console.log('no')
    }else{
        console.log('yes')
    }

}
unique(["kia","kia", "tesla","tesla", "mercedes"]);


//8
function isogram(word) {
    let arr=word.split('');
    let repeated= arr.filter((el,ind, arr) => arr.indexOf(el)!==ind);
    if(repeated.length!==0){
        console.log('no')
    }else{
        console.log('yes')
    }

}
isogram("kiaa");

//9

function numbers(arr) {
    sum = 0;
    arr.forEach(el => {
        if(el%2==0){
            sum=sum + el**2
        }

    });
    console.log(sum)

}

numbers([1,2,3,4,5,6,7,8,9]);

//10
let num= [6,7,8,9];
console.log(Math.max(...num))