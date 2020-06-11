const scrollTop = document.querySelector('.scroll-top-btn');
scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
const parallaxBg = document.querySelector('.parallax-bg');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.id === 'form') {
      entry.target.classList.toggle('triggered');
    }
    if (entry.isIntersecting && entry.target.id === 'header') {
      scrollTop.classList.add('hide');
      window.addEventListener('scroll', parallax, {
        capture: false,
        passive: true,
      });
    } else {
      if (entry.target.id === 'header') {
        scrollTop.classList.remove('hide');
        window.removeEventListener('scroll', parallax, {
          capture: false,
          passive: true,
        });
      }
    }
  });
}, {});

const contactForm = document.querySelector('.animated-form');
const sectionHero = document.querySelector('.parallax-bg');
const footer = document.querySelector('#footer');
const sections = [contactForm, sectionHero, footer];
sections.forEach((section) => observer.observe(section));

// TODO: REPLACE ALL SCROLL EVENT LISTENERS WITH INTERSECTION OBSERVER

//remove :before content from skill sections in larger screens---------
function removeBeforeContent() {
  document.querySelectorAll('.skill-section').forEach((e) => {
    window.innerWidth > 980
      ? e.classList.remove('before-border')
      : e.classList.add('before-border');
  });
}
removeBeforeContent(), window.addEventListener('resize', removeBeforeContent);

// Form validation
document.querySelector('form').addEventListener('input', (e) => {
  console.log(e.target), e.target.classList.remove('error');
});

function validateForm(e) {
  let o = !1;
  const t = document.querySelectorAll('.input');
  return (
    validateInputs(t)
      ? swal({
          title: 'Error',
          text: 'Please fill out all fields before submitting',
          icon: 'error',
        })
      : (o = !0),
    o
  );
}
const validateInputs = (e) => {
  let o = !1;
  return (
    e.forEach((e) => {
      '' == e.value && (e.classList.add('error'), (o = !0));
    }),
    o
  );
};

const parallax = () => {
  let o = window.scrollY;
  parallaxBg.style.backgroundPosition = 'center ' + 0.35 * o + 'px';
};
// add this event listener only if hero section is intersecting, remove if not.
