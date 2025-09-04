let str = "Aliya batool";
console.log(str, str.length);
console.log(str[0]);
for(let i=0; i<str.length; i++){
    console.log(str[i]);
}

for (const char of str) {
    console.log(char);
}

//forEach doesn't work for strings
