function openMenu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("menu-closed")) {
        menu.classList.remove("menu-closed");
        menu.classList.add("menu-open");
    } else {
        menu.classList.remove("menu-open");
        menu.classList.add("menu-closed");
    }
}

// Função para fechar o menu quando um link for clicado
document.querySelectorAll('#menu ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        var menu = document.getElementById("menu");
        menu.classList.remove("menu-open");
        menu.classList.add("menu-closed");
    });
});

// Função para mudar a transparência e sombra da barra ao rolar a página
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
    }
};
