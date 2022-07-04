`use-strict`;
$(document).ready(function () {
  const navbar = document.getElementById('navbar');
  $(window).scroll(function () {
    const top = navbar.getBoundingClientRect().top;
    top == 0 ? (navbar.style.visibility = 'visible') : (navbar.style.visibility = 'hidden');
  });
});
