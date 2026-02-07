const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li a');

// Abrir/fechar menu hamburger
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Fechar menu ao clicar em um link e rolar para a seção
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);

    section.scrollIntoView({ behavior: 'smooth' });
    navList.classList.remove('active'); // Fecha menu lateral
  });
});
