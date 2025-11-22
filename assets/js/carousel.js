// ===== STATE MANAGEMENT =====
const carouselState = {
    currentLang: localStorage.getItem('language') || 'de', // ✅ MUDOU: 'en' para 'de'
    currentSlide: 0,
    recommendationsData: {},
    autoplayInterval: null,
    autoplayDelay: 20000 // 20 segundos
};

// ===== INITIALIZE CAROUSEL =====
function initCarousel() {
    console.log('🎬 Initializing Carousel...');
    
    // Carregar dados de recomendações
    if (globalThis.recommendationsData) {
        carouselState.recommendationsData = globalThis.recommendationsData;
        console.log('✅ Recommendations data loaded:', carouselState.recommendationsData);
    } else {
        console.warn('⚠️ recommendationsData not found in globalThis');
        return;
    }
    
    // Atualizar carousel com idioma atual
    updateRecommendationsCarousel();
    
    // Iniciar autoplay
    startAutoplay();
}

// ===== AUTOPLAY =====
function startAutoplay() {
    if (carouselState.autoplayInterval) {
        clearInterval(carouselState.autoplayInterval);
    }
    
    carouselState.autoplayInterval = setInterval(() => {
        nextSlide();
    }, carouselState.autoplayDelay);
    
    console.log('▶️ Autoplay started');
}

function stopAutoplay() {
    if (carouselState.autoplayInterval) {
        clearInterval(carouselState.autoplayInterval);
        carouselState.autoplayInterval = null;
        console.log('⏹️ Autoplay stopped');
    }
}

// ===== PRÓXIMO SLIDE (AUTO) =====
function nextSlide() {
    const lang = carouselState.currentLang;
    const recommendations = carouselState.recommendationsData[lang] || [];
    const totalSlides = recommendations.length;
    
    if (totalSlides === 0) return;
    
    carouselState.currentSlide = (carouselState.currentSlide + 1) % totalSlides;
    
    console.log(`📍 Slide: ${carouselState.currentSlide + 1}/${totalSlides}`);
    updateSlidePosition();
}

// ===== MUDAR IDIOMA =====
function setCarouselLanguage(lang) {
    console.log('🌐 Language changed to:', lang);
    
    // ✅ Parar autoplay PRIMEIRO
    stopAutoplay();
    
    // ✅ Atualizar estado
    carouselState.currentLang = lang;
    carouselState.currentSlide = 0;
    
    // ✅ Limpar track antes de renderizar
    const track = document.getElementById('recommendationsTrack');
    if (track) {
        track.innerHTML = '';
    }
    
    // ✅ Renderizar com delay para garantir que o DOM está pronto
    setTimeout(() => {
        updateRecommendationsCarousel();
        updateRecommendationsGrid(); // ✅ NOVO
        startAutoplay();
        console.log('✅ Carousel updated for language:', lang);
    }, 50);
}

// ===== RENDERIZAR CAROUSEL =====
function updateRecommendationsCarousel() {
    const lang = carouselState.currentLang;
    const recommendations = carouselState.recommendationsData[lang] || [];
    
    if (!recommendations || recommendations.length === 0) {
        console.warn(`⚠️ No recommendations found for language: ${lang}`);
        return;
    }
    
    console.log(`📊 Rendering ${recommendations.length} recommendations for ${lang}`);
    
    const track = document.getElementById('recommendationsTrack');
    if (!track) {
        console.error('❌ recommendationsTrack not found!');
        return;
    }
    
    track.innerHTML = '';
    
    for (const rec of recommendations) {
        const card = document.createElement('li');
        card.setAttribute('role', 'listitem');
        card.className = 'min-w-full px-2 md:px-4 flex-shrink-0 flex items-center justify-center';
        card.innerHTML = `
    <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg md:rounded-2xl p-5 md:p-12 text-center backdrop-blur h-full flex flex-col justify-center min-h-80 md:min-h-96 max-w-3xl md:max-w-2xl">                
        <!-- Testimonial Text -->
        <p class="text-slate-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 flex-1">
            "${rec.text}"
        </p>
        
        <!-- Author Info -->
        <div class="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            <img src="${rec.image}" alt="${rec.name}" class="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-cyan-400 object-cover">
            <div class="text-left">
                <h3 class="text-white font-bold text-sm md:text-lg">${rec.name}</h3>
                <p class="text-slate-400 text-xs md:text-sm">${rec.position}</p>
            </div>
        </div>
        
        <!-- Links Section -->
        <div class="flex items-center justify-center gap-4">
            <!-- LinkedIn Link (if exists) -->
            ${rec.linkedinUrl ? `<a href="${rec.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-10 h-10 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 rounded-full transition-all" title="View on LinkedIn">
                <i class="fab fa-linkedin text-2xl"></i>
            </a>` : ''}
            <!-- PDF Link (if exists) -->
            ${rec.pdfUrl ? `<a href="${rec.pdfUrl}" download class="inline-flex items-center justify-center w-10 h-10 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 rounded-full transition-all" title="Download PDF">
                <i class="fas fa-file-pdf text-2xl"></i>
            </a>` : ''}
        </div>
    </div>
        `;
        track.appendChild(card);
    }
    
    updateRecommendationDots(recommendations.length);
    updateSlidePosition();
    
    // ✅ NOVO: Renderizar grid também no mobile
    updateRecommendationsGrid();
}

