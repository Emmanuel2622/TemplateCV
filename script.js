// Script for the floating button
const floatingButton = document.querySelector('.floating-button');
floatingButton.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};


// Script for profile bar
const elements = document.querySelectorAll('.fa');
const user = document.getElementById('user');
const text = document.getElementById('text');
const text2 = document.getElementById('text-2');
let elementselected = user;

elements.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    if (elementselected !== null) {
      elementselected.classList.remove('selected');
    }
    const content2 = element.getAttribute('data-texto2');
    text2.textContent = content2;

    const content = element.getAttribute('data-texto');
    text.textContent = content; 

    elements.forEach(function(element) {
      element.classList.remove('selected');
    });
    element.classList.add('selected');
    elementselected = element;
  });

  element.addEventListener('click', function() {
    elements.forEach(function(element) {
      element.classList.remove('selected');
    });
    element.classList.add('selected');
    elementselected = element;
  });
});

// Initialization of the user element
const content2 = user.getAttribute('data-texto2');
text2.textContent = content2;

const content = user.getAttribute('data-texto');
text.textContent = content; 

user.classList.add('selected');


// Progressive bar initialization
function animateProgressBar(progressBar, targetValue) {
  const progressFill = progressBar.querySelector('.progress-bar__fill');
  const progressText = progressBar.querySelector('.progress-bar__text');
  let currentValue = 0;

  const animation = setInterval(() => {
    currentValue++;
    progressFill.style.width = `${currentValue}%`;
    progressText.textContent = `${currentValue}%`;

    if (currentValue === targetValue) {
      clearInterval(animation);
    }
  }, 10);
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach((progressBar) => {
    if (!progressBar.classList.contains('animated') && isInViewport(progressBar)) {
      const targetValue = parseInt(progressBar.getAttribute('data-value'), 10);
      animateProgressBar(progressBar, targetValue);
      progressBar.classList.add('animated');
    }
  });

  // Remove scroll event listener once all progress bars have been animated
  if (document.querySelectorAll('.progress-bar:not(.animated)').length === 0) {
    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);

addEventListener('DOMContentLoaded', () => {
  const btn_menu = document.querySelector('.btn_menu');
  const menu_items = document.querySelector('.menu_items');
  if (btn_menu) {
    btn_menu.addEventListener('click', () => {
      menu_items.classList.toggle('show');
      if (menu_items.classList.contains('show')) {
        document.body.style.overflow = 'hidden'; // Disable page scrolling
      } else {
        document.body.style.overflow = 'auto'; // Enable page scrolling
      }
    });
  }

  const show = document.querySelector('.show');
  if (show) {
    show.addEventListener('click', () => {
      const menu_items = document.querySelector('.menu_items');
      menu_items.classList.toggle('show');
      document.body.style.overflow = 'auto'; // Enable page scrolling
    });
  }

  const show2 = document.querySelector('.show2');
  if (show2) {
    show2.addEventListener('click', () => {
      const menu_items = document.querySelector('.menu_items');
      menu_items.classList.toggle('show');
      document.body.style.overflow = 'auto'; // Enable page scrolling
    });
  }

  const show3 = document.querySelector('.show3');
  if (show3) {
    show3.addEventListener('click', () => {
      const menu_items = document.querySelector('.menu_items');
      menu_items.classList.toggle('show');
      document.body.style.overflow = 'auto'; // Enable page scrolling
    });
  }

  const show4 = document.querySelector('.show4');
  if (show4) {
    show4.addEventListener('click', () => {
      const menu_items = document.querySelector('.menu_items');
      menu_items.classList.toggle('show');
      document.body.style.overflow = 'auto'; // Enable page scrolling
    });
  }

  const show5 = document.querySelector('.show5');
  if (show5) {
    show5.addEventListener('click', () => {
      const menu_items = document.querySelector('.menu_items');
      menu_items.classList.toggle('show');
      document.body.style.overflow = 'auto'; // Enable page scrolling
    });
  }
})
