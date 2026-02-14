// HERO SLIDER
let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".dots");
let index = 0;

// Create dots dynamically
slides.forEach((_, i) => {
  let dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dots span");
dots[0].classList.add("active");

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
  index = i;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

// Auto Slide
setInterval(() => {
  nextSlide();
}, 5000);

// HERO SWIPE
let touchStartX=0,touchEndX=0;
const hero=document.querySelector('.hero');
hero.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX;});
hero.addEventListener('touchend',e=>{touchEndX=e.changedTouches[0].screenX;if(touchEndX<touchStartX-50) nextSlide();if(touchEndX>touchStartX+50) prevSlide();});

// VIDEO POPUP
function openVideo(){document.getElementById("videoPopup").style.display="flex";document.getElementById("popupVideo").play();}
function closeVideo(){const video=document.getElementById("popupVideo");video.pause();video.currentTime=0;document.getElementById("videoPopup").style.display="none";}

// MOBILE NAV
const hamburger=document.getElementById('hamburger');
const navLinks=document.getElementById('navLinks');
hamburger.addEventListener('click',()=>{navLinks.classList.toggle('active');});
document.querySelectorAll('#navLinks a').forEach(link=>{link.addEventListener('click',()=>{navLinks.classList.remove('active');});});

// SMOOTH SCROLL
document.querySelectorAll('nav a').forEach(link=>{link.addEventListener('click',e=>{e.preventDefault();document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});});});

// SCROLL ANIMATIONS
const faders=document.querySelectorAll('.fade-up,.fade-left,.fade-right,.fade-in');
const options={threshold:0.2};
const appearOnScroll=new IntersectionObserver(function(entries,observer){
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}});
},options);
faders.forEach(fader=>{appearOnScroll.observe(fader);});