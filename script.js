document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos do Menu
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mainNav = document.getElementById('main-nav');
    
    // Função para abrir o menu
    function openMenu() {
        mainNav.classList.add('open');
    }

    // Função para fechar o menu
    function closeMenu() {
        mainNav.classList.remove('open');
    }

    // Adiciona eventos aos botões
    if (menuToggle && menuClose && mainNav) {
        menuToggle.addEventListener('click', openMenu);
        menuClose.addEventListener('click', closeMenu);
    }

    // Adiciona evento para fechar o menu ao clicar em um link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', closeMenu); 
    });

    // --- Lógica de Rolagem Suave para as âncoras ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Rola para o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
