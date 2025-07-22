document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica do Menu Hambúrguer ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav'); // Mudamos para pegar o <nav>

    // 1. Abrir/Fechar o menu ao clicar no botão
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
    }

    // 2. Fechar o menu ao clicar em um dos links
    const allLinks = mainNav.querySelectorAll('a');

    allLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Verifica se o menu está visível antes de fechar
            if (mainNav.classList.contains('show')) {
                mainNav.classList.remove('show');
            }
        });
    });

    // --- Lógica de Rolagem Suave ---
    document.querySelectorAll('#main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Pega o destino do link (ex: '#sobre')
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                 // Calcula a posição do elemento e subtrai a altura do header
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
