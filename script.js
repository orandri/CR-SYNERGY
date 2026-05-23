const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const revealItems = document.querySelectorAll("[data-reveal]");
const languageToggles = document.querySelectorAll("[data-lang-toggle]");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const yearTarget = document.querySelector("[data-year]");

const translations = {
  fr: {
    meta: {
      homeTitle: "CR-SYNERGY | Externalisation à distance",
      homeDescription:
        "CR-SYNERGY accompagne les entreprises dans l'externalisation de services administratifs, opérationnels et de communication avec des talents malgaches formés.",
      aboutTitle: "À propos | CR-SYNERGY",
      aboutDescription:
        "Découvrez CR-SYNERGY, la passerelle entre les entreprises internationales et les talents malgaches formés pour l'externalisation à distance.",
    },
    skip: "Aller au contenu",
    "menu.open": "Ouvrir le menu",
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.process": "Fonctionnement",
    "nav.contact": "Contact",
    "nav.cta": "Échanger",
    "cta.exchange": "Demander un échange",
    "cta.discover": "Découvrir",
    "home.hero.pre": "Externalisation à distance pour entreprises",
    "home.hero.title": "Déléguez mieux.<br />Avancez plus vite.",
    "home.hero.text":
      "CR-SYNERGY connecte les entreprises à des talents malgaches formés pour prendre en charge des missions administratives, opérationnelles et de communication.",
    "home.device.status": "missions cadrées",
    "home.device.records": "Dossiers",
    "home.device.ops": "Opérations",
    "home.device.tracking": "Suivi",
    "home.device.materials": "Supports",
    "home.statement.text": "Une passerelle simple entre vos besoins et des talents accompagnés.",
    "home.statement.title": "Administratif. Opérations. Communication. Support métier.",
    "home.services.title": "Des missions claires. Un cadre simple.",
    "home.services.admin.title": "Support RH & administratif",
    "home.services.admin.text": "Dossiers, documents, suivi administratif et coordination des informations.",
    "home.services.ops.title": "Support opérationnel",
    "home.services.ops.text": "Reporting, plannings, suivi de tâches et assistance back-office.",
    "home.services.com.title": "Communication & contenus",
    "home.services.com.text": "Newsletters, messages internes, mise en forme et supports professionnels.",
    "home.why.pre": "Pourquoi externaliser",
    "home.why.title": "Vos équipes restent concentrées. CR-SYNERGY structure le reste.",
    "home.why.item1": "Talents formés",
    "home.why.item2": "Collaboration à distance",
    "home.why.item3": "Charge réduite",
    "home.why.item4": "Suivi clair",
    "home.why.item5": "Flexibilité",
    "home.why.item6": "Accompagnement",
    "home.about.title": "Une passerelle entre besoins métiers et talents formés.",
    "home.about.text":
      "CR-SYNERGY connecte les entreprises à des talents malgaches sélectionnés, formés et prêts à intervenir à distance.",
    "home.about.cta": "Découvrir CR-SYNERGY",
    "home.process.title": "Une collaboration cadrée dès le départ.",
    "home.process.step1": "Besoin",
    "home.process.step2": "Cadrage",
    "home.process.step3": "Talent adapté",
    "home.process.step4": "Lancement",
    "home.process.step5": "Suivi",
    "values.rigor": "Rigueur",
    "values.confidentiality": "Confidentialité",
    "values.service": "Service",
    "values.responsiveness": "Réactivité",
    "contact.title": "Un besoin ?",
    "contact.text": "Dites-nous la mission que vous souhaitez déléguer.",
    "contact.phone": "Téléphone : à compléter",
    "form.name": "Nom",
    "form.company": "Entreprise",
    "form.phone": "Téléphone",
    "form.need": "Besoin principal",
    "form.message": "Message",
    "form.option.placeholder": "Sélectionner",
    "form.option.admin": "RH & administratif",
    "form.option.ops": "Support opérationnel",
    "form.option.com": "Communication & contenus",
    "form.option.talent": "Talent / recrutement",
    "form.option.global": "Accompagnement global",
    "form.submit": "Envoyer la demande",
    "footer.home": "Externalisation à distance, talents malgaches et accompagnement opérationnel.",
    "footer.about": "Entreprises internationales. Talents malgaches. Collaboration à distance.",
    "about.hero.pre": "À propos de CR-SYNERGY",
    "about.hero.title": "Connecter les entreprises aux talents malgaches.",
    "about.hero.text":
      "CR-SYNERGY simplifie l'externalisation en sélectionnant, formant et accompagnant des free-lances malgaches prêts à collaborer avec des entreprises internationales.",
    "about.bridge.businesses": "Entreprises",
    "about.mission.pre": "Notre mission",
    "about.mission.title": "Rendre le travail à distance plus simple, plus fiable, plus utile.",
    "about.mission.text":
      "CR-SYNERGY agit comme une passerelle. D'un côté, des entreprises qui souhaitent gagner du temps, déléguer des missions et rester concentrées sur leur cœur de métier. De l'autre, des talents malgaches motivés, accompagnés dans leur montée en compétences et ouverts aux opportunités internationales.",
    "about.audience.business.pre": "Pour les entreprises",
    "about.audience.business.title": "Déléguer sans complexifier.",
    "about.audience.business.text":
      "CR-SYNERGY identifie les besoins, prépare les profils et facilite la collaboration à distance pour des missions administratives, opérationnelles ou de communication.",
    "about.audience.talent.pre": "Pour les talents",
    "about.audience.talent.title": "Accéder au marché international.",
    "about.audience.talent.text":
      "Les free-lances malgaches bénéficient d'opportunités concrètes, d'un accompagnement et d'une formation adaptée aux attentes des entreprises.",
    "about.principles.pre": "Pourquoi CR-SYNERGY",
    "about.principles.title": "Une approche structurée.",
    "about.principles.item1.title": "Sélectionner",
    "about.principles.item1.text": "Identifier les profils adaptés aux besoins des entreprises.",
    "about.principles.item2.title": "Former",
    "about.principles.item2.text": "Préparer les talents aux standards et aux outils attendus.",
    "about.principles.item3.title": "Accompagner",
    "about.principles.item3.text": "Suivre la collaboration pour garder un cadre clair.",
    "about.cta.pre": "Travailler autrement",
    "about.cta.title": "Une externalisation plus humaine, plus fluide.",
    formNote: "Votre client email va s'ouvrir pour finaliser l'envoi.",
    formSubject: "Demande d'échange CR-SYNERGY",
    mailName: "Nom",
    mailOrganization: "Entreprise / établissement",
    mailPhone: "Téléphone",
    mailNeed: "Besoin principal",
    toggleLabel: "Langue active : français. Passer en anglais.",
  },
  en: {
    meta: {
      homeTitle: "CR-SYNERGY | Remote Outsourcing",
      homeDescription:
        "CR-SYNERGY helps companies outsource administrative, operational and communication services with trained Malagasy talent.",
      aboutTitle: "About | CR-SYNERGY",
      aboutDescription:
        "Discover CR-SYNERGY, the bridge between international companies and trained Malagasy talent for remote outsourcing.",
    },
    skip: "Skip to content",
    "menu.open": "Open menu",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.process": "How it works",
    "nav.contact": "Contact",
    "nav.cta": "Let's talk",
    "cta.exchange": "Request a call",
    "cta.discover": "Discover",
    "home.hero.pre": "Remote outsourcing for companies",
    "home.hero.title": "Delegate better.<br />Move faster.",
    "home.hero.text":
      "CR-SYNERGY connects companies with trained Malagasy talent to handle administrative, operational and communication tasks.",
    "home.device.status": "scoped tasks",
    "home.device.records": "Records",
    "home.device.ops": "Operations",
    "home.device.tracking": "Tracking",
    "home.device.materials": "Materials",
    "home.statement.text": "A simple bridge between your business needs and supported talent.",
    "home.statement.title": "Administration. Operations. Communication. Business support.",
    "home.services.title": "Clear tasks. A simple framework.",
    "home.services.admin.title": "HR & administrative support",
    "home.services.admin.text": "Files, documents, administrative follow-up and information coordination.",
    "home.services.ops.title": "Operational support",
    "home.services.ops.text": "Reporting, schedules, task tracking and back-office assistance.",
    "home.services.com.title": "Communication & content",
    "home.services.com.text": "Newsletters, internal messages, formatting and professional materials.",
    "home.why.pre": "Why outsource",
    "home.why.title": "Your teams stay focused. CR-SYNERGY structures the rest.",
    "home.why.item1": "Trained talent",
    "home.why.item2": "Remote collaboration",
    "home.why.item3": "Reduced workload",
    "home.why.item4": "Clear follow-up",
    "home.why.item5": "Flexibility",
    "home.why.item6": "Support",
    "home.about.title": "A bridge between business needs and trained talent.",
    "home.about.text":
      "CR-SYNERGY connects companies with selected, trained Malagasy talent ready to work remotely.",
    "home.about.cta": "Discover CR-SYNERGY",
    "home.process.title": "A structured collaboration from day one.",
    "home.process.step1": "Need",
    "home.process.step2": "Scoping",
    "home.process.step3": "Matched talent",
    "home.process.step4": "Launch",
    "home.process.step5": "Follow-up",
    "values.rigor": "Rigor",
    "values.confidentiality": "Confidentiality",
    "values.service": "Service",
    "values.responsiveness": "Responsiveness",
    "contact.title": "A need?",
    "contact.text": "Tell us which mission you want to delegate.",
    "contact.phone": "Phone: to be completed",
    "form.name": "Name",
    "form.company": "Company",
    "form.phone": "Phone",
    "form.need": "Main need",
    "form.message": "Message",
    "form.option.placeholder": "Select",
    "form.option.admin": "HR & administration",
    "form.option.ops": "Operational support",
    "form.option.com": "Communication & content",
    "form.option.talent": "Talent / recruitment",
    "form.option.global": "Full support",
    "form.submit": "Send request",
    "footer.home": "Remote outsourcing, Malagasy talent and operational support.",
    "footer.about": "International companies. Malagasy talent. Remote collaboration.",
    "about.hero.pre": "About CR-SYNERGY",
    "about.hero.title": "Connecting companies with Malagasy talent.",
    "about.hero.text":
      "CR-SYNERGY simplifies outsourcing by selecting, training and supporting Malagasy freelancers ready to work with international companies.",
    "about.bridge.businesses": "Companies",
    "about.mission.pre": "Our mission",
    "about.mission.title": "Make remote work simpler, more reliable and more useful.",
    "about.mission.text":
      "CR-SYNERGY acts as a bridge. On one side, companies that want to save time, delegate tasks and stay focused on their core business. On the other, motivated Malagasy talent supported in building skills and accessing international opportunities.",
    "about.audience.business.pre": "For companies",
    "about.audience.business.title": "Delegate without adding complexity.",
    "about.audience.business.text":
      "CR-SYNERGY identifies needs, prepares profiles and facilitates remote collaboration for administrative, operational or communication tasks.",
    "about.audience.talent.pre": "For talent",
    "about.audience.talent.title": "Access the international market.",
    "about.audience.talent.text":
      "Malagasy freelancers gain concrete opportunities, support and training adapted to companies' expectations.",
    "about.principles.pre": "Why CR-SYNERGY",
    "about.principles.title": "A structured approach.",
    "about.principles.item1.title": "Select",
    "about.principles.item1.text": "Identify profiles suited to companies' needs.",
    "about.principles.item2.title": "Train",
    "about.principles.item2.text": "Prepare talent for expected standards and tools.",
    "about.principles.item3.title": "Support",
    "about.principles.item3.text": "Follow the collaboration to keep a clear framework.",
    "about.cta.pre": "Work differently",
    "about.cta.title": "More human, more fluid outsourcing.",
    formNote: "Your email client will open to complete the request.",
    formSubject: "CR-SYNERGY inquiry",
    mailName: "Name",
    mailOrganization: "Company / organization",
    mailPhone: "Phone",
    mailNeed: "Main need",
    toggleLabel: "Current language: English. Switch to French.",
  },
};

