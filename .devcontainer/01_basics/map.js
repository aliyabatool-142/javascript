//map is use to make an array from another array related to it with some specific changes


let arr = [1,2,-3,4,5];

// first method of mapping an array
// function square(x){
//     return x*x;
// }
// let arr = [1,2,-3,4,5];
// let brr= arr.map(square);
// console.log(brr);

// 2nd method
// let square = arr.map(function(ele){
//     return Math.abs(ele*ele);
// });
// let cube = arr.map(function(ele){
//     return Math.abs(ele*ele*ele);
// });

// let add5 = arr.map(function(ele){
//     return Math.abs(5+ele);
// });

// console.log(square);
// console.log(cube);
// console.log(add5);

// 3rd method
let square = arr.map(ele=>Math.abs(ele*ele));  //arraow function
console.log(square);
