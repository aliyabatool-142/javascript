let arr = [3,5,32,56,-25,56];
console.log(arr);

arr = arr.sort();   //gives wrong sorting
console.log(arr);

arr = arr.sort((a,b)=> a-b);  //correct way
console.log(arr);

arr = arr.sort((a,b) => Math.abs(a) - Math.abs(b));  //abs sort(sort while ignoring the sign)
console.log(arr);

//custom sort 
arr = arr.sort((a,b)=> b-a);
console.log(arr);