//animations on scroll------------------------------------------------------
window.addEventListener('scroll', _.throttle(activateAnimation, 100));

//animate goes inside a different function in order to throttle it with lodash
function activateAnimation() {
  const animatedParents = document.querySelectorAll('.animated-parent');
  const animatedForm = document.querySelector('.animated-form');
  animatedParents.forEach(parent => {
    animate(parent);
  });
  animateForm(animatedForm);
}

const animate = elem => {
  //half of the parent element
  let activateAt =
    window.scrollY + window.innerHeight - elem.scrollHeight - 320;
  // distance from bottom of the div to the top
  const divBottom = elem.offsetTop + elem.scrollHeight;
  let halfShown = activateAt > elem.offsetTop;
  let isnotGone = window.scrollY < divBottom;
  const children = elem.children;
  Array.from(children).forEach(child => {
    if (halfShown && isnotGone) {
      child.classList.add('triggered');
    }
  });
};
/*Becuase of the form's height, the point in which the animation is activated needs to be in the middle
and not at the bottom like other animations hence, this special function*/
const animateForm = formContainer => {
  let activateAt =
    window.scrollY + window.innerHeight - formContainer.scrollHeight / 2;
  const divBottom = formContainer.offsetTop + formContainer.scrollHeight;
  let halfShown = activateAt > formContainer.offsetTop;
  let isnotGone = window.scrollY < divBottom;
  const form = formContainer.children[0];
  if (halfShown && isnotGone) {
    form.classList.add('triggered');
  }
};
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
  console.log(e.target);
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

//smooth scroll------------------------------------------------------------------
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});
//-------------------------------------------------------------------------------

//parralax
window.addEventListener('scroll', _.throttle(parallax, 15));
function parallax() {
  const parallaxBg = document.querySelector('.parallax-bg');
  let scroll = window.scrollY;
  parallaxBg.style.backgroundPosition = 'center ' + scroll * 0.45 + 'px';
}
//-------------------------------------------------------------------------------
