`use-strict`;
$(document).ready(function () {
  /** DOM Elements */
  const navbar = document.getElementById('navbar');

  /** Event Listensers */
  $(window).scroll(function () {
    const top = navbar.getBoundingClientRect().top;
    top == 0 ? (navbar.style.visibility = 'visible') : (navbar.style.visibility = 'hidden');
  });
});
