const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav-links');

btnMobile.addEventListener('click', () =>{
  nav.classList.toggle('active')
})

// Fechar ao clicar fora do menu
document.addEventListener('click', (e) => {
  const isClickInsideMenu = nav.contains(e.target) || btnMobile.contains(event.target);
  
  if (!isClickInsideMenu && nav.classList.contains('active')) {
    nav.classList.remove('active');
  }
});