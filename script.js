document.querySelectorAll('.year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#form-message').textContent =
      'Thank you! This demo form is working locally, but it does not send email yet.';
    contactForm.reset();
  });
}
