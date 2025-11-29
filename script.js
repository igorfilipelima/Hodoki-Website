// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-background/95', 'backdrop-blur-md', 'border-b', 'border-border/50', 'shadow-lg');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('bg-background/95', 'backdrop-blur-md', 'border-b', 'border-border/50', 'shadow-lg');
    navbar.classList.add('bg-transparent');
  }
});

// Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');

mobileMenuBtn.addEventListener('click', () => {
  toggleMobileMenu();
});

function toggleMobileMenu() {
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
  } else {
    mobileMenu.classList.add('hidden');
  }
}

// Smooth Scroll
function scrollToSection(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (!mobileMenu.classList.contains('hidden')) {
      toggleMobileMenu();
    }
  }
}

// Toast Notification
const toast = document.getElementById('toast-container');
let toastTimeout;

function showToast() {
  if (toastTimeout) clearTimeout(toastTimeout);

  toast.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');

  toastTimeout = setTimeout(() => {
    hideToast();
  }, 3000);
}

function hideToast() {
  toast.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
}

// Copy Email to Clipboard
function copyEmailToClipboard() {
  const email = "hello@hodoki.pt";
  navigator.clipboard.writeText(email).then(() => {
    const defaultText = document.getElementById('copy-text-default');
    const successText = document.getElementById('copy-text-success');

    // Button Feedback
    defaultText.classList.add('hidden');
    successText.classList.remove('hidden');

    // Show Toast
    showToast();

    setTimeout(() => {
      defaultText.classList.remove('hidden');
      successText.classList.add('hidden');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

// Intersection Observer for Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-4', 'duration-700');
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.card-animate, section h2, section p, .grid > div');
  animatedElements.forEach(el => {
    el.style.opacity = '0'; // Start hidden
    el.classList.add('opacity-0'); // Ensure it's hidden
    observer.observe(el);
  });
});

// Make functions global
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.copyEmailToClipboard = copyEmailToClipboard;
window.hideToast = hideToast;
