// DOM Elements
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const projectBtns = document.querySelectorAll(".project-btn");
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.querySelector(".modal-close");
const contactForm = document.getElementById("contactForm");

// Mobile Menu Toggle
navToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Close mobile menu when clicking on links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const scrolled = window.scrollY;

  if (scrolled > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
  }
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

// Observe elements for scroll animation
const animateElements = document.querySelectorAll(
  ".service-card, .project-card, .stat-item, .contact-item"
);
animateElements.forEach((el) => {
  el.classList.add("scroll-animate");
  observer.observe(el);
});

// Project data
const projectData = {
  ecommerce: {
    title: "E-commerce Fashion Platform",
    description:
      "Uma plataforma completa de e-commerce desenvolvida para o setor de moda, com funcionalidades avançadas de catálogo, carrinho de compras, sistema de pagamento integrado e painel administrativo robusto.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Stripe API",
      "AWS S3",
      "Redux",
    ],
    features: [
      "Sistema de autenticação completo",
      "Catálogo de produtos com filtros avançados",
      "Carrinho de compras persistente",
      "Integração com múltiplas formas de pagamento",
      "Painel administrativo para gestão de produtos",
      "Sistema de avaliações e comentários",
      "Notificações por email automatizadas",
      "Design responsivo e otimizado para SEO",
    ],
    timeline: "3 meses",
    team: "4 desenvolvedores",
    url: "https://exemplo-ecommerce.com",
  },
  delivery: {
    title: "App Delivery Food",
    description:
      "Aplicativo mobile completo para delivery de comida, incluindo geolocalização em tempo real, sistema de pagamento integrado, avaliações de restaurantes e tracking de pedidos.",
    technologies: [
      "Flutter",
      "Firebase",
      "Stripe",
      "Google Maps API",
      "Node.js",
      "MongoDB",
    ],
    features: [
      "Geolocalização e mapeamento em tempo real",
      "Catálogo de restaurantes e pratos",
      "Sistema de pedidos com customizações",
      "Múltiplas formas de pagamento",
      "Tracking de entrega em tempo real",
      "Sistema de avaliações e feedback",
      "Notificações push personalizadas",
      "Programa de fidelidade integrado",
    ],
    timeline: "4 meses",
    team: "5 desenvolvedores",
    url: "https://exemplo-delivery.com",
  },
  erp: {
    title: "Sistema ERP Corporativo",
    description:
      "Sistema completo de gestão empresarial (ERP) desenvolvido para médias empresas, incluindo módulos de vendas, estoque, financeiro, recursos humanos e relatórios analíticos.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js", "Docker", "Redis"],
    features: [
      "Módulo de vendas e CRM integrado",
      "Controle de estoque em tempo real",
      "Gestão financeira completa",
      "Módulo de recursos humanos",
      "Relatórios e dashboards analíticos",
      "Sistema de permissões granular",
      "Backup automático e segurança avançada",
      "API RESTful para integrações",
    ],
    timeline: "6 meses",
    team: "6 desenvolvedores",
    url: "https://exemplo-erp.com",
  },
  fitness: {
    title: "App Fitness Tracker",
    description:
      "Aplicativo mobile para acompanhamento de atividades físicas, com planos de treino personalizados, tracking de progresso, integração com wearables e análises detalhadas de performance.",
    technologies: [
      "React Native",
      "GraphQL",
      "PostgreSQL",
      "HealthKit",
      "Google Fit",
      "TensorFlow",
    ],
    features: [
      "Planos de treino personalizados",
      "Tracking de exercícios e progresso",
      "Integração com dispositivos wearables",
      "Análises de performance com IA",
      "Comunidade e desafios sociais",
      "Biblioteca de exercícios em vídeo",
      "Acompanhamento nutricional",
      "Relatórios detalhados de saúde",
    ],
    timeline: "5 meses",
    team: "4 desenvolvedores",
    url: "https://exemplo-fitness.com",
  },
};

// Project modal functionality
projectBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const projectKey = btn.getAttribute("data-project");
    const project = projectData[projectKey];

    if (project) {
      showProjectModal(project);
    }
  });
});

