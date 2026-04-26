document.addEventListener('DOMContentLoaded', function() {
  let rotators = Array.from(document.querySelectorAll('.rotator'));

  rotators.forEach(el => {
    let cases = el.querySelectorAll('.rotator__case');
    let curIndex = 0;

    setInterval (() => {
      cases[curIndex].classList.remove('rotator__case_active');

      curIndex = (curIndex + 1) % cases.length;

      cases[curIndex].classList.add('rotator__case_active');
    }, 1000);

  });
});