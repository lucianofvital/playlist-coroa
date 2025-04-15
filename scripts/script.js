// Função para scroll suave
function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  }
  
  // Configuração das animações de entrada
  const animationConfig = {
    threshold: 0.2,
    rootMargin: "0px"
  };
  
  // Classes para diferentes tipos de animação
  const animationTypes = {
    fadeUp: "fade-up",
    fadeIn: "fade-in",
    scaleIn: "scale-in",
    slideIn: "slide-in"
  };
  
  // Função para adicionar classes de animação
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        
        // Anima elementos filhos em sequência
        const children = entry.target.querySelectorAll(".animate-child");
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add("visible");
          }, index * 200);
        });
  
        // Opcional: remove observer após animação
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Criar observer para animações
  const observer = new IntersectionObserver(handleIntersection, animationConfig);
  
  // Inicializar animações
  function initializeAnimations() {
    // Animar todas as seções
    document.querySelectorAll("section").forEach(section => {
      section.classList.add("fade-in");
      observer.observe(section);
    });
  
    // Animar cards e elementos específicos
    document.querySelectorAll(".music-item, .testimonial-card, .sale-card, .player-card").forEach(element => {
      element.classList.add("fade-up");
      observer.observe(element);
    });
  
    // Animar botões
    document.querySelectorAll(".action-button, .buy-button").forEach(button => {
      button.classList.add("scale-in");
      observer.observe(button);
    });
  
    // Animar elementos do header
    document.querySelectorAll(".navbar-brand, .hero-section h1, .hero-section p").forEach(element => {
      element.classList.add("slide-in");
      observer.observe(element);
    });
  }
  
  // Inicializar quando o DOM estiver pronto
  document.addEventListener("DOMContentLoaded", initializeAnimations);
  
  // Smooth scroll para todos os links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href !== "#") {
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });