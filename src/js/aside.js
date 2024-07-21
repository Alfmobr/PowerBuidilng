



function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
  }

  
let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;
}



    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        if (navLinks.style.transform === 'translateX(0)') {
            navLinks.style.transform = 'translateX(300px)';
        } else {
            navLinks.style.transform = 'translateX(0)';
        }
    });

