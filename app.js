window.addEventListener("scroll", (e)=>{
    if (window.scrollY){
        document.querySelector(".move-top").classList.add("move-top-show");
        document.querySelector(".nav").classList.add("nav-color");

    }else{
        document.querySelector(".move-top").classList.remove("move-top-show");
        document.querySelector(".nav").classList.remove("nav-color")


    }

    window.removeEventListener("scroll", ()=>console.log("Done!"));
})