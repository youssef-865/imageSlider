const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let interval = setInterval(nextSlide, 3000);


function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}


function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
}


function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


slider.addEventListener('mouseover', () => clearInterval(interval));
slider.addEventListener('mouseout', () => interval = setInterval(nextSlide, 3000));


dots.forEach(dot => {
  dot.addEventListener('click', function () {
    currentSlide = parseInt(this.getAttribute('data-slide'));
    updateSlider();
  });
});
