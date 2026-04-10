// Optimisation des performances - Debounce function
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

// Create animated particles avec optimisation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initScrollAnimations();
    initNavHighlight();
});

// Logo flip animation avec support clavier
function flipLogo() {
    const logoFlip = document.getElementById('logoFlip');
    logoFlip.classList.toggle('flipped');
}

// Ajout du support clavier pour le logo
document.querySelector('.logo-flip-container')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flipLogo();
    }
});

// Profile image rotation and change avec support clavier
const profileImages = [
    'face.jpg',
    'logo-sans-back.png',
];

let currentImageIndex = 0;

function changeProfileImage() {
    const imgElement = document.getElementById('profileImg');
    
    imgElement.classList.add('rotating');
    
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % profileImages.length;
        imgElement.src = profileImages[currentImageIndex];
    }, 400);
    
    setTimeout(() => {
        imgElement.classList.remove('rotating');
    }, 800);
}

document.getElementById('profileImg')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        changeProfileImage();
    }
});

// Système de traduction
let currentLang = 'fr';

const translations = {
    fr: {
        'lang-text': 'EN',
        'nav-home': 'Accueil',
        'nav-about': 'À propos',
        'nav-exp': 'Expérience',
        'nav-projects': 'Projets',
        'nav-skills': 'Compétences',
        'nav-certificates': 'Certificats',
        'nav-contact': 'Contact',
        'subtitle': 'Science des Données, Big Data et Intelligence Artificielle @ ENSA Agadir',
        'about-title': 'À Propos de Moi',
        'about-text': 'Passionné par la science des données et l\'intelligence artificielle, je suis étudiant à l\'ENSA Agadir où je développe mes compétences en analyse de données, machine learning et big data. Mon objectif est de transformer les données en insights précieux et de créer des solutions innovantes qui ont un impact réel.',
        'edu-title': 'Formation Académique',
        'degree': 'Cycle d\'Ingénieur',
        'high-school': 'Baccalauréat',
        'high-desc': 'Sciences Physiques - Option Français',
        'exp-title': 'Expérience',
        'exp0-title': 'INJAZ AL MAGHRIB - Company Program',
        'exp0-desc': 'Participation au programme entrepreneurial "Company Program" d\'INJAZ AL MAGHRIB, développant des compétences en gestion d\'entreprise, travail d\'équipe et innovation.',
        'exp0-date': '2024',
        'exp1-title': 'Projets Académiques',
        'exp1-desc': 'Développement de projets en data science, analyse de données et machine learning dans le cadre de ma formation à l\'ENSA Agadir.',
        'exp2-title': 'Apprentissage Continu',
        'exp2-desc': 'Formation autonome en programmation, développement web et technologies émergentes pour renforcer mes compétences techniques.',
        'projects-title': 'Projets',
        'project1-title': 'Analyse statistique avec R',
        'project2-title': 'Étude de la relation entre la disposition des produits et les performances des ventes',
        'skills-title': 'Compétences',
        'certificates-title': 'Certificats Obtenus',
        'contact-title': 'Contactez-moi',
        'label-name': 'Nom',
        'label-email': 'Email',
        'label-message': 'Message',
        'btn-text': 'Envoyer',
        'phone-label': 'Téléphone :',
        'rights': 'Tous droits réservés',
        'notificationSuccess': 'Message envoyé avec succès !',
        'skills-lang-title': 'Langages de programmation',
        'skills-ds-title': 'Data Science & Analyse',
        'skills-web-title': 'Développement Web & Outils',
        'cert-arduino-title': 'Programmation Arduino & Électronique',
        'cert-arduino-issuer': 'Arduino Education'
    },
    en: {
        'lang-text': 'FR',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-exp': 'Experience',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-certificates': 'Certificates',
        'nav-contact': 'Contact',
        'subtitle': 'Data Science, Big Data and Artificial Intelligence @ ENSA Agadir',
        'about-title': 'About Me',
        'about-text': 'Passionate about data science and artificial intelligence, I am a student at ENSA Agadir where I develop my skills in data analysis, machine learning and big data. My goal is to transform data into valuable insights and create innovative solutions that have a real impact.',
        'edu-title': 'Academic Education',
        'degree': 'Engineering Program',
        'high-school': 'High School Diploma',
        'high-desc': 'Physical Sciences - French Option',
        'exp-title': 'Experience',
        'exp0-title': 'INJAZ AL MAGHRIB - Company Program',
        'exp0-desc': 'Participation in the "Company Program" entrepreneurial program by INJAZ AL MAGHRIB, developing skills in business management, teamwork and innovation.',
        'exp0-date': '2024',
        'exp1-title': 'Academic Projects',
        'exp1-desc': 'Development of projects in data science, data analysis and machine learning as part of my training at ENSA Agadir.',
        'exp2-title': 'Continuous Learning',
        'exp2-desc': 'Self-training in programming, web development and emerging technologies to strengthen my technical skills.',
        'projects-title': 'Projects',
        'project1-title': 'Statistical Analysis with R',
        'project2-title': 'Study of Product Layout and Sales Performance Relationship',
        'skills-title': 'Skills',
        'certificates-title': 'Certificates Earned',
        'contact-title': 'Contact Me',
        'label-name': 'Name',
        'label-email': 'Email',
        'label-message': 'Message',
        'btn-text': 'Send',
        'phone-label': 'Phone:',
        'rights': 'All rights reserved',
        'notificationSuccess': 'Message sent successfully!',
        'skills-lang-title': 'Programming Languages',
        'skills-ds-title': 'Data Science & Analysis',
        'skills-web-title': 'Web Development & Tools',
        'cert-arduino-title': 'Arduino Programming & Electronics',
        'cert-arduino-issuer': 'Arduino Education'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    const texts = translations[currentLang];
    
    localStorage.setItem('preferredLanguage', currentLang);
    
    for (let id in texts) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = texts[id];
        }
    }
    
    document.documentElement.lang = currentLang;
}

