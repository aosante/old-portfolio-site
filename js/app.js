function activateAnimation() {
  const e = document.querySelectorAll('.animated-parent'),
    o = document.querySelector('.animated-form');
  e.forEach(e => {
    animate(e);
  }),
    animateForm(o);
}
window.addEventListener('scroll', _.throttle(activateAnimation, 100));
const animate = e => {
    let o = window.scrollY + window.innerHeight - e.scrollHeight - 320;
    const t = e.offsetTop + e.scrollHeight;
    let r = o > e.offsetTop,
      l = window.scrollY < t;
    const n = e.children;
    Array.from(n).forEach(e => {
      r && l && e.classList.add('triggered');
    });
  },
  animateForm = e => {
    let o = window.scrollY + window.innerHeight - e.scrollHeight / 2;
    const t = e.offsetTop + e.scrollHeight;
    let r = o > e.offsetTop,
      l = window.scrollY < t;
    const n = e.children[0];
    r && l && n.classList.add('triggered');
  };
function removeBeforeContent() {
  document.querySelectorAll('.skill-section').forEach(e => {
    window.innerWidth > 980
      ? e.classList.remove('before-border')
      : e.classList.add('before-border');
  });
}
removeBeforeContent(), window.addEventListener('resize', removeBeforeContent);
const hero = document.querySelector('#header'),
  scrollTop = document.querySelector('.scroll-top-btn');
function toggleScrollTopBtn() {
  const e = hero.offsetTop + hero.scrollHeight;
  window.scrollY > e &&
  window.scrollY + window.innerHeight < document.body.offsetHeight
    ? (scrollTop.style.display = 'block')
    : (scrollTop.style.display = 'none');
}
function validateForm(e) {
  let o = !1;
  const t = document.querySelectorAll('.input');
  return (
    validateInputs(t)
      ? swal({
          title: 'Error',
          text: 'Please fill out all fields before submitting',
          icon: 'error'
        })
      : (o = !0),
    o
  );
}
window.addEventListener('scroll', _.throttle(toggleScrollTopBtn, 10)),
  document.querySelector('form').addEventListener('input', e => {
    console.log(e.target), e.target.classList.remove('error');
  });
const validateInputs = e => {
  let o = !1;
  return (
    e.forEach(e => {
      '' == e.value && (e.classList.add('error'), (o = !0));
    }),
    o
  );
};
var scroll = new SmoothScroll('a[href*="#"]', { speed: 800 });
function parallax() {
  const e = document.querySelector('.parallax-bg');
  let o = window.scrollY;
  e.style.backgroundPosition = 'center ' + 0.35 * o + 'px';
}
window.addEventListener('scroll', _.throttle(parallax, 10));
