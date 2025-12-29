// HERO SLIDER
let slides=document.querySelectorAll('.slide');
let index=0;
setInterval(()=>{
slides[index].classList.remove('active');
index=(index+1)%slides.length;
slides[index].classList.add('active');
},4000);

// COURSES DATA
const courses={
htmlcss:{
title:"HTML & CSS Course",
weeks:[
"Week 1: HTML Intro & Tools",
"Week 2: Structure & Tags",
"Week 3: Links, Images",
"Week 4: Forms & Project",
"Week 5: CSS Basics",
"Week 6: Flexbox",
"Week 7: Grid",
"Week 8: Responsive + Freelancing"
]
},
javascript:{
title:"JavaScript Course",
weeks:[
"Variables & Data Types",
"Conditions & Loops",
"Functions",
"Arrays & Objects",
"DOM",
"Events",
"Projects",
"Career Guide"
]
},
design:{
title:"Graphic Designing",
weeks:[
"Design Basics",
"Canva",
"Photoshop",
"Branding",
"Ads",
"Portfolio",
"Fiverr",
"Final Project"
]
},
freelance:{
title:"Freelancing",
weeks:[
"Platforms",
"Profile Setup",
"Gigs",
"Proposals",
"Clients",
"Payments",
"Scaling",
"Roadmap"
]
}
};

function openCourse(key){
let c=courses[key];
let html="<ul>";
c.weeks.forEach(w=>html+=`<li>${w}</li>`);
html+="</ul>";
document.getElementById("courseTitle").innerText=c.title;
document.getElementById("courseOutline").innerHTML=html;
document.getElementById("courseModal").style.display="block";
}
function closeModal(){
document.getElementById("courseModal").style.display="none";
}
function toggleMenu(){
  const nav = document.getElementById("navMenu");
  if(nav.style.display === "flex"){
    nav.style.display = "none";
  }else{
    nav.style.display = "flex";
  }
}