window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== currentLang) {
        toggleLanguage();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animation au scroll pour les sections
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section:not(.hero)').forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(section);
    });
}

// Highlight navigation active
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    const highlightNav = debounce(() => {
        let current = '';
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, 100);

    window.addEventListener('scroll', highlightNav);
}

// Lazy loading des images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}

// Bouton "Retour en haut"
const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.setAttribute('aria-label', 'Retour en haut');

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(button);

    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    }, 100));
};

createScrollToTopButton();

// Console Easter Egg
console.log('%c👋 Salut! Intéressé par le code?', 'color: #0077FF; font-size: 20px; font-weight: bold;');
console.log('%cN\'hésitez pas à me contacter: omarbouaaliouat2005@gmail.com', 'color: #00E0FF; font-size: 14px;');

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert(currentLang === 'fr' ? 'Veuillez remplir tous les champs.' : 'Please fill in all fields.');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert(currentLang === 'fr' ? 'Veuillez entrer une adresse email valide.' : 'Please enter a valid email address.');
                return;
            }
            
            const sendBtn = document.getElementById('send-btn');
            const originalBtnText = sendBtn.innerHTML;
            
            sendBtn.disabled = true;
            sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>' + (currentLang === 'fr' ? 'Envoi...' : 'Sending...') + '</span>';
            
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            
            try {
                const response = await fetch('https://formspree.io/f/mpqodkjd', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    showNotification();
                    contactForm.reset();
                } else {
                    throw new Error('Erreur d\'envoi');
                }
            } catch (error) {
                const errorMsg = currentLang === 'fr' 
                    ? 'Erreur lors de l\'envoi. Veuillez réessayer.' 
                    : 'Error sending message. Please try again.';
                alert(errorMsg);
                console.error('Formspree Error:', error);
            } finally {
                sendBtn.disabled = false;
                sendBtn.innerHTML = originalBtnText;
            }
        });
    }
});

function showNotification() {
    const notification = document.getElementById('successNotification');
    const notificationText = document.getElementById('notification-text');
    
    if (notificationText) {
        notificationText.textContent = currentLang === 'fr' 
            ? 'Message envoyé avec succès !' 
            : 'Message sent successfully!';
    }
    
    notification.classList.add('show');
    
    setTimeout(function() {
        closeNotification();
    }, 5000);
}

function closeNotification() {
    const notification = document.getElementById('successNotification');
    if (notification) {
        notification.classList.remove('show');
    }
}
// ========== GESTION DES CERTIFICATS ==========

