let curSlot = 0;

const login = document.querySelector(".but");

login.addEventListener("click", () => {
    if(curSlot == 0 || curSlot == 3) {
        curSlot++;
    }
    else if(curSlot == 4){
        const background = document.querySelector(".loginbackground");
        const wrap = document.querySelector(".wrapper");
        const main = document.querySelector(".main");
    
        login.style.transitionDuration = "3s"; // Set transition duration to be faster for this effect
        login.style.transform = "scale(20)";
        login.textContent = '';
        setTimeout(function (){
            background.classList.toggle("pagebackground");
        }, 1500);
        setTimeout(function (){
            wrap.classList.toggle("none");
        }, 1500);
        setTimeout(function (){
            login.classList.toggle("none");
        }, 2000);
        setTimeout(function (){
            main.classList.toggle("main-shown");
        }, 2100);
    } 
    else {
        curSlot = 0;
    }
    console.log(curSlot);
});

login.addEventListener("contextmenu", (event) => {
    if(curSlot == 1 || curSlot == 2) {
        curSlot++;
    } else {
        curSlot = 0;
    }
    event.preventDefault();
    console.log(curSlot);
});

const classic = document.querySelector(".spin-but");
const spin = document.querySelector(".spin");


classic.addEventListener("click", () => {
    spin.classList.toggle("show");
});

const blahaj = document.querySelector(".ikea-but");
const ikea = document.querySelector(".ikea");

blahaj.addEventListener("click", () => {
    ikea.classList.toggle("show");
});

const grove = document.querySelector(".swim-but");
const swim = document.querySelector(".swim");

grove.addEventListener("click", () => {
    swim.classList.toggle("show");
});

const rotated = document.querySelector(".rotate-but");
const ro = document.querySelector(".rotate");

rotated.addEventListener("click", () => {
    ro.classList.toggle("show");
});