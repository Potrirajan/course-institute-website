// document.querySelector(".menu-btn").onclick=function(){
//     document.querySelector(".nav-links ").classList.toggle("hide");
// }

let button = document.querySelector('.menu-btn');
let nav = document.querySelector(".nav-links");

button.addEventListener('click', function(e){
    console.log(e);
    nav.classList.toggle('hide');
})