// for in

let a = [1,12,3,5];

// var i = 0;
// while(i < a.length){
//     console.log("for", i, a[i]);
//     i++
// };


// do{
//     console.log("for", i, a[i]);
//     i++
// }while(i < a.length)



//1


for(let key in a){
    if(a[key]%2==0){
        console.log(a[key]+"even")
    }else{
        console.log(a[key]+"odd")
    }

}

//2

function triangle(a, b){
    return 180-(a+b);

}

console.log(triangle(30, 30));


//3

function func(n){
    let arr = n.split('');
   
    if(n.slice(-1) !== '0'){
        let last =arr.pop();
        arr.unshift(last);
    }
    
    console.log(arr.join(''));
    
}

func('8');

//4

let num = 0;


if(num % 3 === 0 && num % 7 === 0){
    console.log(num + ' is a multiple of 3 and 7.')
}
else if(num % 5 === 0 && num % 7 === 0){
     console.log(num + ' is a multiple of 5 and 7.')
}
else if(num % 3 === 0 && num % 5 === 0 && num % 7 === 0){
     console.log(num + ' is a multiple of 3, 5 and 7.')
}
else if(num % 3 === 0){
     console.log(num + ' is a multiple of 3.')
}
else if(num % 7 === 0){
     console.log(num + ' is a multiple of 7.')
}
else if(num % 5 === 0){
     console.log(num + ' is a multiple of 5.')
}
else{
     console.log(num + ' is not a multiple of 3, 5 or 7.')
}

//5

function asc(nums){
    nums.sort(function(a,b){
        return a-b;
    })
    console.log(nums);
}
asc([-23, -456, 0]);


//6
function getSign(a,b,c){
    if(a<0 && b<0 && c<0 || a<0 && b>0 && c>0 || a>0 && b<0 && c>0 || a>0 && b>0 && c<0){
        console.log("-")
    }
    else if(a==0 || b==0 || c==0){
         console.log("unsigned");
    }
    else{
        console.log("+")
    }

}
getSign(4, 19, -2)


//7
function contain(a,b){
    a = String(a);
    b = String(b);

    if(b.indexOf(a) ===-1){
        console.log('No')
    }
    else{
        console.log('Yes')
    }

}
contain(8, 45689)



//8

let n = 895796 ;
let strArr = String(n).split('');
let first = strArr.shift();
let last = strArr.pop();
strArr.push(first);
strArr.unshift(last);
console.log(+strArr.join(''));

//9


function isPrime(num) {
    // let s = String(num);
    // console.log(s)
     // for(var i = 0; i < s.length; i++){
     //    // console.log(s[i]);
     //    if(s % i !== 0){
     //        console.log('no prime')
     //    }
     // }
     

}

//console.log(isPrime(401))


//10

function Fibonacci(n){
    let n1,n2,n3;
    n2=0;
    n3=1;
    
    let i = 1;

    while(i<n){
        n1=n2;
        n2=n3;
        n3=n1+n2;
        i++
    }

    console.log(n3)
}

Fibonacci(20)


//11
function replace(str,arr){
    let newS;
    let i=0;
    // while(i<arr.length){
        // console.log(arr[i]);
     newS=  str.replace('_',arr);
    //     ++i;
        
    // }
    console.log(newS)
}
replace("_, we have a _.", ['Houston', 'problem']);