function getStoredLanguage() {
  try {
    return localStorage.getItem("crSynergyLanguage") === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem("crSynergyLanguage", language);
  } catch {
    // localStorage may be unavailable in some privacy contexts.
  }
}

let currentLanguage = getStoredLanguage();

function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "fr";
  const copy = translations[currentLanguage];
  const page = document.body.dataset.page === "about" ? "about" : "home";
  const description = document.querySelector('meta[name="description"]');

  document.documentElement.lang = currentLanguage;
  document.documentElement.dataset.lang = currentLanguage;
  document.title = page === "about" ? copy.meta.aboutTitle : copy.meta.homeTitle;

  if (description) {
    description.setAttribute("content", page === "about" ? copy.meta.aboutDescription : copy.meta.homeDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (typeof value === "string") element.innerHTML = value;
  });

  languageToggles.forEach((toggle) => {
    toggle.setAttribute("aria-checked", String(currentLanguage === "fr"));
    toggle.setAttribute("aria-label", copy.toggleLabel);
  });

  if (formNote?.textContent.trim()) {
    formNote.textContent = copy.formNote;
  }

  storeLanguage(currentLanguage);
}

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
}

function setScrollMotion() {
  const progress = Math.min(window.scrollY / 700, 1);
  document.documentElement.style.setProperty("--scroll", progress.toFixed(3));
}

