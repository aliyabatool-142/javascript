let tan = document.getElementById("ele1");
tan.addEventListener("click", function(){
    tan.style.color = "black";
    tan.style.backgroundColor = "green";
});

let zen = document.getElementById("ele2");
zen.addEventListener("mousemove", function(){
    zen.style.color = "white";
    zen.style.backgroundColor = "orange";
});
zen.addEventListener("mouseleave", function(){
    zen.style.color = "black";
    zen.style.backgroundColor = "white";
});

let ino = document.getElementById("ele3");
zen.addEventListener("click", function(){
    ino.style.color = "brown";
    ino.style.backgroundColor = "lightblue";
});

ino.addEventListener("click", function(){
    tan.innerHTML = "Nezuko";
    tan.style.color = "pink";
    tan.style.backgroundColor = "red";
});