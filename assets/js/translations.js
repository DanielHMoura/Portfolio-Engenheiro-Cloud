/**
 * Translations - English and Deutsch
 */

// A variável 'recommendationsData' DEVE ser declarada aqui (no início)
// para que possa ser usada nas linhas seguintes.
// ===== RECOMMENDATIONS DATA =====
const recommendationsData = {
    en: [
        {
            text: "Professional, reliable, and collaborative — a pleasure to work with.",
            name: "Reviewer 1",
            position: "Colleague",
            image: "assets/image/placeholder.svg",
            linkedinUrl: "https://www.linkedin.com/in/placeholder/"
        },
        {
            text: "Delivers quality work, communicates clearly, and helps the team succeed.",
            name: "Reviewer 2",
            position: "Team Member",
            image: "assets/image/placeholder.svg",
            linkedinUrl: "https://www.linkedin.com/in/placeholder/"
        },
        {
            text: "Creates thoughtful solutions and is always focused on the user experience.",
            name: "Reviewer 3",
            position: "Project Collaborator",
            image: "assets/image/placeholder.svg",
            linkedinUrl: "https://www.linkedin.com/in/placeholder/"
        },
        {
            text: "Dependable and focused — consistently delivers on commitments.",
            name: "Reviewer 4",
            position: "Former Team Lead",
            image: "assets/image/placeholder.svg",
            pdfUrl: "assets/pdf/example-recommendation.pdf"
        }
    ],
    de: [
        {
            text: "Professionell, zuverlässig und kollegial – eine Freude, mit dieser Person zu arbeiten.",
            name: "Gutachter 1",
            position: "Kollege",
            image: "assets/image/placeholder.svg",
            linkedinUrl: "https://www.linkedin.com/in/placeholder/"
        },
        {
            text: "Liefert qualitativ hochwertige Arbeit, kommuniziert klar und unterstützt das Team.",
            name: "Gutachter 2",
            position: "Teammitglied",
            image: "assets/image/placeholder.svg",
            linkedinUrl: "https://www.linkedin.com/in/placeholder/"
        },
        {
            text: "Findet durchdachte Lösungen und fokussiert sich stets auf die Nutzererfahrung.",
            name: "Gutachter 3",
            position: "Projektmitarbeiter",
            image: "assets/image/placeholder.svg",
            linkedinUrl: "https://www.linkedin.com/in/placeholder/"
        },
        {
            text: "Zuverlässig und zielorientiert – erfüllt konsequent Vereinbarungen.",
            name: "Gutachter 4",
            position: "Ehemaliger Teamleiter",
            image: "assets/image/placeholder.svg",
            pdfUrl: "assets/pdf/example-recommendation.pdf"
        }
    ]
};

// Expor globalmente
globalThis.recommendationsData = recommendationsData;


