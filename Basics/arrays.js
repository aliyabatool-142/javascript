// arr = [1,2,3,4,5];
// console.log(arr); // 1
// n = arr.length;
// console.log(n);
// console.log(arr[3]);

// arr.push(6);        //add at the end
// console.log(arr); // 2
// arr.pop();
// console.log(arr);
// arr.unshift(0); // add at the beginning
// console.log(arr); // 3

// arr.shift(); //remove first ele
// console.log(arr); // 4

// arr.splice(2, 1); //remove element at index 2
// console.log(arr); // 5

// arr.splice(2, 0, 10); //insert 10 at index 2
// console.log(arr); // 6


//😱😱WTH
// arr = [3,  'aliya', 3.14, true, [1,2,3,4,5]];
// console.log(arr);
// for(let i=0; i<arr.length; i++){
//     console.log(i, arr[i]);
// }


brr = [1,2,3,4,5];
console.log(brr); 
// //forOf loop
// for(let ele of brr){
//     console.log(ele);
// }

for(let i=0; i<brr.length; i++){
    brr[i] *=2;
}
console.log(brr[i]);


// // forIn loop
// for(let index in brr){
//     console.log(index, brr[index]);
// }