function closeMenu() {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

function toggleMenu() {
  if (!menuToggle || !mobileMenu) return;
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
}

function setupReveal() {
  revealItems.forEach((item) => {
    item.style.setProperty("--delay", `${item.dataset.delay || 0}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupForm() {
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const data = new FormData(contactForm);
    const copy = translations[currentLanguage];
    const organization = data.get("organization") || "";
    const subject = encodeURIComponent(`${copy.formSubject} - ${organization}`);
    const body = encodeURIComponent(
      [
        `${copy.mailName} : ${data.get("name") || ""}`,
        `${copy.mailOrganization} : ${organization}`,
        `Email : ${data.get("email") || ""}`,
        `${copy.mailPhone} : ${data.get("phone") || ""}`,
        `${copy.mailNeed} : ${data.get("need") || ""}`,
        "",
        data.get("message") || "",
      ].join("\n")
    );

    // Point d'intégration futur : EmailJS, Formspree ou endpoint backend.
    window.location.href = `mailto:contact@cr-synergy.com?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.textContent = copy.formNote;
    }
  });
}

window.addEventListener(
  "scroll",
  () => {
    setHeaderState();
    setScrollMotion();
  },
  { passive: true }
);

menuToggle?.addEventListener("click", toggleMenu);
languageToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "fr" ? "en" : "fr");
  });
});
mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

applyLanguage(currentLanguage);
setHeaderState();
setScrollMotion();
setupReveal();
setupForm();
