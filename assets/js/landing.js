var slideIndex = 1;
showSlide(slideIndex);

function nextslide(n) {showSlide((slideIndex += n));}

function dotslide(n) {showSlide((slideIndex = n));}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("imgslide");
  var dot = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1;}

  if (n < 1) {slideIndex = slides.length;}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < slides.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  
  dot[slideIndex - 1].className += " active";
}

// scroll otomatis
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});