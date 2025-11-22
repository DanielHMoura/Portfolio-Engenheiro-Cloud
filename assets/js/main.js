// ===== MOBILE MENU =====
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    
    if (!menuToggle || !sidebar) {
        console.warn('⚠️ Mobile menu elements not found');
        return;
    }
    
    // Debug
    console.log('✅ Menu elements found:', { menuToggle, sidebar, closeSidebar });
    
    // Abrir/Fechar menu
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('📱 Menu clicked, current class:', sidebar.className);
        
        // Toggle a classe de esconder
        if (sidebar.classList.contains('-translate-x-full')) {
            sidebar.classList.remove('-translate-x-full');
            console.log('📱 Menu OPENED');
        } else {
            sidebar.classList.add('-translate-x-full');
            console.log('📱 Menu CLOSED');
        }
    });
    
    // Fechar ao clicar no botão de fechar
    if (closeSidebar) {
        closeSidebar.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.add('-translate-x-full');
            console.log('📱 Mobile menu closed via X button');
        });
    }
    
    // Fechar ao clicar em um link de navegação
    for (const link of document.querySelectorAll('.nav-link')) {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                sidebar.classList.add('-translate-x-full');
                console.log('📱 Menu closed after link click');
            }
        });
    }
    
    // Fechar ao clicar fora do menu (no mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 768 && 
            !sidebar.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            sidebar.classList.add('-translate-x-full');
        }
    });
}

// ===== ACTIVE NAVIGATION =====
function initActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const mainContent = document.querySelector('main');
    
    if (!mainContent) return;
    
    mainContent.addEventListener('scroll', () => {
        const scrollPosition = mainContent.scrollTop;
        
        let i = 0;
        for (const section of sections) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                for (const link of navLinks) { link.classList.remove('active'); }
                if (navLinks[i]) {
                    navLinks[i].classList.add('active');
                }
            }
            i++;
        }
    });
}

// ===== NAME TYPING ANIMATION =====
function initTypingAnimation() {
    const typedName = document.getElementById('typedName');
    
    if (!typedName) {
        console.warn('⚠️ typedName element not found');
        return;
    }
    
    const text = 'Lorem ipsum';
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            typedName.textContent += text[index];
            index++;
            setTimeout(typeText, 100);
        }
    }
    
    typeText();
    console.log('✅ Typing animation started');
}

// ===== SET YEAR =====
function updateFooterYear() {
    const yearElement = document.getElementById('year');
    
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
        console.log('✅ Footer year updated:', new Date().getFullYear());
    }
}

// ===== LANGUAGE SELECTOR =====
function initLanguageSelector() {
    const langSelector = document.getElementById('langSelector');
    
    if (!langSelector) {
        console.warn('⚠️ langSelector not found');
        return;
    }
    
    // Definir idioma salvo
    const savedLang = localStorage.getItem('language') || 'en';
    langSelector.value = savedLang;
    console.log('📌 Language set to:', savedLang);
    
    // Escutar mudanças
    langSelector.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        console.log('🌐 Language selector changed to:', selectedLang);
        
        // Salvar no localStorage
        localStorage.setItem('language', selectedLang);
        
        // Atualizar carousel de recomendações
        if (typeof setCarouselLanguage === 'function') {
            setCarouselLanguage(selectedLang);
            console.log('✅ Carousel language updated');
        } else {
            console.warn('⚠️ setCarouselLanguage function not found');
        }
        
        // Atualizar traduções da página
        if (typeof updateTranslations === 'function') {
            updateTranslations(selectedLang);
            console.log('✅ Page translations updated');
        }
    });
}