const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Skills & Technologies",
        "nav.certifications": "Certifications",
        "nav.github": "GitHub Projects",
        "nav.recommendations": "Recommendations",
        "nav.contact": "Contact",
        
        // Home Section
        "home.subtitle": "Lorem ipsum dolor sit amet",
        
        // About Section
        "about.title": "About",
        "about.greeting": "Lorem ipsum",
        "about.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        "about.philosophy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "about.callToAction": "Lorem ipsum dolor sit amet",
        "about.hobbiesTitle": "Hobbies",
        "about.hobbies.0.title": "Build Lego",
        "about.hobbies.0.subtitle": "Creative Building",
        "about.hobbies.1.title": "Lorem ipsum",
        "about.hobbies.1.subtitle": "My Kids",
        "about.hobbies.2.title": "Family Time",
        "about.hobbies.2.subtitle": "Life Priority",
        
        // Skills Section
        "skills.title": "Skills",
        "skills.subtitle": "Lorem ipsum dolor sit amet",
        "skills.categories.cloud.title": "AWS + Terraform Projects",
        "skills.categories.cloud.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        "skills.categories.devops.title": "Cloud Infrastructure & DevOps",
        "skills.categories.devops.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        
        // Certifications Section
        "certifications.title": "Certifications & Languages",
        "certifications.subtitle": "Lorem ipsum dolor sit amet",
        "certifications.languagesTitle": "Languages",
        "certifications.languages.0.name": "Portuguese",
        "certifications.languages.0.level": "Native",
        "certifications.languages.1.name": "English",
        "certifications.languages.1.level": "Fluent",
        "certifications.languages.2.name": "German",
        "certifications.languages.2.level": "Intermediate",
        
        // GitHub Section
        "github.title": "GitHub Projects",
        "github.subtitle": "Lorem ipsum dolor sit amet",
        "github.items.0.title": "Terraform AWS Infrastructure",
        "github.items.0.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "github.items.0.viewProject": "View Project →",
        "github.items.1.title": "AWS Lambda with CDK",
        "github.items.1.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "github.items.1.viewProject": "View Project →",
        "github.items.2.title": "Dockerized Application (Flask + PostgreSQL)",
        "github.items.2.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "github.items.2.viewProject": "View Project →",
        
        // Recommendations Section
        "recommendations.title": "Recommendations",
        "recommendations.subtitle": "Lorem ipsum dolor sit amet",
        
        // Contact Section
        "contact.title": "Get In Touch",
        "contact.description": "Lorem ipsum dolor sit amet",
        "contact.email": "Email",
        "contact.location": "Location",
    },
    de: {
        // Navigation
        "nav.home": "Startseite",
        "nav.about": "Über mich",
        "nav.projects": "Fähigkeiten & Technologien",
        "nav.certifications": "Zertifizierungen",
        "nav.github": "GitHub-Projekte",
        "nav.recommendations": "Empfehlungen",
        "nav.contact": "Kontakt",
        
        // Home Section
        "home.subtitle": "Lorem ipsum dolor sit amet",
        
        // About Section
        "about.title": "Über mich",
        "about.greeting": "Lorem ipsum",
        "about.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        "about.philosophy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "about.callToAction": "Lorem ipsum dolor sit amet",
        "about.hobbiesTitle": "Hobbys",
        "about.hobbies.0.title": "Lorem ipsum",
        "about.hobbies.0.subtitle": "Lorem ipsum",
        "about.hobbies.1.title": "Lorem ipsum",
        "about.hobbies.1.subtitle": "Lorem ipsum",
        "about.hobbies.2.title": "Lorem ipsum",
        "about.hobbies.2.subtitle": "Lorem ipsum",
        
        // Skills Section
        "skills.title": "Fähigkeiten",
        "skills.subtitle": "Lorem ipsum dolor sit amet",
        "skills.categories.cloud.title": "AWS + Terraform Projekte",
        "skills.categories.cloud.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "skills.categories.devops.title": "Cloud-Infrastruktur & DevOps",
        "skills.categories.devops.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        
        // Certifications Section
        "certifications.title": "Zertifizierungen & Sprachen",
        "certifications.subtitle": "Professionelle Qualifikationen und Sprachen, die ich spreche",
        "certifications.languagesTitle": "Sprachen",
        "certifications.languages.0.name": "Portugiesisch",
        "certifications.languages.0.level": "Muttersprache",
        "certifications.languages.1.name": "Englisch",
        "certifications.languages.1.level": "Fließend",
        "certifications.languages.2.name": "Deutsch",
        "certifications.languages.2.level": "Mittelstufe",
        
        // GitHub Section
        "github.title": "GitHub-Projekte",
        "github.subtitle": "Lorem ipsum dolor sit amet",
        "github.items.0.title": "Terraform AWS-Infrastruktur",
        "github.items.0.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "github.items.0.viewProject": "Projekt ansehen →",
        "github.items.1.title": "AWS Lambda mit CDK",
        "github.items.1.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "github.items.1.viewProject": "Projekt ansehen →",
        "github.items.2.title": "Containerisierte Anwendung (Flask + PostgreSQL)",
        "github.items.2.description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "github.items.2.viewProject": "Projekt ansehen →",
        
        // Recommendations Section
        "recommendations.title": "Empfehlungen",
        "recommendations.subtitle": "Lorem ipsum dolor sit amet",
        
        // Contact Section
        "contact.title": "Kontakt aufnehmen",
        "contact.description": "Lorem ipsum dolor sit amet",
        "contact.email": "E-Mail",
        "contact.location": "Standort",
    }
};


let currentLanguage = localStorage.getItem('language') || 'de'; // ✅ LER do localStorage

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang); // ✅ SALVAR no localStorage
    document.documentElement.lang = lang;
    updateTranslations();
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    for (const element of elements) {
        const key = element.dataset.i18n;
        element.innerHTML = translations[currentLanguage][key] || key;
    }
}

// ✅ Inicializar com idioma armazenado (padrão: 'de')
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLanguage);
    
    const langSelector = document.getElementById('langSelector');
    if (langSelector) {
        langSelector.value = currentLanguage; // ✅ SINCRONIZAR select
        langSelector.addEventListener('change', (e) => setLanguage(e.target.value));
    }
});