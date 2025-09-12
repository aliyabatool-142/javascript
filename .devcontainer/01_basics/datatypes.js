//alert(3+3);    //we are using nodejs, not browser
let name = "Aliya";
let age = 21;
let isStudent = true;

const student = {
    name : "Aliya",
    age : 21,
    isStudent : true,
};
console.log(student);
//primitive datatypes
//number -> 2 to power53
//bigint -> 2 to power 64
//string -> "string" or 'string' or `string`
//boolean -> true or false
//null -> empty value (standalone value)
//undefined -> variable is declared but not assigned
//symbol -> unique value (ES6 feature)

//non-primitive datatypes
//object -> collection of key-value pairs
console.log(typeof age);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof student);