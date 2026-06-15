// Mobile Menu

const menuBtn=document.querySelector(".menu-toggle");
const nav=document.querySelector("nav");

menuBtn.addEventListener("click",()=>{
nav.classList.toggle("active");
});

// Hero Slider

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

function showSlide(index){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[index].classList.add("active");

}

setInterval(()=>{

currentSlide++;

if(currentSlide>=slides.length){
currentSlide=0;
}

showSlide(currentSlide);

},5000);

// Registration Number

const regNo=document.getElementById("regNo");

if(regNo){

regNo.value=
"ELZEE-2026-" +
Math.floor(1000+Math.random()*9000);

}

// Form Submission

const form=document.querySelector(".registration-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Admission Form Submitted Successfully!"
);

form.reset();

});

}

// Course Search

const search=document.getElementById("courseSearch");

if(search){

search.addEventListener("keyup",()=>{

let filter=search.value.toLowerCase();

document.querySelectorAll(".course-card")
.forEach(card=>{

card.style.display=
card.innerText.toLowerCase()
.includes(filter)
? "block"
: "none";

});

});

}

// Counter Animation

function animateCounter(id,end){

let count=0;

let interval=setInterval(()=>{

count++;

document.getElementById(id).innerText=count+"+";

if(count>=end){
clearInterval(interval);
}

},5);

}

if(document.getElementById("students")){
animateCounter("students",1500);
animateCounter("coursesCount",20);
animateCounter("certificates",1200);
}

// Back To Top

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// Gallery Lightbox

document.querySelectorAll(".gallery-grid img")
.forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";
popup.style.top="0";
popup.style.left="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,.9)";
popup.style.display="flex";
popup.style.justifyContent="center";
popup.style.alignItems="center";

popup.innerHTML=
`<img src="${img.src}"
style="max-width:90%;max-height:90%;">`;

popup.onclick=()=>{
popup.remove();
};

document.body.appendChild(popup);

});

});