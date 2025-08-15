
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

function toggleMenu(){
  const nav = document.getElementById('nav-links')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)