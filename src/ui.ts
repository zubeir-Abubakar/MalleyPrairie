import type { Language } from "./i18n";

export interface UiCopy {
  languageLabel: string;
  menuLabel: string;
  close: string;
  officiality: string;
  independent: string;
  navCentre: string;
  navCare: string;
  navPractical: string;
  overview: string;
  pedagogy: string;
  team: string;
  activities: string;
  fees: string;
  practical: string;
  documents: string;
  faq: string;
  contact: string;
  contactCta: string;
  explore: string;
  more: string;
  backHome: string;
  breadcrumbHome: string;
  admissionButton: string;
  places: string;
  address: string;
  phone: string;
  email: string;
  groups: string;
  relatedDocuments: string;
  documentPdf: string;
  documentPage: string;
  otherCentres: string;
  internalOnly: string;
  safeBoundary: string;
  quickFacts: string;
  applicationHeading: string;
  whatToKnow: string;
  readMore: string;
  practicalIntro: string;
  hoursTitle: string;
  mapButton: string;
  contactFormTitle: string;
  contactFormSubtitle: string;
  successEyebrow: string;
  successTitle: string;
  successMessage: string;
  formNotice: string;
  formIntro: string;
  fullName: string;
  emailAddress: string;
  subject: string;
  message: string;
  send: string;
  sending: string;
  success: string;
  error: string;
  required: string;
  nameRequired: string;
  emailRequired: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  teamPage: string;
  activitiesPage: string;
  pedagogyPage: string;
  contactPage: string;
  admissionTitle: string;
  centersTitle: string;
  homeIntro: string;
  previewTitle: string;
  officialContact: string;
  assetNote: string;
  footerTitle: string;
  footerIndependent: string;
  logoSource: string;
}

