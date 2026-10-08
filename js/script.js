/* === 1. Hamburger menu === */
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburgerBtn && mobileMenu) {

  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    hamburgerBtn.classList.remove('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.toggle('is-open');
    hamburgerBtn.classList.toggle('is-open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  hamburgerBtn.addEventListener('click', toggleMobileMenu);

  // Close the menu after the user taps a link inside it.
  // .forEach() here is a LOOP — it runs once per link found.
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close the menu if the user taps/clicks outside of it
  document.addEventListener('click', function (event) {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedButton = hamburgerBtn.contains(event.target);
    // CONDITION: only close if the click was outside both
    if (!clickedInsideMenu && !clickedButton) {
      closeMobileMenu();
    }
  });

  // Close the menu with the Escape key (keyboard accessibility)
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMobileMenu();
    }
  });
}


/* === 2. Back-to-top button === */
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {

  // Show the button only after the user has scrolled down a bit
  window.addEventListener('scroll', function () {
    // CONDITION: toggle visibility 
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* === 3. Contact form: validation + submit === */
const contactForm = document.getElementById('contact-form');

if (contactForm) {

  const requiredFieldIds = ['name', 'email'];

  function validateContactForm() {
    let isValid = true;

    for (let i = 0; i < requiredFieldIds.length; i++) {
      const field = document.getElementById(requiredFieldIds[i]);

      if (field && field.value.trim() === '') {
        isValid = false;
        field.style.borderColor = '#EF4444';
      } else if (field) {
        field.style.borderColor = '';
      }
    }

    return isValid;
  }

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateContactForm()) {
      return;
    }

    alert('Thanks! Your message has been received (demo only — not actually sent yet).');
    contactForm.reset();
  });
}

const footerInfo = {
  year: new Date().getFullYear(),
  updateCopyright: function () {
    const footer = document.querySelector('.site-footer');
    if (footer) {
      footer.textContent = '\u00A9 ' + this.year + ' NovaTech. For educational and informational purposes.';
    }
  }
};

footerInfo.updateCopyright();
