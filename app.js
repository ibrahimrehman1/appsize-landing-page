let state2 = false;
window.addEventListener("scroll", (e)=>{
    if (window.scrollY){
        document.querySelector(".move-top").classList.add("move-top-show");
        document.querySelector(".nav").classList.add("nav-color");
        state2 = true;

    }else{
        document.querySelector(".move-top").classList.remove("move-top-show");
        document.querySelector(".nav").classList.remove("nav-color");
        document.querySelector('#nav-links').classList.remove("links");
        state2 = false;


    }
})

let state = false;
document.querySelector("#burgerIcon").addEventListener("click", (e)=>{
    if (!state){
        document.querySelector("#bar-1").classList.add("tilt-1");
        document.querySelector("#bar-2").classList.add("tilt-2");
        document.querySelector("#bar-3").classList.add("tilt-3");
        document.querySelector(".nav").classList.add("nav-extend");
        document.querySelector('#nav-links').classList.add("links");
        state = true;
    }else{
        document.querySelector("#bar-1").classList.remove("tilt-1");
        document.querySelector("#bar-2").classList.remove("tilt-2");
        document.querySelector("#bar-3").classList.remove("tilt-3");
        document.querySelector(".nav").classList.remove("nav-extend");
        document.querySelector('#nav-links').classList.remove("links");
        state = false;
    }

    if (!state2){
        document.querySelector(".nav").classList.add("nav-color");
    }


})

function minimize(){
    if (state){
        document.querySelector("#bar-1").classList.remove("tilt-1");
        document.querySelector("#bar-2").classList.remove("tilt-2");
        document.querySelector("#bar-3").classList.remove("tilt-3");
        document.querySelector(".nav").classList.remove("nav-extend");
        document.querySelector('#nav-links').classList.remove("links");
        state = false;
    }
}