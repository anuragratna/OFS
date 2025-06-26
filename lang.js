const translations = {
  en: {
    logo: "OFS",
    menu_home: "Home",
    menu_about: "About Us",
    menu_approach: "Our Approach",
    menu_solutions: "Solutions",
    menu_impact: "Impact",
    menu_resources: "Resources",
    menu_contact: "Contact",
    hero_title: "Building a Sustainable Future with ESG",
    hero_sub: "Empowering businesses to create positive environmental and social impact.",
    hero_cta: "Learn More",
    esg_title: "Our ESG Approach",
    pillar_env: "Environmental",
    pillar_env_desc: "Promoting eco-friendly practices and reducing carbon footprint.",
    pillar_soc: "Social",
    pillar_soc_desc: "Fostering diversity, equity, and positive community impact.",
    pillar_gov: "Governance",
    pillar_gov_desc: "Ensuring transparency, ethics, and responsible leadership.",
    services_title: "Our Solutions",
    service_reporting: "ESG Reporting",
    service_reporting_desc: "Comprehensive ESG data collection, analysis, and reporting.",
    service_consulting: "Consulting",
    service_consulting_desc: "Expert guidance to integrate ESG into your business strategy.",
    service_impact: "Impact Assessment",
    service_impact_desc: "Measuring and maximizing your positive impact on society and the environment.",
    impact_title: "Our Impact",
    impact_projects: "Projects Delivered",
    impact_carbon: "Average Carbon Reduction",
    impact_satisfaction: "Client Satisfaction",
    contact_title: "Contact Us",
    contact_phone_label: "Phone:",
    contact_email_label: "Email:",
    contact_name: "Your Name",
    contact_message: "Your Message",
    contact_send: "Send Message",
    footer_copyright: "© 2024 OFS. All rights reserved."
  },
  nl: {
    logo: "OFS",
    menu_home: "Home",
    menu_about: "Over Ons",
    menu_approach: "Onze Aanpak",
    menu_solutions: "Oplossingen",
    menu_impact: "Impact",
    menu_resources: "Bronnen",
    menu_contact: "Contact",
    hero_title: "Bouwen aan een Duurzame Toekomst met ESG",
    hero_sub: "Bedrijven versterken om positieve milieu- en sociale impact te creëren.",
    hero_cta: "Meer Informatie",
    esg_title: "Onze ESG-aanpak",
    pillar_env: "Milieu",
    pillar_env_desc: "Stimuleren van milieuvriendelijke praktijken en het verkleinen van de ecologische voetafdruk.",
    pillar_soc: "Sociaal",
    pillar_soc_desc: "Bevorderen van diversiteit, gelijkheid en positieve impact op de gemeenschap.",
    pillar_gov: "Bestuur",
    pillar_gov_desc: "Zorg voor transparantie, ethiek en verantwoord leiderschap.",
    services_title: "Onze Oplossingen",
    service_reporting: "ESG-rapportage",
    service_reporting_desc: "Uitgebreide ESG-gegevensverzameling, analyse en rapportage.",
    service_consulting: "Advies",
    service_consulting_desc: "Deskundig advies om ESG in uw bedrijfsstrategie te integreren.",
    service_impact: "Impactanalyse",
    service_impact_desc: "Het meten en maximaliseren van uw positieve impact op samenleving en milieu.",
    impact_title: "Onze Impact",
    impact_projects: "Projecten Afgerond",
    impact_carbon: "Gemiddelde CO₂-reductie",
    impact_satisfaction: "Klanttevredenheid",
    contact_title: "Neem Contact Op",
    contact_phone_label: "Telefoon:",
    contact_email_label: "E-mail:",
    contact_name: "Uw Naam",
    contact_message: "Uw Bericht",
    contact_send: "Verstuur Bericht",
    footer_copyright: "© 2024 OFS. Alle rechten voorbehouden."
  }
};

// Success bar localization
const successMessages = {
  en: "Form submitted successfully!",
  nl: "Formulier succesvol verzonden!"
};

const form = document.querySelector('.contact-form');
const successBar = document.getElementById('success-bar');
let currentLang = 'en';

function showSuccessBar() {
  successBar.textContent = successMessages[currentLang];
  successBar.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    successBar.style.display = 'none';
  }, 5000);
}

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        showSuccessBar();
      } else {
        alert('There was a problem submitting the form.');
      }
    })
    .catch(() => {
      alert('There was a problem submitting the form.');
    });
  });
}

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('lang-' + lang).classList.add('active');
  // Update success bar message if visible
  currentLang = lang;
  if (successBar && successBar.style.display === 'block') {
    successBar.textContent = successMessages[lang];
  }
}

document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-nl').addEventListener('click', () => setLanguage('nl'));

// Set default language
setLanguage('en'); 