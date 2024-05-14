const navElement = document.querySelector('nav');
const navbarLinks = navElement.querySelectorAll('a');

const navPosition = navElement.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  navElement.style.top = scrollPosition + 'px';
  
  navbarLinks.forEach(link =>{
    const selectionElement = document.querySelector(link.hash);
    const offset = 50;
    
    if (scrollPosition + offset> selectionElement.offsetTop && scrollPosition + offset< selectionElement.offsetTop + selectionElement.offsetHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  })
  
});
