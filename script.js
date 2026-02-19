// Intersection Observer for slide-in animations
const slideElements = document.querySelectorAll('.slide-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

slideElements.forEach(el => observer.observe(el));

// Typing text animation
const text = "Welcome to Codingking!";
const typingElement = document.querySelector('.typing-text');

let index = 0;
let typingSpeed = 100; // milliseconds per character
let pauseBetweenLoops = 1500; // pause before restarting

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  } else {
    // After typing complete, pause then clear and restart
    setTimeout(() => {
      typingElement.textContent = '';
      index = 0;
      type();
    }, pauseBetweenLoops);
  }
}

type();

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
});

// Ad container toggle
const adContainer = document.getElementById('ad-container');
if (adContainer) {
  adContainer.addEventListener('click', function() {
    this.classList.toggle('closed');
  });
}