// ===== RENDERIZAR GRID (MOBILE) =====
function updateRecommendationsGrid() {
    const lang = carouselState.currentLang;
    const recommendations = carouselState.recommendationsData[lang] || [];
    
    if (!recommendations || recommendations.length === 0) {
        console.warn(`⚠️ No recommendations found for language: ${lang}`);
        return;
    }
    
    console.log(`📊 Rendering ${recommendations.length} recommendations in GRID for ${lang}`);
    
    const grid = document.getElementById('recommendationsGrid');
    if (!grid) {
        console.error('❌ recommendationsGrid not found!');
        return;
    }
    
    grid.innerHTML = '';
    
    for (const rec of recommendations) {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-5 text-center backdrop-blur flex flex-col justify-center">                
                <!-- Testimonial Text -->
                <p class="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                    "${rec.text}"
                </p>
                
                <!-- Author Info -->
                <div class="flex items-center justify-center gap-3 mb-4">
                    <img src="${rec.image}" alt="${rec.name}" class="w-12 h-12 rounded-full border-4 border-cyan-400 object-cover">
                    <div class="text-left">
                        <h3 class="text-white font-bold text-sm">${rec.name}</h3>
                        <p class="text-slate-400 text-xs">${rec.position}</p>
                    </div>
                </div>
                
                <!-- Links Section -->
                <div class="flex items-center justify-center gap-3">
                    <!-- LinkedIn Link (if exists) -->
                    ${rec.linkedinUrl ? `<a href="${rec.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-10 h-10 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 rounded-full transition-all" title="View on LinkedIn">
                        <i class="fab fa-linkedin text-2xl"></i>
                    </a>` : ''}
                    <!-- PDF Link (if exists) -->
                    ${rec.pdfUrl ? `<a href="${rec.pdfUrl}" download class="inline-flex items-center justify-center w-10 h-10 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 rounded-full transition-all" title="Download PDF">
                        <i class="fas fa-file-pdf text-2xl"></i>
                    </a>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(card);
    }
}

// ===== ATUALIZAR POSIÇÃO =====
function updateSlidePosition() {
    const track = document.getElementById('recommendationsTrack');
    if (!track) return;
    
    const offset = -carouselState.currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Prefer updating the existing DOM nodes for the dots to preserve focus
    const dotsContainer = document.getElementById('recommendationsDots');
    if (dotsContainer) {
        const dots = Array.from(dotsContainer.children);
        for (let i = 0; i < dots.length; i++) {
            setDotState(dots[i], i === carouselState.currentSlide);
        }
    }
    // Announce slide change for screen readers
    const live = document.getElementById('carouselLive');
    const lang = carouselState.currentLang;
    const total = carouselState.recommendationsData[lang]?.length || 0;
    if (live) live.textContent = `Slide ${carouselState.currentSlide + 1} of ${total}`;
}

// ===== ATUALIZAR DOTS =====
function updateRecommendationDots(totalSlides = null) {
    const dotsContainer = document.getElementById('recommendationsDots');
    if (!dotsContainer) return;
    
    if (!totalSlides) {
        const lang = carouselState.currentLang;
        totalSlides = carouselState.recommendationsData[lang]?.length || 0;
    }
    
    // Setup container for assistive technologies
    dotsContainer.setAttribute('role', 'tablist');
    dotsContainer.setAttribute('aria-label', 'Recommendations navigation');
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = `w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
            i === carouselState.currentSlide ? 'bg-cyan-400 w-8 md:w-12' : 'bg-slate-600 hover:bg-slate-500'
        }`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1} of ${totalSlides}`);
        dot.setAttribute('aria-controls', 'recommendationsTrack');
        // Ensure proper state attributes and class for initial render
        setDotState(dot, i === carouselState.currentSlide);
        dot.onclick = (e) => {
            e.stopPropagation();
            stopAutoplay();
            carouselState.currentSlide = i;
            updateSlidePosition();
            startAutoplay();
        };
        dotsContainer.appendChild(dot);
    }
}

// Helper to update a single dot's ARIA attributes and classes
function setDotState(dot, pressed) {
    if (!dot) return;
    dot.setAttribute('aria-pressed', pressed ? 'true' : 'false');
    if (pressed) dot.setAttribute('aria-current', 'true'); else dot.removeAttribute('aria-current');
    if (pressed) {
        dot.classList.add('bg-cyan-400');
        dot.classList.remove('bg-slate-600');
        dot.classList.add('w-8', 'md:w-12');
    } else {
        dot.classList.remove('bg-cyan-400');
        dot.classList.add('bg-slate-600');
        dot.classList.remove('w-8', 'md:w-12');
    }
}

// ===== INICIAR AO CARREGAR PÁGINA =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM loaded, initializing carousel...');
    setTimeout(() => initCarousel(), 100);
});

// ===== PARAR AUTOPLAY AO SAIR DA PÁGINA =====
window.addEventListener('beforeunload', () => {
    stopAutoplay();
});

