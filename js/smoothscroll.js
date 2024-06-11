// Purpose: Smooth scroll to anchor links and back to top button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

let backToTop = document.getElementById("backToTop");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
backToTop.onclick = function () {
  document.querySelector('body').scrollIntoView({
    behavior: 'smooth'
  });
}
