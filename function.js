// function add(a,b){
//     return a+b;
// }
// console.log(add(3,5));

// const N=9;

// if( N % 2 ===0){
//     console.log('it ia a even number')
// }
// else{
//     console.log('it is a odd number')
// }

// let a = 10, b = 12, c = 9;

// if (a >= b) {
//     if (a >= c)
//         console.log("it is the largest number.", a);
//     else
//         console.log("it is the largest number.", c);
// }
// else {
//     if (b >= c)
//         console.log("it is the largest number.", b);
//     else
//         console.log("it is the largest number.", c);
// }

// return 0;



function reversestring(str){
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
console.log(reversestring('hello'));
