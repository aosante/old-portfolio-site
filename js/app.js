const options = {};
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // note: entry.target.className can be checked to add different class names or animations
    if (entry.isIntersecting) {
      entry.target.classList.toggle('triggered');
    }
  });
}, options);

const contactForm = document.querySelector('.animated-form');

observer.observe(contactForm);

//-------------------------------------------------------------------------------

//remove :before content from skill sections in larger screens---------
function removeBeforeContent() {
  const skillSections = document.querySelectorAll('.skill-section');
  skillSections.forEach(section => {
    window.innerWidth > 980
      ? section.classList.remove('before-border')
      : section.classList.add('before-border');
  });
}

removeBeforeContent();
window.addEventListener('resize', removeBeforeContent);
//------------------------------------------------------------------------

//add fixed scroll to top button-------------------------------------------------
// TODO: Refactor to using Intersection Observer !!!
const hero = document.querySelector('#header');
const scrollTop = document.querySelector('.scroll-top-btn');
window.addEventListener('scroll', _.throttle(toggleScrollTopBtn, 10));
function toggleScrollTopBtn() {
  const divBottom = hero.offsetTop + hero.scrollHeight;
  if (
    window.scrollY > divBottom &&
    window.scrollY + window.innerHeight < document.body.offsetHeight
  ) {
    scrollTop.style.display = 'block';
  } else {
    scrollTop.style.display = 'none';
  }
}
//-------------------------------------------------------------------------------

//form validation-------------------------------------------------
function validateForm(e) {
  let valid = false;
  const inputs = document.querySelectorAll('.input');
  let error = validateInputs(inputs);
  if (error) {
    swal({
      title: 'Error',
      text: 'Please fill out all fields before submitting',
      icon: 'error'
    });
  } else {
    valid = true;
  }
  return valid;
}

document.querySelector('form').addEventListener('input', e => {
  e.target.classList.remove('error');
});

const validateInputs = inputs => {
  let error = false;
  inputs.forEach(input => {
    if (input.value == '') {
      input.classList.add('error');
      error = true;
    }
  });
  return error;
};

//-------------------------------------------------------------------------------

//smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});