// ===== CERTIFICATE MODAL =====
let _lastFocusedElement = null;
let _modalKeydownHandler = null;
let _modalClickHandler = null;
function openCertModal(imageSrc, triggerElem) {
    const modal = document.getElementById('certModal');
    const modalImage = document.getElementById('certModalImage');
    
    if (!modal || !modalImage) {
        console.error('❌ Modal elements not found!');
        return;
    }
    
    modalImage.src = imageSrc;
    // Tenta definir um alt descritivo com base no nome do arquivo
    const filename = (imageSrc || '').split('/').pop() || 'certificate';
    modalImage.alt = `Certificate: ${filename}`;
    _lastFocusedElement = triggerElem || document.activeElement;
    if (_lastFocusedElement && typeof _lastFocusedElement.setAttribute === 'function') {
        _lastFocusedElement.setAttribute('aria-expanded', 'true');
    }
    // Ensure the element is visible regardless of showModal support
        modal.classList.remove('hidden');
        // Mark rest of page as hidden from screen readers while modal is open
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.setAttribute('aria-hidden', 'true');
            mainContent.setAttribute('inert', '');
            mainContent.style.pointerEvents = 'none';
        }
    // Update aria-hidden for assistive tech
    modal.removeAttribute('aria-hidden');
    // Open dialog if supported, else rely on the class fallback
    if (typeof modal.showModal === 'function') {
        try {
            modal.showModal();
        } catch (err) {
            console.warn('⚠️ modal.showModal() failed; continuing with fallback', err);
        }
    }
    document.body.style.overflow = 'hidden';
    // Focus on close button
    const closeBtn = modal.querySelector('#certModalClose');
    if (closeBtn) closeBtn.focus();
    // Add handlers for keyboard and clicks to trap focus / close modal
    _modalKeydownHandler = (e) => {
        if (e.key === 'Escape') {
            closeCertModal();
        }
        if (e.key === 'Tab') {
            // Simple focus trap
            const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        }
    };
    modal.addEventListener('keydown', _modalKeydownHandler);
    _modalClickHandler = (e) => {
        if (e.target === modal) {
            e.preventDefault();
            e.stopPropagation();
            closeCertModal();
        }
    };
    modal.addEventListener('click', _modalClickHandler);
    console.log('🖼️ Certificate modal opened');
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    if (!modal) return;

    // Close dialog if supported, else hide fallback
    if (typeof modal.close === 'function' && modal.open) {
        modal.close();
    } else {
        modal.classList.add('hidden');
    }

    document.body.style.overflow = 'auto';

    // Remove event handlers
    if (_modalKeydownHandler) {
        modal.removeEventListener('keydown', _modalKeydownHandler);
        _modalKeydownHandler = null;
    }
    if (_modalClickHandler) {
        modal.removeEventListener('click', _modalClickHandler);
        _modalClickHandler = null;
    }

    // Set aria-hidden for assistive tech
    modal.setAttribute('aria-hidden', 'true');
    // Remove aria-hidden and inert from background content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.removeAttribute('aria-hidden');
        mainContent.removeAttribute('inert');
        mainContent.style.pointerEvents = '';
    }

    // Collapse expanded state on trigger and return focus
    if (_lastFocusedElement && typeof _lastFocusedElement.setAttribute === 'function') {
        _lastFocusedElement.setAttribute('aria-expanded', 'false');
    }
    if (_lastFocusedElement && typeof _lastFocusedElement.focus === 'function') {
        _lastFocusedElement.focus();
    }
    _lastFocusedElement = null;
    // ensure modal is hidden (in case dialog close didn't hide it visually)
    modal.classList.add('hidden');
    console.log('🖼️ Certificate modal closed');
}

// NOTE: Modal open/close event listeners are attached per-modal or via dedicated elements.
// We no longer use global document-level handlers to avoid duplicate behavior.

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    for (const anchor of document.querySelectorAll('a[href^="#"]')) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    console.log('✅ Smooth scroll initialized');
}

// ===== INITIALIZE ALL =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 main.js loaded');
    console.log('📱 Window width:', window.innerWidth);
    
    initMobileMenu();  // ← DEVE SER PRIMEIRO
    initLanguageSelector();
    initActiveNav();
    initTypingAnimation();
    updateFooterYear();
    initSmoothScroll();
    initFadeInAnimation(); // ← ADICIONAR ANIMAÇÃO DE FADE-IN
    
    console.log('✅ main.js initialized successfully');
});

// ===== MODAL INTERACTION SETUP =====
document.addEventListener('DOMContentLoaded', () => {
    // certModal referenced in open/close handlers; no local handlers here
    const certModalInner = document.getElementById('certModalInner');
    const certButtons = document.querySelectorAll('.cert-btn');
    const certClose = document.getElementById('certModalClose');
        for (const btn of certButtons) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const src = btn.dataset.image;
                openCertModal(src, btn);
            });
        }
        if (certClose) {
            certClose.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeCertModal();
            });
        }
    // Modal click and keydown handlers are managed inside openCertModal/closeCertModal
    if (certModalInner) {
        certModalInner.addEventListener('click', (e) => e.stopPropagation());
        certModalInner.addEventListener('keydown', (e) => e.stopPropagation());
    }
});

// ===== FADE-IN ANIMATION ON SCROLL =====
function initFadeInAnimation() {
    const sections = document.querySelectorAll('.section:not(#home)');
    
    if (!sections.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animar os primeiros elementos filho (headers, cards, etc)
                const directChildren = entry.target.querySelector('.max-w-6xl, .max-w-7xl, [class*="max-w"]');
                if (directChildren) {
                    directChildren.style.animation = `fadeInUp 1.5s ease-in-out forwards`;
                    directChildren.style.opacity = '0';
                }
                
                // Animar cards individuais com delay maior
                const cards = entry.target.querySelectorAll('.bg-slate-800, .bg-gradient-to-br, .p-4, .p-6');
                let idx = 0;
                for (const card of cards) {
                    if (idx < 6) { // Limitar a 6 cards para não ficar muito lento
                        card.style.animation = `fadeInUp 1.2s ease-in-out forwards`;
                        card.style.animationDelay = `${idx * 0.2}s`;
                        card.style.opacity = '0';
                    }
                    idx++;
                }
                
                console.log('✅ Section and content faded in:', entry.target.id);
            }
        }
    }, {
        threshold: 0.1
    });
    
    for (const section of sections) observer.observe(section);
    console.log('✅ Fade-in animation observer initialized');
}

const defaultLanguage = 'de'; // ✅ MUDOU para alemão