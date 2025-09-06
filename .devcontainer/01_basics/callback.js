//callback function function pass onto another functin

function product(a,b,c){
    return a*b*c;
}

function subtract(x,y){
    let a = x(2,3,4);
    console.log(a - y);
} 

subtract(product, 4);