export const uiCopy: Record<Language, UiCopy> = {
  fr: {
    languageLabel: "Langue",
    menuLabel: "Menu principal",
    close: "Fermer",
    officiality: "Concept indépendant · non officiel",
    independent: "Prototype indépendant",
    navCentre: "Le centre",
    navCare: "Nos lieux d’accueil",
    navPractical: "Préparer votre venue",
    overview: "Découvrir le CVE",
    pedagogy: "Pédagogie",
    team: "Équipe",
    activities: "Activités",
    fees: "Tarifs",
    practical: "Infos pratiques",
    documents: "Documents",
    faq: "Questions fréquentes",
    contact: "Contact",
    contactCta: "Nous écrire",
    explore: "Découvrir",
    more: "En savoir plus",
    backHome: "Retour à l’accueil",
    breadcrumbHome: "Accueil",
    admissionButton: "Voir les inscriptions",
    places: "Places",
    address: "Adresse",
    phone: "Téléphone",
    email: "E-mail",
    groups: "Groupes d’accueil",
    relatedDocuments: "Documents utiles",
    documentPdf: "PDF · document officiel",
    documentPage: "Page de ressource officielle",
    otherCentres: "Explorer les autres lieux",
    internalOnly: "Accueil interne uniquement",
    safeBoundary:
      "Ces places sont exclusivement réservées aux familles hébergées au Centre d’accueil MalleyPrairie, sur orientation des intervenant·es sociaux·ales.",
    quickFacts: "Repères",
    applicationHeading: "Comment inscrire votre enfant ?",
    whatToKnow: "À savoir avant l’inscription",
    readMore: "Lire la suite",
    practicalIntro: "Des informations claires pour préparer chaque journée.",
    hoursTitle: "Horaires d’accueil",
    mapButton: "Ouvrir dans Google Maps",
    contactFormTitle: "Commençons la conversation",
    contactFormSubtitle: "Remplissez les informations ci-dessous ; cela prend moins de 2 minutes.",
    successEyebrow: "Message envoyé",
    successTitle: "Merci de nous avoir écrit.",
    successMessage:
      "Votre message a bien été envoyé au créateur de ce prototype par Formspree. Le CVE MalleyPrairie ne l’a pas reçu.",
    formNotice:
      "Les messages envoyés ici sont transmis au créateur de ce prototype via Formspree, et non au CVE MalleyPrairie. Ce site est une démonstration indépendante.",
    formIntro:
      "Pour une demande officielle concernant une place, utilisez les coordonnées publiées par le CVE. Ce formulaire de démonstration n’est pas relié à l’institution.",
    fullName: "Nom complet",
    emailAddress: "Adresse e-mail",
    subject: "Objet",
    message: "Message",
    send: "Envoyer le message",
    sending: "Envoi en cours…",
    success:
      "Votre message a bien été envoyé au créateur de ce prototype par Formspree. Le CVE MalleyPrairie ne l’a pas reçu.",
    error:
      "L’envoi a échoué. Vos informations sont conservées dans le formulaire ; réessayez ou contactez le créateur du prototype.",
    required: "Champs obligatoires",
    nameRequired: "Saisissez votre nom complet.",
    emailRequired: "Saisissez une adresse e-mail valide.",
    subjectPlaceholder: "Le sujet de votre message",
    messagePlaceholder: "Écrivez votre message ici",
    teamPage: "Les personnes qui accompagnent les enfants",
    activitiesPage: "Grandir par le jeu, le mouvement et la découverte",
    pedagogyPage: "Une approche éducative attentive à chaque enfant",
    contactPage: "Nous trouver et nous contacter",
    admissionTitle: "Une inscription centralisée, en trois étapes.",
    centersTitle: "Quatre lieux, des besoins différents.",
    homeIntro:
      "Un accueil de jour bienveillant, pensé autour du bien-être, de l’autonomie et des découvertes des enfants.",
    previewTitle: "Un lieu pour chaque étape.",
    officialContact: "Coordonnées publiées par le CVE",
    assetNote: "Le logo officiel reste à fournir par l’institution.",
    footerTitle: "Grandir, découvrir et s’épanouir ensemble.",
    footerIndependent:
      "Prototype indépendant à présenter à l’institution · non exploité par le CVE.",
    logoSource: "Le logo officiel pourra être fourni par l’institution.",
  },
  en: {
    languageLabel: "Language",
    menuLabel: "Main menu",
    close: "Close",
    officiality: "Independent concept · unofficial",
    independent: "Independent prototype",
    navCentre: "The centre",
    navCare: "Our childcare settings",
    navPractical: "Plan your visit",
    overview: "Discover the centre",
    pedagogy: "Our approach",
    team: "Our team",
    activities: "Activities",
    fees: "Fees",
    practical: "Practical information",
    documents: "Documents",
    faq: "Frequently asked questions",
    contact: "Contact",
    contactCta: "Get in touch",
    explore: "Explore",
    more: "Learn more",
    backHome: "Back to home",
    breadcrumbHome: "Home",
    admissionButton: "Application details",
    places: "Places",
    address: "Address",
    phone: "Phone",
    email: "Email",
    groups: "Care groups",
    relatedDocuments: "Useful documents",
    documentPdf: "PDF · official document",
    documentPage: "Official resource page",
    otherCentres: "Explore the other settings",
    internalOnly: "Internal care only",
    safeBoundary:
      "Places are reserved exclusively for families staying at the MalleyPrairie shelter, following referral by the centre’s social-work professionals.",
    quickFacts: "At a glance",
    applicationHeading: "How do I apply for a place?",
    whatToKnow: "Before you apply",
    readMore: "Read more",
    practicalIntro: "Clear details to help you plan each day.",
    hoursTitle: "Opening hours",
    mapButton: "Open in Google Maps",
    contactFormTitle: "Start a conversation with us",
    contactFormSubtitle: "Fill in the details below; it takes less than 2 minutes.",
    successEyebrow: "Message sent",
    successTitle: "Thank you for reaching out.",
    successMessage:
      "Your message was sent to the creator of this prototype through Formspree. CVE MalleyPrairie has not received it.",
    formNotice:
      "Messages sent here go through Formspree to the creator of this prototype, not to CVE MalleyPrairie. This is an independent demonstration.",
    formIntro:
      "For official enquiries about a childcare place, use the contact details published by the centre. This demonstration form is not connected to the institution.",
    fullName: "Full name",
    emailAddress: "Email address",
    subject: "Subject",
    message: "Message",
    send: "Send message",
    sending: "Sending…",
    success:
      "Your message was sent to the creator of this prototype through Formspree. CVE MalleyPrairie has not received it.",
    error:
      "The message could not be sent. Your entries are still in the form; please try again or contact the prototype creator.",
    required: "Required fields",
    nameRequired: "Enter your full name.",
    emailRequired: "Enter a valid email address.",
    subjectPlaceholder: "What is your message about?",
    messagePlaceholder: "Write your message here",
    teamPage: "The people who care for and support children",
    activitiesPage: "Growing through play, movement and discovery",
    pedagogyPage: "An educational approach that sees every child",
    contactPage: "Find and contact the centre",
    admissionTitle: "A centralised application, in three steps.",
    centersTitle: "Four settings for different needs.",
    homeIntro:
      "Caring day care shaped around children’s wellbeing, independence and discoveries.",
    previewTitle: "Care for every stage.",
    officialContact: "Contact details published by the centre",
    assetNote: "The institution’s official logo has not been provided.",
    footerTitle: "Room to grow, discover and thrive together.",
    footerIndependent:
      "Independent concept for institutional review · not operated by the centre.",
    logoSource: "The institution can provide its official logo.",
  },
  de: {
    languageLabel: "Sprache",
    menuLabel: "Hauptmenü",
    close: "Schliessen",
    officiality: "Unabhängiges Konzept · nicht offiziell",
    independent: "Unabhängiger Prototyp",
    navCentre: "Das Zentrum",
    navCare: "Unsere Betreuungsorte",
    navPractical: "Gut vorbereitet",
    overview: "Das Zentrum entdecken",
    pedagogy: "Pädagogik",
    team: "Team",
    activities: "Aktivitäten",
    fees: "Tarife",
    practical: "Praktische Infos",
    documents: "Dokumente",
    faq: "Häufige Fragen",
    contact: "Kontakt",
    contactCta: "Kontakt aufnehmen",
    explore: "Entdecken",
    more: "Mehr erfahren",
    backHome: "Zur Startseite",
    breadcrumbHome: "Startseite",
    admissionButton: "Anmeldung ansehen",
    places: "Plätze",
    address: "Adresse",
    phone: "Telefon",
    email: "E-Mail",
    groups: "Betreuungsgruppen",
    relatedDocuments: "Nützliche Dokumente",
    documentPdf: "PDF · offizielles Dokument",
    documentPage: "Offizielle Informationsseite",
    otherCentres: "Weitere Betreuungsorte",
    internalOnly: "Nur interne Betreuung",
    safeBoundary:
      "Die Plätze sind ausschliesslich Familien vorbehalten, die im MalleyPrairie-Schutzzentrum untergebracht sind und von den dortigen Sozialarbeitenden vermittelt werden.",
    quickFacts: "Auf einen Blick",
    applicationHeading: "Wie melde ich mein Kind an?",
    whatToKnow: "Gut zu wissen",
    readMore: "Mehr erfahren",
    practicalIntro: "Klare Informationen für die Planung des Alltags.",
    hoursTitle: "Betreuungszeiten",
    mapButton: "In Google Maps öffnen",
    contactFormTitle: "Lassen Sie uns ins Gespräch kommen",
    contactFormSubtitle: "Füllen Sie die folgenden Angaben aus; es dauert weniger als 2 Minuten.",
    successEyebrow: "Nachricht gesendet",
    successTitle: "Vielen Dank für Ihre Nachricht.",
    successMessage:
      "Ihre Nachricht wurde über Formspree an den Ersteller dieses Prototyps gesendet. Das CVE MalleyPrairie hat sie nicht erhalten.",
    formNotice:
      "Nachrichten werden über Formspree an den Ersteller dieses Prototyps gesendet, nicht an das CVE MalleyPrairie. Dies ist eine unabhängige Demonstration.",
    formIntro:
      "Für offizielle Anfragen zu einem Betreuungsplatz nutzen Sie bitte die vom Zentrum veröffentlichten Kontaktdaten. Dieses Formular ist nicht mit der Institution verbunden.",
    fullName: "Vollständiger Name",
    emailAddress: "E-Mail-Adresse",
    subject: "Betreff",
    message: "Nachricht",
    send: "Nachricht senden",
    sending: "Wird gesendet…",
    success:
      "Ihre Nachricht wurde über Formspree an den Ersteller dieses Prototyps gesendet. Das CVE MalleyPrairie hat sie nicht erhalten.",
    error:
      "Die Nachricht konnte nicht gesendet werden. Ihre Eingaben bleiben erhalten; versuchen Sie es erneut oder kontaktieren Sie den Prototyp-Ersteller.",
    required: "Pflichtfelder",
    nameRequired: "Geben Sie Ihren vollständigen Namen ein.",
    emailRequired: "Geben Sie eine gültige E-Mail-Adresse ein.",
    subjectPlaceholder: "Worum geht es?",
    messagePlaceholder: "Schreiben Sie Ihre Nachricht hier",
    teamPage: "Die Menschen, die Kinder betreuen und begleiten",
    activitiesPage: "Wachsen durch Spiel, Bewegung und Entdeckungen",
    pedagogyPage: "Eine pädagogische Haltung, die jedes Kind wahrnimmt",
    contactPage: "Das Zentrum finden und kontaktieren",
    admissionTitle: "Die zentrale Anmeldung in drei Schritten.",
    centersTitle: "Vier Orte für unterschiedliche Bedürfnisse.",
    homeIntro:
      "Eine liebevolle Tagesbetreuung, die Wohlbefinden, Selbstständigkeit und Entdeckungen unterstützt.",
    previewTitle: "Für jede Entwicklungsstufe der passende Ort.",
    officialContact: "Vom Zentrum veröffentlichte Kontaktdaten",
    assetNote: "Das offizielle Logo wurde von der Einrichtung noch nicht bereitgestellt.",
    footerTitle: "Gemeinsam wachsen, entdecken und sich entfalten.",
    footerIndependent:
      "Unabhängiges Konzept zur Prüfung durch die Institution · nicht vom Zentrum betrieben.",
    logoSource: "Das Zentrum kann sein offizielles Logo bereitstellen.",
  },
  it: {
    languageLabel: "Lingua",
    menuLabel: "Menu principale",
    close: "Chiudi",
    officiality: "Concept indipendente · non ufficiale",
    independent: "Prototipo indipendente",
    navCentre: "Il centro",
    navCare: "I nostri servizi",
    navPractical: "Prepararsi",
    overview: "Scopri il centro",
    pedagogy: "Pedagogia",
    team: "Équipe",
    activities: "Attività",
    fees: "Tariffe",
    practical: "Info pratiche",
    documents: "Documenti",
    faq: "Domande frequenti",
    contact: "Contatti",
    contactCta: "Scrivici",
    explore: "Scopri",
    more: "Per saperne di più",
    backHome: "Torna alla home",
    breadcrumbHome: "Home",
    admissionButton: "Info d’iscrizione",
    places: "Posti",
    address: "Indirizzo",
    phone: "Telefono",
    email: "E-mail",
    groups: "Gruppi di accoglienza",
    relatedDocuments: "Documenti utili",
    documentPdf: "PDF · documento ufficiale",
    documentPage: "Pagina di risorsa ufficiale",
    otherCentres: "Scopri gli altri servizi",
    internalOnly: "Accoglienza interna soltanto",
    safeBoundary:
      "I posti sono riservati esclusivamente alle famiglie ospitate al Centro MalleyPrairie, su segnalazione degli operatori sociali.",
    quickFacts: "In breve",
    applicationHeading: "Come iscrivere il tuo bambino?",
    whatToKnow: "Da sapere prima dell’iscrizione",
    readMore: "Per saperne di più",
    practicalIntro: "Informazioni chiare per organizzare ogni giornata.",
    hoursTitle: "Orari di accoglienza",
    mapButton: "Apri in Google Maps",
    contactFormTitle: "Iniziamo una conversazione",
    contactFormSubtitle: "Compila i campi qui sotto; ci vogliono meno di 2 minuti.",
    successEyebrow: "Messaggio inviato",
    successTitle: "Grazie per averci scritto.",
    successMessage:
      "Il messaggio è stato inviato al creatore del prototipo tramite Formspree. Il CVE MalleyPrairie non l’ha ricevuto.",
    formNotice:
      "I messaggi inviati qui passano tramite Formspree al creatore di questo prototipo, non al CVE MalleyPrairie. È una dimostrazione indipendente.",
    formIntro:
      "Per richieste ufficiali sui posti, usa i recapiti pubblicati dal centro. Questo modulo dimostrativo non è collegato all’istituzione.",
    fullName: "Nome e cognome",
    emailAddress: "Indirizzo e-mail",
    subject: "Oggetto",
    message: "Messaggio",
    send: "Invia il messaggio",
    sending: "Invio in corso…",
    success:
      "Il messaggio è stato inviato al creatore del prototipo tramite Formspree. Il CVE MalleyPrairie non l’ha ricevuto.",
    error:
      "Non è stato possibile inviare il messaggio. I dati inseriti sono ancora nel modulo; riprova o contatta il creatore del prototipo.",
    required: "Campi obbligatori",
    nameRequired: "Inserisci nome e cognome.",
    emailRequired: "Inserisci un indirizzo e-mail valido.",
    subjectPlaceholder: "L’oggetto del messaggio",
    messagePlaceholder: "Scrivi qui il tuo messaggio",
    teamPage: "Le persone che si prendono cura dei bambini",
    activitiesPage: "Crescere attraverso gioco, movimento e scoperta",
    pedagogyPage: "Un approccio educativo attento a ogni bambino",
    contactPage: "Come trovare e contattare il centro",
    admissionTitle: "Un’iscrizione centralizzata in tre passaggi.",
    centersTitle: "Quattro servizi per esigenze diverse.",
    homeIntro:
      "Un’accoglienza diurna attenta al benessere, all’autonomia e alle scoperte dei bambini.",
    previewTitle: "Un luogo per ogni fase della crescita.",
    officialContact: "Recapiti pubblicati dal centro",
    assetNote: "Il logo ufficiale non è ancora stato fornito dall’istituzione.",
    footerTitle: "Crescere, scoprire e fiorire insieme.",
    footerIndependent:
      "Concept indipendente da presentare all’istituzione · non gestito dal centro.",
    logoSource: "L’istituzione potrà fornire il proprio logo ufficiale.",
  },
};

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];
