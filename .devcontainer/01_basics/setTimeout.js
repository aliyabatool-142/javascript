setTimeout(function(){console.log("annoying")}, 2*1000);
setTimeout(function(){console.log("You are pretty" )}, 1*1000);
//even though 'annoying' is written first, it will execute after 'you are pretty' b/c it has a timeout of 2 seconds




// //print 1 to 10 with delay of 1 sec after each no. gets printed
// for(let i=1; i<=10; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000)
// }

// //print 10 to 1 with delay of 1 sec after each no. gets printed
// for(let i=1; i<=10; i++){
//     setTimeout(function(){
//         console.log(11-i);
//     }, i*1000)
// }