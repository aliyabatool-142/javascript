function oneToN(n){
    for(let i=1; i<=n; i++)
        console.log(i);
}
oneToN(12);

function eqn(a,b){
    return Math.abs (a*a*a) + Math.abs(b*b*b)
}
console.log(eqn(-2,3));