// HERO SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
function updateSlider(){ slides.forEach((s,i)=>s.classList.toggle('active', i===currentSlide)); dots.forEach((d,i)=>d.classList.toggle('active', i===currentSlide)); }
function nextSlide(){ currentSlide=(currentSlide+1)%slides.length; updateSlider(); }
function prevSlide(){ currentSlide=(currentSlide-1+slides.length)%slides.length; updateSlider(); }
function goToSlide(n){ currentSlide=n; updateSlider(); }
setInterval(()=>{ nextSlide(); },4000);

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