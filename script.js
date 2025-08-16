
document.querySelectorAll('.dropdown > a').forEach(menu => {
  menu.addEventListener('click', function(e) {
    e.preventDefault();
    const parent = this.parentElement;
    parent.classList.toggle('open');

    // Fecha outros menus abertos
    document.querySelectorAll('.dropdown').forEach(item => {
      if (item !== parent) {
        item.classList.remove('open');
      }
    });
  });
});

// Fecha o menu ao clicar fora
document.addEventListener('click', function(e) {
  const isClickInsideMenu = e.target.closest('.dropdown');
  if (!isClickInsideMenu) {
    document.querySelectorAll('.dropdown').forEach(item => {
      item.classList.remove('open');
    });
  }

});

const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav-links');

function toggleMenu() {
  nav.classList.toggle('active');
}

// Abrir/fechar no clique do botão
btnMobile.addEventListener('click', toggleMenu);

// Fechar ao clicar fora do menu
document.addEventListener('click', function (event) {
  const isClickInsideMenu = nav.contains(event.target) || btnMobile.contains(event.target);
  
  if (!isClickInsideMenu && nav.classList.contains('active')) {
    nav.classList.remove('active');
  }
});