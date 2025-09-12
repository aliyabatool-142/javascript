//object is kind of like map/ dictionary where we have key-value pair

let student = {
    name: "Aliya",   //here name is key and Aliya is value
    "nick name" : "Laila",
    age : 21,
    isStudent : true,
};
// console.log(student);
// console.log(student.age);
// console.log(student['age']);
// student.age = 30;
// console.log(student);

//printing the members of obj using forIn loop
for (const key in student) {
    if (Object.prototype.hasOwnProperty.call(student, key)) {
        console.log(key , student[key]);
        
    }
}

