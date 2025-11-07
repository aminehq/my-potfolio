// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Navbar Active Link
const sections=document.querySelectorAll('section');
const navLinks=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(section=>{
    const sectionTop=section.offsetTop-100;
    if(pageYOffset>=sectionTop) current=section.getAttribute('id');
  });
  navLinks.forEach(link=>{
    link.classList.remove('active');
    if(link.getAttribute('href')===`#${current}`) link.classList.add('active');
  });
});

// Sticky Navbar
window.addEventListener('scroll',()=>{
  const navbar=document.querySelector('.navbar');
  if(window.scrollY>50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Typing Effect
const heroTexts=["Hello, I'm Amine","Full Stack Developer","Trainee at CMC Casablanca-Settat"];
let index=0,charIndex=0;
const typingSpeed=80,deletingSpeed=40,delayBetween=1200;
const heroTitle=document.querySelector('.hero-content h1');
function typeText(){
  if(index>=heroTexts.length) index=0;
  const currentText=heroTexts[index];
  heroTitle.textContent=currentText.substring(0,charIndex);
  charIndex++;
  if(charIndex<=currentText.length) setTimeout(typeText,typingSpeed);
  else setTimeout(deleteText,delayBetween);
}
function deleteText(){
  const currentText=heroTexts[index];
  heroTitle.textContent=currentText.substring(0,charIndex);
  charIndex--;
  if(charIndex>=0) setTimeout(deleteText,deletingSpeed);
  else { index++; setTimeout(typeText,300); }
}
typeText();

// Reveal Animations
const revealElements=document.querySelectorAll('.about, .skills, .projects');
const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:0.15});
revealElements.forEach(el=>revealObserver.observe(el));

// Skills Glow Animation
const skillCards=document.querySelectorAll('.skill-card');
const skillObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('glow');
      setTimeout(()=>{entry.target.classList.remove('glow');},1500);
    }
  });
},{threshold:0.5});
skillCards.forEach(card=>skillObserver.observe(card));

// Footer Year
const footerYear=document.querySelector('.footer p');
if(footerYear) footerYear.innerHTML=`© ${new Date().getFullYear()} Amine | All Rights Reserved`;

// Footer Reveal
window.addEventListener('scroll',()=>{
  const footer=document.querySelector('.footer');
  if(footer.getBoundingClientRect().top<window.innerHeight-50) footer.classList.add('visible');
});