function showProjectModal(project) {
  const modalHTML = `
        <h2>${project.title}</h2>
        <div class="modal-project-info">
            <div class="modal-details">
                <h3>Sobre o Projeto</h3>
                <p>${project.description}</p>
                
                <h3>Tecnologias Utilizadas</h3>
                <div class="modal-tech">
                    ${project.technologies
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">
                    <div>
                        <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">Timeline</h4>
                        <p style="margin: 0;">${project.timeline}</p>
                    </div>
                    <div>
                        <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">Equipe</h4>
                        <p style="margin: 0;">${project.team}</p>
                    </div>
                </div>
                
                <div style="margin-top: 2rem;">
                    <a href="${
                      project.url
                    }" target="_blank" class="btn btn-primary">Visualizar Projeto</a>
                </div>
            </div>
            
            <div class="modal-features">
                <h3>Funcionalidades Principais</h3>
                <ul>
                    ${project.features
                      .map((feature) => `<li>${feature}</li>`)
                      .join("")}
                </ul>
            </div>
        </div>
    `;

  modalContent.innerHTML = modalHTML;
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Close modal
modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

// Contact form handling
contactForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;

  // Show loading state
  submitBtn.innerHTML = '<span class="loading"></span> Enviando...';
  submitBtn.disabled = true;

  // Simulate form submission (replace with actual implementation)
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show success message
    showMessage(
      "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      "success"
    );
    contactForm.reset();

    // Reset form labels
    const labels = contactForm.querySelectorAll("label");
    labels.forEach((label) => {
      label.style.top = "1rem";
      label.style.fontSize = "1rem";
      label.style.color = "var(--accent-color)";
    });
  } catch (error) {
    showMessage("Erro ao enviar mensagem. Tente novamente.", "error");
  } finally {
    // Reset button
    submitBtn.innerHTML = originalBtnText;
    submitBtn.disabled = false;
  }
});

// Show message function
function showMessage(text, type) {
  const existingMessage = document.querySelector(".message");
  if (existingMessage) {
    existingMessage.remove();
  }

  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.textContent = text;

  contactForm.appendChild(message);

  // Auto remove message after 5 seconds
  setTimeout(() => {
    message.remove();
  }, 5000);
}

// Form field animations
const formInputs = document.querySelectorAll(
  ".form-group input, .form-group textarea"
);
formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    const label = input.nextElementSibling;
    if (label) {
      label.style.top = "-0.5rem";
      label.style.fontSize = "0.85rem";
      label.style.color = "var(--primary-color)";
    }
  });

  input.addEventListener("blur", () => {
    const label = input.nextElementSibling;
    if (label && !input.value) {
      label.style.top = "1rem";
      label.style.fontSize = "1rem";
      label.style.color = "var(--accent-color)";
    }
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector(".hero-background");
  const heroContent = document.querySelector(".hero-content");

  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }

  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - scrolled / window.innerHeight;
  }
});

// Counter animation for stats
function animateCounters() {
  const counters = document.querySelectorAll(".stat-item h4");

  counters.forEach((counter) => {
    const target = parseInt(counter.textContent.replace("+", ""));
    const increment = target / 50;
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current) + "+";
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + "+";
      }
    };

    // Start animation when element is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(counter.closest(".stat-item"));
  });
}

// Initialize counter animation
animateCounters();

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
  }
});

// Theme toggle functionality (optional)
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Load saved theme
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});

// Lazy loading for images (if you add real images later)
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Smooth scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Add scroll to top button (optional)
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = "scroll-to-top";
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--gradient);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: var(--shadow);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.style.opacity = "1";
    scrollToTopBtn.style.transform = "translateY(0)";
  } else {
    scrollToTopBtn.style.opacity = "0";
    scrollToTopBtn.style.transform = "translateY(100px)";
  }
});

scrollToTopBtn.addEventListener("click", scrollToTop);

// Performance optimization - Debounced scroll handler
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Replace scroll event listeners with debounced versions for better performance
const debouncedScrollHandler = debounce(() => {
  // Your scroll handling code here
}, 10);

// Error handling for missing elements
function safeAddEventListener(element, event, handler) {
  if (element && typeof element.addEventListener === "function") {
    element.addEventListener(event, handler);
  }
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("TechSolutions Portfolio loaded successfully!");

  // Add any initialization code here
  const loadingScreen = document.querySelector(".loading-screen");
  if (loadingScreen) {
    loadingScreen.style.display = "none";
  }
});
