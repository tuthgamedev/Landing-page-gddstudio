const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {

    resumeBtns.forEach(b => b.classList.remove('active'));
    resumeDetails.forEach(d => d.classList.remove('active'));

    btn.classList.add('active');
    resumeDetails[idx].classList.add('active');

  });
});

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const imgSlide = document.querySelector('.portofolio-carousel .img-slide');
const details = document.querySelectorAll('.portofolio-detail');

let index = 0;
const total = details.length;

function updatePortfolio() {
  imgSlide.style.transform = `translateX(${index * -100}%)`;

  details.forEach(detail => {
    detail.classList.remove('active');
  });
  details[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
  if (index < total - 1) {
    index++;
    updatePortfolio();
  }
});

arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updatePortfolio();
  }
});

