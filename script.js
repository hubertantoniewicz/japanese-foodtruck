const scrollMenuButton = document.getElementById('scrollMenu');
const menuSection = document.getElementById('menu');

scrollMenuButton?.addEventListener('click', () => {
  menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const links = document.querySelectorAll('.nav-links a');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href')?.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
