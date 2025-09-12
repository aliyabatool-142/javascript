let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);

let add = arr.reduce(function(a,b){
    return a + b;
})

let sub = arr.reduce(function(a,b){
    return a - b;
})

let product = arr.reduce(function(a,b){
    return a * b;
})
console.log(add);
console.log(sub);
console.log(product);