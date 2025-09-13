
//https://i.pinimg.com/736x/8e/d8/28/8ed828d79c3ebe987177a16da535e9cb.jpg -levi
//https://i.pinimg.com/736x/4e/68/76/4e6876c1b3b1a7c8e1fd92c94da9f6f1.jpg  -mikasa
//https://i.pinimg.com/736x/f3/0e/d1/f30ed11f850cf4f2a595423005a13c59.jpg  -armin
//https://i.pinimg.com/736x/f4/78/f3/f478f3ff43b1c3db05793d210dbbd479.jpg  -eren
//https://i.pinimg.com/736x/4f/e0/e9/4fe0e9357f9ce91feb6924b91ec673c3.jpg  -hange
//https://i.pinimg.com/736x/fb/e5/5a/fbe55a295956be8064788c78096dca09.jpg  -jean
                       


let main = document.querySelector('#main');
let arr = ["https://i.pinimg.com/736x/8e/d8/28/8ed828d79c3ebe987177a16da535e9cb.jpg",
           "https://i.pinimg.com/736x/4e/68/76/4e6876c1b3b1a7c8e1fd92c94da9f6f1.jpg",
           "https://i.pinimg.com/736x/f3/0e/d1/f30ed11f850cf4f2a595423005a13c59.jpg ",
           "https://i.pinimg.com/736x/f4/78/f3/f478f3ff43b1c3db05793d210dbbd479.jpg",
           "https://i.pinimg.com/736x/4f/e0/e9/4fe0e9357f9ce91feb6924b91ec673c3.jpg",
           "https://i.pinimg.com/736x/fb/e5/5a/fbe55a295956be8064788c78096dca09.jpg "
]
let s = '';
for(let i=0; i<=43; i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="cards">
            <img src = ${arr[r]} >
        </div>`;
}
main.innerHTML = s;