// Fonction pour ouvrir et visualiser un certificat
function viewCertificate(certificateFile) {
    // Créer le modal s'il n'existe pas
    let modal = document.getElementById('certificateModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'certificateModal';
        modal.className = 'certificate-modal';
        modal.innerHTML = `
            <div class="certificate-modal-content">
                <button class="certificate-modal-close" onclick="closeCertificateModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div id="certificateViewer"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    const viewer = document.getElementById('certificateViewer');
    
    // Détecter le type de fichier par l'extension
    const fileExtension = certificateFile.split('.').pop().toLowerCase();
    
    if (fileExtension === 'pdf') {
        viewer.innerHTML = `<embed src="${certificateFile}" type="application/pdf" width="100%" height="100%" style="min-height: 500px;">`;
    } else if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif') {
        viewer.innerHTML = `<img src="${certificateFile}" alt="Certificat" style="width: 100%; height: auto; border-radius: 10px;">`;
    } else {
        viewer.innerHTML = `<iframe src="${certificateFile}" width="100%" height="100%" style="min-height: 500px; border: none;"></iframe>`;
    }
    
    modal.classList.add('show');
    
    // Fermer avec la touche Echap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeCertificateModal();
        }
    });
}

// Fonction pour fermer le modal
function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    if (modal) {
        modal.classList.remove('show');
        const viewer = document.getElementById('certificateViewer');
        if (viewer) {
            viewer.innerHTML = '';
        }
    }
}

// Fonction pour télécharger un certificat
function downloadCertificate(certificateFile) {
    // Créer un lien de téléchargement temporaire
    const link = document.createElement('a');
    link.href = certificateFile;
    link.download = certificateFile; // Le nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Afficher une notification de téléchargement
    showDownloadNotification();
}

// Fonction pour afficher la notification de téléchargement
function showDownloadNotification() {
    // Créer une notification temporaire
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-download"></i>
            <span>Téléchargement démarré...</span>
        </div>
    `;
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.75rem;
        z-index: 10001;
        animation: slideInRight 0.5s ease-out;
        box-shadow: 0 10px 40px rgba(16, 185, 129, 0.4);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Animation pour la notification de téléchargement
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Alternative : Si les certificats sont des images
// Vous pouvez aussi utiliser cette fonction pour les certificats en image
function viewCertificateImage(imagePath) {
    const modal = document.getElementById('certificateModal');
    if (!modal) {
        createModal();
    }
    const viewer = document.getElementById('certificateViewer');
    viewer.innerHTML = `<img src="${imagePath}" alt="Certificat" style="width: 100%; height: auto; border-radius: 10px; max-height: 80vh; object-fit: contain;">`;
    document.getElementById('certificateModal').classList.add('show');
}

// Fonction utilitaire pour créer le modal s'il n'existe pas
function createModal() {
    const modal = document.createElement('div');
    modal.id = 'certificateModal';
    modal.className = 'certificate-modal';
    modal.innerHTML = `
        <div class="certificate-modal-content">
            <button class="certificate-modal-close" onclick="closeCertificateModal()">
                <i class="fas fa-times"></i>
            </button>
            <div id="certificateViewer"></div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Fermer en cliquant à l'extérieur
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeCertificateModal();
        }
    });
}

// Initialisation : créer le modal au chargement
document.addEventListener('DOMContentLoaded', function() {
    createModal();
});
// ============================================
// MENU BURGER POUR MOBILE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const menuBurger = document.getElementById('menuBurger');
    const mainNav = document.getElementById('mainNav');
    const body = document.body;
    
    if (menuBurger && mainNav) {
        // Ouvrir/fermer le menu au clic sur le burger
        menuBurger.addEventListener('click', function(e) {
            e.stopPropagation();
            menuBurger.classList.toggle('active');
            mainNav.classList.toggle('open');
            body.classList.toggle('menu-open');
        });
        
        // Fermer le menu quand on clique sur un lien
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuBurger.classList.remove('active');
                mainNav.classList.remove('open');
                body.classList.remove('menu-open');
            });
        });
        
        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(event) {
            if (mainNav.classList.contains('open') && 
                !mainNav.contains(event.target) && 
                !menuBurger.contains(event.target)) {
                menuBurger.classList.remove('active');
                mainNav.classList.remove('open');
                body.classList.remove('menu-open');
            }
        });
    }
});

// Ajuster le padding-top du container selon la hauteur du header
function adjustContainerPadding() {
    const header = document.querySelector('header');
    const container = document.querySelector('.container');
    if (header && container) {
        const headerHeight = header.offsetHeight;
        container.style.paddingTop = (headerHeight + 20) + 'px';
    }
}

// Exécuter au chargement et au redimensionnement
window.addEventListener('load', adjustContainerPadding);
window.addEventListener('resize', adjustContainerPadding);