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
      homeTitle: "CR-SYNERGY | BPO hôtelier à distance",
      homeDescription:
        "CR-SYNERGY accompagne les hôtels dans l'externalisation de missions administratives, opérationnelles et de communication avec des talents malgaches formés.",
      aboutTitle: "À propos | CR-SYNERGY",
      aboutDescription:
        "Découvrez CR-SYNERGY, votre agence de BPO hôtelier à distance avec des talents malgaches formés.",
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
    "home.hero.pre": "Votre agence de BPO hôtelier",
    "home.hero.title": "Libérez-vous de l'administratif<br />Vivez votre terrain",
    "home.hero.text":
      "CR-SYNERGY accompagne les hôtels avec des talents malgaches formés pour gérer à distance l'administratif, les opérations et la communication.",
    "home.pc.window": "Compétences CR-SYNERGY",
    "home.pc.title": "Toutes les compétences proposées",
    "home.pc.admin.title": "Administratif hôtelier",
    "home.pc.admin.skill1": "Gestion des réservations",
    "home.pc.admin.skill2": "Dossiers clients",
    "home.pc.admin.skill3": "Documents & suivi administratif",
    "home.pc.admin.skill4": "Coordination des informations",
    "home.pc.ops.title": "Opérations",
    "home.pc.ops.skill1": "Reporting",
    "home.pc.ops.skill2": "Plannings",
    "home.pc.ops.skill3": "Suivi des tâches",
    "home.pc.ops.skill4": "Back-office quotidien",
    "home.pc.guest.title": "Relation client & contenus",
    "home.pc.guest.skill1": "Messages clients",
    "home.pc.guest.skill2": "Newsletters",
    "home.pc.guest.skill3": "Contenus professionnels",
    "home.pc.guest.skill4": "Supports de communication",
    "home.statement.text": "Une passerelle simple entre vos besoins hôteliers et des talents accompagnés.",
    "home.statement.title": "Administratif hôtelier. Opérations. Communication. Support métier.",
    "home.services.title": "Des missions hôtelières claires. Un cadre simple.",
    "home.services.admin.title": "Support administratif hôtelier",
    "home.services.admin.text": "Réservations, dossiers clients, documents et coordination des informations.",
    "home.services.ops.title": "Support opérationnel hôtelier",
    "home.services.ops.text": "Reporting, plannings, suivi de tâches, back-office et coordination quotidienne.",
    "home.services.com.title": "Communication & relation client",
    "home.services.com.text": "Messages clients, newsletters, contenus et supports professionnels.",
    "home.why.pre": "Pourquoi externaliser votre back-office hôtelier",
    "home.why.title": "Vos équipes restent sur le terrain. CR-SYNERGY structure le reste.",
    "home.why.item1": "Talents formés aux besoins hôteliers",
    "home.why.item2": "Collaboration à distance",
    "home.why.item3": "Charge administrative réduite",
    "home.why.item4": "Suivi clair",
    "home.why.item5": "Flexibilité saisonnière",
    "home.why.item6": "Accompagnement",
    "home.about.title": "Une passerelle entre hôtels et talents formés.",
    "home.about.text":
      "CR-SYNERGY accompagne les hôtels avec des talents malgaches sélectionnés, formés et prêts à intervenir à distance.",
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
    "contact.title": "Un besoin hôtelier ?",
    "contact.text": "Dites-nous la mission hôtelière que vous souhaitez déléguer.",
    "contact.phone": "Téléphone : à compléter",
    "form.name": "Nom",
    "form.company": "Hôtel / établissement",
    "form.phone": "Téléphone",
    "form.need": "Besoin principal",
    "form.message": "Message",
    "form.option.placeholder": "Sélectionner",
    "form.option.admin": "Administratif hôtelier",
    "form.option.ops": "Support opérationnel hôtelier",
    "form.option.com": "Communication & relation client",
    "form.option.talent": "Renfort back-office",
    "form.option.global": "Accompagnement global",
    "form.submit": "Envoyer la demande",
    "footer.home": "BPO hôtelier à distance, talents malgaches et accompagnement opérationnel.",
    "footer.about": "Hôtels. Talents malgaches. Collaboration à distance.",
    "about.hero.pre": "À propos de CR-SYNERGY",
    "about.hero.title": "Connecter les hôtels aux talents malgaches.",
    "about.hero.text":
      "CR-SYNERGY simplifie le BPO hôtelier en sélectionnant, formant et accompagnant des free-lances malgaches prêts à collaborer avec des hôtels.",
    "about.bridge.businesses": "Hôtels",
    "about.mission.pre": "Notre mission",
    "about.mission.title": "Rendre le support hôtelier à distance plus simple, plus fiable, plus utile.",
    "about.mission.text":
      "CR-SYNERGY agit comme une passerelle. D'un côté, des hôtels qui souhaitent gagner du temps, déléguer leur back-office et rester concentrés sur l'accueil client. De l'autre, des talents malgaches motivés, accompagnés dans leur montée en compétences et formés aux attentes hôtelières.",
    "about.audience.business.pre": "Pour les hôtels",
    "about.audience.business.title": "Déléguer sans complexifier votre organisation.",
    "about.audience.business.text":
      "CR-SYNERGY identifie vos besoins hôteliers, prépare les profils et facilite la collaboration à distance pour des missions administratives, opérationnelles ou de relation client.",
    "about.audience.talent.pre": "Pour les talents",
    "about.audience.talent.title": "Accéder au marché international.",
    "about.audience.talent.text":
      "Les free-lances malgaches bénéficient d'opportunités concrètes, d'un accompagnement et d'une formation adaptée aux attentes des hôtels.",
    "about.principles.pre": "Pourquoi CR-SYNERGY",
    "about.principles.title": "Une approche structurée.",
    "about.principles.item1.title": "Sélectionner",
    "about.principles.item1.text": "Identifier les profils adaptés aux besoins des hôtels.",
    "about.principles.item2.title": "Former",
    "about.principles.item2.text": "Préparer les talents aux standards et aux outils hôteliers attendus.",
    "about.principles.item3.title": "Accompagner",
    "about.principles.item3.text": "Suivre la collaboration pour garder un cadre clair.",
    "about.cta.pre": "BPO hôtelier",
    "about.cta.title": "Une externalisation hôtelière plus humaine, plus fluide.",
    formNote: "Votre client email va s'ouvrir pour finaliser l'envoi.",
    formSubject: "Demande d'échange CR-SYNERGY",
    mailName: "Nom",
    mailOrganization: "Hôtel / établissement",
    mailPhone: "Téléphone",
    mailNeed: "Besoin principal",
    toggleLabel: "Langue active : français. Passer en anglais.",
  },
  en: {
    meta: {
      homeTitle: "CR-SYNERGY | Remote Hotel BPO",
      homeDescription:
        "CR-SYNERGY helps hotels outsource administrative, operational and communication tasks with trained Malagasy talent.",
      aboutTitle: "About | CR-SYNERGY",
      aboutDescription:
        "Discover CR-SYNERGY, your remote hotel BPO agency with trained Malagasy talent.",
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
    "home.hero.pre": "Your hotel BPO agency",
    "home.hero.title": "Free yourself from admin<br />Stay close to the floor",
    "home.hero.text":
      "CR-SYNERGY supports hotels with trained Malagasy talent to handle administration, operations and communication remotely.",
    "home.pc.window": "CR-SYNERGY skills",
    "home.pc.title": "All proposed skills",
    "home.pc.admin.title": "Hotel administration",
    "home.pc.admin.skill1": "Reservation management",
    "home.pc.admin.skill2": "Guest files",
    "home.pc.admin.skill3": "Documents & administrative follow-up",
    "home.pc.admin.skill4": "Information coordination",
    "home.pc.ops.title": "Operations",
    "home.pc.ops.skill1": "Reporting",
    "home.pc.ops.skill2": "Schedules",
    "home.pc.ops.skill3": "Task tracking",
    "home.pc.ops.skill4": "Daily back office",
    "home.pc.guest.title": "Guest relations & content",
    "home.pc.guest.skill1": "Guest messages",
    "home.pc.guest.skill2": "Newsletters",
    "home.pc.guest.skill3": "Professional content",
    "home.pc.guest.skill4": "Communication materials",
    "home.statement.text": "A simple bridge between your hotel needs and supported talent.",
    "home.statement.title": "Hotel administration. Operations. Communication. Business support.",
    "home.services.title": "Clear hotel tasks. A simple framework.",
    "home.services.admin.title": "Hotel administrative support",
    "home.services.admin.text": "Reservations, guest files, documents and information coordination.",
    "home.services.ops.title": "Hotel operations support",
    "home.services.ops.text": "Reporting, schedules, task tracking, back office and daily coordination.",
    "home.services.com.title": "Communication & guest relations",
    "home.services.com.text": "Guest messages, newsletters, content and professional materials.",
    "home.why.pre": "Why outsource your hotel back office",
    "home.why.title": "Your teams stay close to guests. CR-SYNERGY structures the rest.",
    "home.why.item1": "Talent trained for hotel needs",
    "home.why.item2": "Remote collaboration",
    "home.why.item3": "Reduced administrative workload",
    "home.why.item4": "Clear follow-up",
    "home.why.item5": "Seasonal flexibility",
    "home.why.item6": "Support",
    "home.about.title": "A bridge between hotels and trained talent.",
    "home.about.text":
      "CR-SYNERGY supports hotels with selected, trained Malagasy talent ready to work remotely.",
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
    "contact.title": "A hotel need?",
    "contact.text": "Tell us which hotel task you want to delegate.",
    "contact.phone": "Phone: to be completed",
    "form.name": "Name",
    "form.company": "Hotel / property",
    "form.phone": "Phone",
    "form.need": "Main need",
    "form.message": "Message",
    "form.option.placeholder": "Select",
    "form.option.admin": "Hotel administration",
    "form.option.ops": "Hotel operations support",
    "form.option.com": "Communication & guest relations",
    "form.option.talent": "Back-office reinforcement",
    "form.option.global": "Full support",
    "form.submit": "Send request",
    "footer.home": "Remote hotel BPO, Malagasy talent and operational support.",
    "footer.about": "Hotels. Malagasy talent. Remote collaboration.",
    "about.hero.pre": "About CR-SYNERGY",
    "about.hero.title": "Connecting hotels with Malagasy talent.",
    "about.hero.text":
      "CR-SYNERGY simplifies hotel BPO by selecting, training and supporting Malagasy freelancers ready to work with hotels.",
    "about.bridge.businesses": "Hotels",
    "about.mission.pre": "Our mission",
    "about.mission.title": "Make remote hotel support simpler, more reliable and more useful.",
    "about.mission.text":
      "CR-SYNERGY acts as a bridge. On one side, hotels that want to save time, delegate their back office and stay focused on guest experience. On the other, motivated Malagasy talent supported in building skills and trained for hotel expectations.",
    "about.audience.business.pre": "For hotels",
    "about.audience.business.title": "Delegate without adding complexity to your organization.",
    "about.audience.business.text":
      "CR-SYNERGY identifies your hotel needs, prepares profiles and facilitates remote collaboration for administrative, operational or guest-relations tasks.",
    "about.audience.talent.pre": "For talent",
    "about.audience.talent.title": "Access the international market.",
    "about.audience.talent.text":
      "Malagasy freelancers gain concrete opportunities, support and training adapted to hotels' expectations.",
    "about.principles.pre": "Why CR-SYNERGY",
    "about.principles.title": "A structured approach.",
    "about.principles.item1.title": "Select",
    "about.principles.item1.text": "Identify profiles suited to hotels' needs.",
    "about.principles.item2.title": "Train",
    "about.principles.item2.text": "Prepare talent for expected hotel standards and tools.",
    "about.principles.item3.title": "Support",
    "about.principles.item3.text": "Follow the collaboration to keep a clear framework.",
    "about.cta.pre": "Hotel BPO",
    "about.cta.title": "More human, more fluid hotel outsourcing.",
    formNote: "Your email client will open to complete the request.",
    formSubject: "CR-SYNERGY inquiry",
    mailName: "Name",
    mailOrganization: "Hotel / property",
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
