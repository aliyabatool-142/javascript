
//filter out even no.
//method 1
let arr = [1,2,3,4,5,6,7,8,9,10];
arr = arr.filter(ele=>{
    if(ele%2 != 0) return true;
    else return false;
}
);
console.log(arr);

//method 2
arr = arr.filter(ele=> (ele %2 != 0));
console.log(arr);