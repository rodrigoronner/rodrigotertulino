document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica do Menu Hambúrguer ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // 1. Abrir/Fechar o menu ao clicar no botão
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // 2. Fechar o menu ao clicar em um dos links
    const allLinks = navLinks.querySelectorAll('a');

    allLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Verifica se o menu está visível (se estamos no modo mobile) antes de fechar
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    });

    // --- Lógica de Rolagem Suave (já existente) ---
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
