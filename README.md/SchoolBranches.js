 // Mobile Menu Toggle
 const mobileMenuBtn = document.getElementById('mobile-menu-btn');
 const navMenu = document.getElementById('nav-menu');
 
 mobileMenuBtn.addEventListener('click', () => {
     navMenu.classList.toggle('active');
     mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? 
         '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
 });

 // Smooth Scrolling for Anchor Links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Branch Card Animation on Scroll
 const branchCards = document.querySelectorAll('.branch-card');
 
 const animateOnScroll = () => {
     branchCards.forEach((card, index) => {
         const cardPosition = card.getBoundingClientRect().top;
         const screenPosition = window.innerHeight / 1.3;
         
         if (cardPosition < screenPosition) {
             card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.2}s`;
         }
     });
 };
 
 window.addEventListener('scroll', animateOnScroll);
 window.addEventListener('load', animateOnScroll);