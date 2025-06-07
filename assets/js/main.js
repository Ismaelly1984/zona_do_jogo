/**
 * Zona do Jogo - Script Principal
 * Contém funcionalidades gerais do site como menu responsivo,
 * animações e comportamentos comuns a todas as páginas.
 */

// Espera o DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Menu responsivo
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('show');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Adiciona classe ativa ao link do menu correspondente à página atual
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('nav ul li a');
    
    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Filtros na página de jogos
    const filtrosBtns = document.querySelectorAll('.filtro-btn');
    const jogosCards = document.querySelectorAll('.jogo-card');
    
    if (filtrosBtns.length > 0 && jogosCards.length > 0) {
        filtrosBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove a classe ativo de todos os botões
                filtrosBtns.forEach(b => b.classList.remove('ativo'));
                
                // Adiciona a classe ativo ao botão clicado
                this.classList.add('ativo');
                
                // Obtém a categoria selecionada
                const categoria = this.getAttribute('data-categoria');
                
                // Filtra os jogos
                jogosCards.forEach(card => {
                    if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Efeitos de hover para elementos com a classe hover-scale
    const hoverElements = document.querySelectorAll('.hover-scale');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('scale-active');
        });
        
        element.addEventListener('mouseleave', function() {
            this.classList.remove('scale-active');
        });
    });
    
    // Scroll suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação para elementos quando entram na viewport
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.jogo-card, .section-titulo, .btn');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Executa a animação no carregamento da página e no scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});

