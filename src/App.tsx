import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Baby,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  CircleCheck,
  Compass,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  UsersRound,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  getContent,
  getLanguage,
  type LocaleContent,
} from "./i18n";
import {
  centerRoutes,
  formspreeEndpoint,
  isResourceKey,
  resourceUrls,
} from "./site";
import {
  centreGalleries,
  centreHeroImages,
  galleryAlt,
  pageHeroImages,
  type CentreId,
} from "./images";
import { languages, uiCopy } from "./ui";

const centerIds = Object.values(centerRoutes);
type CenterId = CentreId;

function isCenterId(value: string | undefined): value is CenterId {
  return value !== undefined && centerIds.some((id) => id === value);
}

function getCenterId(index: number): CenterId {
  return centerIds[index] ?? "attique";
}

function usePageCopy() {
  const { i18n } = useTranslation();
  const language = getLanguage(i18n.resolvedLanguage);
  return { language, content: getContent(language), ui: uiCopy[language] };
}

function PageTitle({ eyebrow, title, description }: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="page-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="page-title__lede">{description}</p>}
    </div>
  );
}

function PageBanner({ image, eyebrow, title, description, children }: {
  image: string;
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="container page-banner"
      style={{ backgroundImage: `linear-gradient(90deg, oklch(20% 0.025 164 / 0.88), oklch(20% 0.025 164 / 0.58) 58%, oklch(20% 0.025 164 / 0.2)), url("${image}")` }}
    >
      <div className="page-banner__content">
        <PageTitle eyebrow={eyebrow} title={title} description={description} />
        {children}
      </div>
    </section>
  );
}

function LanguageMenu() {
  const { i18n } = useTranslation();
  const { language, ui } = usePageCopy();
  const [open, setOpen] = useState(false);
  const current = languages.find((item) => item.code === language) ?? languages[0]!;

  async function selectLanguage(next: (typeof languages)[number]["code"]) {
    await i18n.changeLanguage(next);
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem("malleyprairie-language", next);
    } catch (error) {
      console.warn("Could not save the language preference.", error);
    }
    setOpen(false);
  }

  return (
    <div
      className="language-picker"
      role="group"
      aria-label={ui.languageLabel}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          event.currentTarget.querySelector("button")?.focus();
        }
      }}
    >
      <button
        type="button"
        className="language-picker__trigger"
        aria-label={`${ui.languageLabel}: ${current.name}`}
        aria-expanded={open}
        aria-controls="language-options"
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">{current.flag}</span>
        <span className="language-picker__code">{current.code.toUpperCase()}</span>
        <ChevronDown size={16} aria-hidden="true" />
      </button>
      <div className="language-picker__menu" id="language-options" hidden={!open}>
        {languages.map((item) => (
          <button
            key={item.code}
            className="language-picker__option"
            type="button"
            aria-pressed={item.code === language}
            onClick={() => void selectLanguage(item.code)}
          >
            <span aria-hidden="true">{item.flag}</span>
            <span>{item.name}</span>
            {item.code === language && <Check size={16} aria-hidden="true" />}
          </button>
        ))}
      </div>
    </div>
  );
}

function Header() {
  const { content, ui } = usePageCopy();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  const groups = [
    {
      title: ui.navCentre,
      links: [
        { to: "/pedagogy", label: ui.pedagogy, note: ui.pedagogyPage, icon: <Leaf size={20} /> },
        { to: "/team", label: ui.team, note: ui.teamPage, icon: <UsersRound size={20} /> },
        { to: "/activities", label: ui.activities, note: ui.activitiesPage, icon: <Compass size={20} /> },
      ],
    },
    {
      title: ui.navCare,
      links: centerIds.map((id, index) => {
        const center = content.care.centers[index];
        return {
          to: `/care/${id}`,
          label: center?.name ?? id,
          note: center?.age ?? ui.internalOnly,
          icon: <Baby size={20} />,
        };
      }),
    },
    {
      title: ui.navPractical,
      links: [
        { to: "/fees", label: ui.fees, note: ui.practicalIntro, icon: <BookOpen size={20} /> },
        { to: "/practical", label: ui.practical, note: ui.hoursTitle, icon: <Clock3 size={20} /> },
        { to: "/documents", label: ui.documents, note: ui.relatedDocuments, icon: <BookOpen size={20} /> },
        { to: "/faq", label: ui.faq, note: ui.readMore, icon: <Compass size={20} /> },
        { to: "/jobs", label: content.jobs.label, note: content.jobs.intro, icon: <UsersRound size={20} /> },
        { to: "/contact", label: ui.contact, note: ui.contactPage, icon: <Mail size={20} /> },
      ],
    },
  ];

  useEffect(() => {
    if (!openGroup) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenGroup(null);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [openGroup]);

  function closeMenus() {
    setOpenGroup(null);
    setMobileOpen(false);
    setMobileGroup(null);
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">{content.skip}</a>
      <div className="container header-main">
        <div className="brand-language">
          <Link className="wordmark" to="/" onClick={closeMenus} aria-label="MalleyPrairie">
            <img className="wordmark__logo" src="/images/malleyprairie-logo.png" alt="" />
            <span className="wordmark__text">MalleyPrairie<small>{content.brandDescriptor}</small></span>
          </Link>
          <LanguageMenu />
        </div>
        <nav className="desktop-nav" aria-label={content.navLabel}>
          <Link to="/" className="nav-home" onClick={closeMenus}>{ui.overview}</Link>
          {groups.map((group, index) => {
            const dropdownId = `nav-dropdown-${index}`;
            const isOpen = openGroup === group.title;
            return (
              <div className="nav-group" key={group.title}>
                <button
                  className="nav-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={dropdownId}
                  onClick={() => setOpenGroup(isOpen ? null : group.title)}
                >
                  {group.title}<ChevronDown size={15} aria-hidden="true" />
                </button>
                <div className="nav-dropdown" id={dropdownId} hidden={!isOpen}>
                  {group.links.map((link) => (
                    <Link className="nav-dropdown__link" to={link.to} key={link.to} onClick={closeMenus}>
                      <span className="nav-dropdown__icon">{link.icon}</span>
                      <span><strong>{link.label}</strong><small>{link.note}</small></span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
        <div className="header-actions flex items-center">
          <Link className="button button--small" to="/contact">{ui.contactCta}<ArrowUpRight size={16} /></Link>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileOpen ? ui.close : ui.menuLabel}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <nav className="mobile-nav" id="mobile-navigation" aria-label={ui.menuLabel} hidden={!mobileOpen}>
          <Link to="/" onClick={closeMenus}>{ui.overview}<ArrowRight size={18} /></Link>
          {groups.map((group, index) => {
            const isOpen = mobileGroup === group.title;
            const dropdownId = `mobile-nav-dropdown-${index}`;
            return (
              <div className="mobile-nav__group" key={group.title}>
                <button
                  className="mobile-nav__group-button"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={dropdownId}
                  onClick={() => setMobileGroup(isOpen ? null : group.title)}
                >
                  {group.title}<ChevronDown size={17} aria-hidden="true" />
                </button>
                <div className="mobile-nav__submenu" id={dropdownId} hidden={!isOpen}>
                  {group.links.map((link) => (
                    <Link to={link.to} key={link.to} onClick={closeMenus}>{link.label}<ArrowRight size={18} /></Link>
                  ))}
                </div>
              </div>
            );
          })}
          <Link className="mobile-nav__cta" to="/contact" onClick={closeMenus}>{ui.contactCta}<ArrowUpRight size={18} /></Link>
      </nav>
    </header>
  );
}

function Footer() {
  const { content, ui } = usePageCopy();
  const columns = [
    { title: ui.navCentre, links: [{ label: ui.pedagogy, to: "/pedagogy" }, { label: ui.team, to: "/team" }, { label: ui.activities, to: "/activities" }] },
    { title: ui.navCare, links: centerIds.map((id, index) => ({ label: content.care.centers[index]?.name ?? "", to: `/care/${id}` })) },
    { title: ui.navPractical, links: [{ label: ui.fees, to: "/fees" }, { label: ui.practical, to: "/practical" }, { label: ui.documents, to: "/documents" }, { label: ui.faq, to: "/faq" }, { label: content.jobs.label, to: "/jobs" }, { label: ui.contact, to: "/contact" }] },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-statement">
            <span className="eyebrow">{ui.independent}</span>
            <p>{ui.footerTitle}</p>
            <span className="footer-statement__note">{ui.footerIndependent}</span>
          </div>
          <div className="footer-directory">
            {columns.map((column) => (
              <div key={column.title}>
                <h2>{column.title}</h2>
                <ul>{column.links.map((link) => (
                  <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
                ))}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <Link className="wordmark wordmark--footer" to="/">
            <img className="wordmark__logo" src="/images/malleyprairie-logo.png" alt="" />
            <span className="wordmark__text">MalleyPrairie<small>{content.footerCopyright}</small></span>
          </Link>
          <p>{content.footerAddress}</p>
          <p>{ui.officiality}</p>
        </div>
      </div>
    </footer>
  );
}

function Breadcrumbs({ current }: { current: string }) {
  const { ui } = usePageCopy();
  return (
    <nav className="breadcrumbs" aria-label={ui.breadcrumbHome}>
      <Link to="/">{ui.breadcrumbHome}</Link><span aria-hidden="true">/</span><span aria-current="page">{current}</span>
    </nav>
  );
}

function SectionIntro({ eyebrow, title, text }: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-intro">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function AdmissionSection() {
  const { content, ui } = usePageCopy();
  const steps = [
    {
      title: content.admission.steps[0]?.[0] ?? "",
      text: `${content.admission.steps[0]?.[1] ?? ""} ${content.admission.steps[1]?.[1] ?? ""}`,
    },
    { title: content.admission.steps[2]?.[0] ?? "", text: content.admission.steps[2]?.[1] ?? "" },
    { title: content.admission.steps[3]?.[0] ?? "", text: content.admission.steps[3]?.[1] ?? "" },
  ];

  return (
    <section className="section section--admission" id="admission">
      <div className="container">
        <SectionIntro eyebrow={content.admission.label} title={ui.admissionTitle} text={content.admission.intro} />
        <div className="admission-layout">
          <aside className="admission-aside">
            <span className="admission-aside__icon"><Compass size={24} /></span>
            <h3>{ui.whatToKnow}</h3>
            <p>{content.admission.aside}</p>
            <a href={resourceUrls.bip} target="_blank" rel="noreferrer">{content.admission.asideLink}<ArrowUpRight size={16} /></a>
          </aside>
          <div className="admission-steps">
            {steps.map((step, index) => (
              <article className="admission-step" key={step.title}>
                <span className="admission-step__number">{index + 1}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </article>
            ))}
            <div className="admission-actions">
              <a className="button" href={resourceUrls.registrationPreschool} target="_blank" rel="noreferrer">
                {content.admission.formLinks[0]}<ArrowUpRight size={17} />
              </a>
              <a className="button button--soft" href={resourceUrls.registrationSchool} target="_blank" rel="noreferrer">
                {content.admission.formLinks[1]}<ArrowUpRight size={17} />
              </a>
            </div>
            <a className="text-link" href={resourceUrls.waitingList} target="_blank" rel="noreferrer">
              {content.admission.listLink}<ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CenterCards({ centers, compact = false }: {
  centers: LocaleContent["care"]["centers"];
  compact?: boolean;
}) {
  const { content, language, ui } = usePageCopy();
  const palette = ["sage", "sky", "peach", "lavender"];
  return (
    <div className={`center-grid ${compact ? "center-grid--compact" : ""}`}>
      {centers.map((center, index) => {
        const centreIndex = content.care.centers.findIndex((item) => item.name === center.name);
        const slug = getCenterId(centreIndex);
        return (
          <Link className={`center-card center-card--${palette[index % palette.length]}`} to={`/care/${slug}`} key={center.name}>
            <img className="center-card__image" src={centreHeroImages[slug]} alt={`${center.name} — ${galleryAlt[language]}`} loading="lazy" />
            <div className="center-card__content">
              <div className="center-card__topline">
                <span className="age-chip">{center.age}</span>
                <span className="center-card__number">0{index + 1}</span>
              </div>
              <h3>{center.name}</h3>
              <p>{center.detail}</p>
              {center.name === "La Prairie" && <span className="internal-chip"><UsersRound size={14} />{ui.internalOnly}</span>}
              <span className="center-card__link">{ui.explore}<ArrowUpRight size={18} /></span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function HomePage() {
  const { content, ui } = usePageCopy();
  const facts = content.facts;
  return (
    <>
      <main id="main">
        <section
          className="container hero hero--home"
          style={{ backgroundImage: `linear-gradient(90deg, oklch(20% 0.025 164 / 0.9), oklch(20% 0.025 164 / 0.67) 54%, oklch(20% 0.025 164 / 0.25)), url("${pageHeroImages.home}")` }}
        >
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />{content.heroEyebrow} · 0–6</p>
            <h1>{content.heroTitle}</h1>
            <p className="hero-lede">{ui.homeIntro}</p>
            <div className="hero-actions flex flex-wrap items-center">
              <Link className="button" to="/care/attique">{content.heroCta}<ArrowRight size={18} /></Link>
              <a className="text-link" href="#admission">{content.heroSecondary}<ArrowDown size={16} /></a>
            </div>
            <p className="hero-note">{content.heroNote}</p>
            <p className="hero-art-caption">{content.artCaption}</p>
          </div>
        </section>

        <section className="container facts-strip" aria-label={ui.quickFacts}>
          {facts.map(([number, text], index) => (
            <div className="fact" key={text}>
              <span className="fact__icon" aria-hidden="true">{index === 0 ? <Baby size={20} /> : index === 1 ? <UsersRound size={20} /> : <Clock3 size={20} />}</span>
              <strong>{number}</strong><span>{text}</span>
            </div>
          ))}
        </section>

        <AdmissionSection />

        <section className="section section--centres" id="care">
          <div className="container">
            <div className="section-heading-row">
              <SectionIntro eyebrow={content.care.label} title={ui.centersTitle} text={content.care.intro} />
              <Link className="text-link section-heading-row__link" to="/practical">{ui.practical}<ArrowRight size={16} /></Link>
            </div>
            <CenterCards centers={content.care.centers} />
            <p className="section-note">{content.care.note}</p>
          </div>
        </section>

        <section className="section section--approach" id="approach">
          <div className="container approach-panel">
            <div className="approach-mark"><Leaf size={29} strokeWidth={1.5} /></div>
            <div>
              <p className="eyebrow">{content.approach.label}</p>
              <h2>{content.approach.title}</h2>
              <p>{content.approach.intro}</p>
              <Link className="text-link" to="/pedagogy">{ui.pedagogy}<ArrowRight size={17} /></Link>
            </div>
            <blockquote>
              <p>{content.approach.quote}</p>
              <cite>{content.approach.attribution}</cite>
            </blockquote>
          </div>
        </section>

        <section className="section section--practical">
          <div className="container practical-teaser">
            <div className="practical-teaser__copy">
              <span className="eyebrow">{content.practical.label}</span>
              <h2>{content.practical.title}</h2>
              <p>{ui.practicalIntro}</p>
              <Link className="text-link" to="/practical">{ui.more}<ArrowRight size={17} /></Link>
            </div>
            <div className="hours-card">
              <Clock3 size={23} aria-hidden="true" />
              <span>{ui.hoursTitle}</span>
              <strong>{content.practical.hours}</strong>
              <small>{content.practical.hoursSub}</small>
            </div>
            <div className="map-card">
              <MapPin size={22} aria-hidden="true" />
              <div><span>{content.contactSection.addressLabel}</span><strong>{content.contactSection.address}</strong></div>
              <a href={resourceUrls.map} target="_blank" rel="noreferrer" aria-label={ui.mapButton}><ArrowUpRight size={20} /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CenterDetailPage() {
  const { id } = useParams();
  const { content, language, ui } = usePageCopy();
  if (!isCenterId(id)) return <NotFound />;
  const centerIndex = centerIds.indexOf(id);
  const center = content.care.centers[centerIndex];
  if (!center) return <NotFound />;
  const ruleUrl = center.rules && isResourceKey(center.rules) ? resourceUrls[center.rules] : undefined;
  return (
    <>
      <main id="main" className="page-main">
        <div className="container"><Breadcrumbs current={center.name} /></div>
        <PageBanner image={centreHeroImages[id]} eyebrow={center.age} title={center.name} description={center.detail}>
          <div className="page-banner__actions">
            <span>{center.places} · {center.groups.length} {ui.groups.toLowerCase()}</span>
            <Link className="button" to="/contact">{ui.contactCta}<ArrowRight size={17} /></Link>
          </div>
        </PageBanner>

        {center.name === "La Prairie" && (
          <section className="container section--tight">
            <div className="sensitive-note"><UsersRound size={22} /><div><strong>{ui.internalOnly}</strong><p>{ui.safeBoundary}</p></div></div>
          </section>
        )}

        <section className="section section--detail">
          <div className="container detail-grid">
            <div>
              <SectionIntro eyebrow={ui.groups} title={center.name} text={center.detail} />
              <ul className="group-list">
                {center.groups.map((group) => <li key={group}><Check size={17} />{group}</li>)}
              </ul>
              {center.goals && <ul className="goal-list">{center.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>}
            </div>
            <aside className="contact-card">
              <span className="eyebrow">{ui.contact}</span>
              <h2>{center.lead}</h2>
              <p><MapPin size={18} />{center.address}</p>
              {center.phone && <a href={`tel:${center.phone.replaceAll(" ", "")}`}><Phone size={17} />{center.phone}</a>}
              <a href={`mailto:${center.email}`}><Mail size={17} />{center.email}</a>
              {center.secondAddress && <div className="contact-card__secondary"><strong>{center.secondLead}</strong><p>{center.secondAddress}</p><a href={`tel:${center.secondPhone.replaceAll(" ", "")}`}><Phone size={17} />{center.secondPhone}</a></div>}
              {ruleUrl && <a className="button button--soft" href={ruleUrl} target="_blank" rel="noreferrer">{ui.relatedDocuments}<ArrowUpRight size={17} /></a>}
            </aside>
          </div>
          <div className="container gallery-note">
            {centreGalleries[id].map((image, index) => (
              <figure className="centre-photo" key={image}>
                <img src={image} alt={`${center.name} · ${galleryAlt[language]} ${index + 1}`} loading={index < 3 ? "eager" : "lazy"} />
                <figcaption>{center.name} · {String(index + 1).padStart(2, "0")}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section section--other">
          <div className="container">
            <SectionIntro title={ui.otherCentres} />
            <CenterCards centers={content.care.centers.filter((_, index) => index !== centerIndex)} compact />
          </div>
        </section>
        <section className="container bottom-cta">
          <div><p className="eyebrow">{content.admission.label}</p><h2>{content.admission.title}</h2></div>
          <a className="button" href={resourceUrls.waitingList} target="_blank" rel="noreferrer">{ui.admissionButton}<ArrowUpRight size={17} /></a>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContentPage({ kind }: { kind: "pedagogy" | "activities" | "team" | "fees" | "practical" | "documents" | "faq" }) {
  const { content, ui } = usePageCopy();
  const pageData = {
    pedagogy: {
      title: content.approach.title,
      eyebrow: content.approach.label,
      intro: content.approach.intro,
      items: content.approach.values.map((value) => [value, ""] as [string, string]),
      descriptor: ui.pedagogyPage,
    },
    activities: {
      title: content.approach.activityTitle,
      eyebrow: content.approach.label,
      intro: content.approach.activity,
      items: [[content.approach.movement, ""]] as [string, string][],
      descriptor: ui.activitiesPage,
    },
    team: {
      title: content.staff.title,
      eyebrow: content.staff.label,
      intro: content.staff.intro,
      items: content.staff.roles,
      descriptor: ui.teamPage,
    },
    fees: {
      title: content.fees.title,
      eyebrow: content.fees.label,
      intro: content.fees.intro,
      items: content.fees.items,
      descriptor: content.fees.intro,
    },
    practical: {
      title: content.practical.title,
      eyebrow: content.practical.label,
      intro: content.practical.intro,
      items: content.practical.items,
      descriptor: ui.practicalIntro,
    },
    documents: {
      title: content.documents.title,
      eyebrow: content.documents.label,
      intro: content.documents.intro,
      items: content.documents.links.map(([label, key]) => [label, key] as [string, string]),
      descriptor: content.documents.delivery,
    },
    faq: {
      title: content.faq.title,
      eyebrow: content.faq.label,
      intro: ui.readMore,
      items: content.faq.items,
      descriptor: ui.readMore,
    },
  }[kind];

  return (
    <>
      <main id="main" className="page-main">
        <div className="container"><Breadcrumbs current={pageData.eyebrow} /></div>
        <PageBanner image={pageHeroImages[kind]} eyebrow={pageData.eyebrow} title={pageData.title} description={pageData.intro} />

        {kind === "faq" ? (
          <section className="section"><div className="container content-narrow faq-list">
            {content.faq.items.map(([question, answer]) => (
              <details className="faq-item" key={question}>
                <summary>{question}<ChevronDown size={19} /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div></section>
        ) : kind === "documents" ? (
          <section className="section"><div className="container document-grid">
            {content.documents.links.map(([label, key]) => {
              const resourceUrl = isResourceKey(key) ? resourceUrls[key] : undefined;
              const fileType = resourceUrl?.toLowerCase().includes(".pdf") ? ui.documentPdf : ui.documentPage;
              return (
                <article className="document-card" key={key}>
                  <span className="document-card__icon"><BookOpen size={20} /></span>
                  <div><h2>{label}</h2><p>{fileType}</p></div>
                  {resourceUrl && <a href={resourceUrl} target="_blank" rel="noreferrer" aria-label={`${ui.explore}: ${label}`}><ArrowUpRight size={19} /></a>}
                </article>
              );
            })}
          </div><p className="container asset-disclaimer">{content.documents.delivery}</p></section>
        ) : kind === "practical" ? (
          <section className="section"><div className="container practical-page">
            <div className="hours-card hours-card--large"><Clock3 size={25} /><span>{ui.hoursTitle}</span><strong>{content.practical.hours}</strong><small>{content.practical.hoursSub}</small></div>
            <div className="detail-list">{pageData.items.map(([title, detail]) => (
              <article className="detail-row" key={title}><h2>{title}</h2><p>{detail}</p></article>
            ))}</div>
            <div className="document-shortcuts">
              <a href={resourceUrls.closures} target="_blank" rel="noreferrer">{content.practical.closuresLink}<ArrowUpRight size={16} /></a>
              <a href={resourceUrls.menus} target="_blank" rel="noreferrer">{content.practical.menusLink}<ArrowUpRight size={16} /></a>
              <Link to="/fees">{ui.fees}<ArrowRight size={16} /></Link>
            </div>
          </div></section>
        ) : kind === "activities" || kind === "pedagogy" ? (
          <section className="section"><div className="container content-narrow article-content">
            {kind === "pedagogy" && <blockquote className="approach-quote"><p>{content.approach.quote}</p><cite>{content.approach.attribution}</cite></blockquote>}
            <p className="article-lede">{pageData.intro}</p>
            {kind === "activities" && <p>{content.approach.movement}</p>}
            <ul className="value-list">{content.approach.values.map((value, index) => (
              <li key={value}><span>0{index + 1}</span><strong>{value}</strong><ArrowRight size={17} /></li>
            ))}</ul>
          </div></section>
        ) : (
          <section className="section"><div className="container detail-list">
            {pageData.items.map(([title, detail]) => (
              <article className="detail-row" key={title}><h2>{title}</h2><p>{detail}</p></article>
            ))}
            {kind === "fees" && <p className="asset-disclaimer">{ui.assetNote}</p>}
          </div></section>
        )}
        {kind === "fees" && <section className="container bottom-cta"><div><p className="eyebrow">{ui.practical}</p><h2>{content.practical.title}</h2></div><Link className="button" to="/practical">{ui.more}<ArrowRight size={17} /></Link></section>}
      </main>
      <Footer />
    </>
  );
}

function ContactPage() {
  const { content, ui } = usePageCopy();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [attempted, setAttempted] = useState(false);
  const [message, setMessage] = useState("");
  const successRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setAttempted(true);
    if (!form.reportValidity()) return;
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Formspree returned HTTP ${response.status}`);
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Unable to submit the prototype contact form.", error);
      setStatus("error");
      setMessage(ui.error);
    }
  }

  return (
    <>
      <main id="main" className="page-main">
        <div className="container"><Breadcrumbs current={ui.contact} /></div>
        <PageBanner image={pageHeroImages.contact} eyebrow={ui.contact} title={ui.contactPage} description={ui.formIntro} />
        <section className="section"><div className="container contact-layout">
          <div className="contact-information">
            <span className="eyebrow">{ui.officialContact}</span>
            <h2>{content.contactSection.addressLabel}</h2>
            <p><MapPin size={19} />{content.contactSection.address}</p>
            <a href="tel:0216200898"><Phone size={18} />021 620 08 98</a>
            <a href="mailto:garderies@malleyprairie.ch"><Mail size={18} />garderies@malleyprairie.ch</a>
            <a className="button button--soft" href={resourceUrls.map} target="_blank" rel="noreferrer">{ui.mapButton}<ArrowUpRight size={17} /></a>
            <div className="map-preview" aria-hidden="true">
              <span className="map-preview__road map-preview__road--one" />
              <span className="map-preview__road map-preview__road--two" />
              <span className="map-preview__road map-preview__road--three" />
              <MapPin size={29} />
              <small>Chemin du Martinet 27 · Lausanne</small>
            </div>
            <div className="form-notice"><span className="notice-mark">i</span><p>{ui.formNotice}</p></div>
          </div>
          {status === "success" ? (
            <section className="contact-success" role="status" aria-live="polite" aria-labelledby="contact-success-title" tabIndex={-1} ref={successRef}>
              <span className="contact-success__icon"><CircleCheck size={38} strokeWidth={1.6} /></span>
              <p className="eyebrow">{ui.successEyebrow}</p>
              <h2 id="contact-success-title">{ui.successTitle}</h2>
              <p>{ui.successMessage}</p>
            </section>
          ) : (
            <form
              className="contact-form"
              data-attempted={attempted}
              onSubmit={handleSubmit}
              noValidate
              action={formspreeEndpoint}
              method="POST"
            >
              <span className="eyebrow">{ui.contact}</span>
              <h2>{ui.contactFormTitle}</h2>
              <p className="contact-form__intro">{ui.contactFormSubtitle}</p>
              <div className="form-grid">
                <label><span>{ui.fullName} <span aria-hidden="true">*</span></span><input name="name" autoComplete="name" autoCapitalize="words" required maxLength={120} /></label>
                <label><span>{ui.emailAddress} <span aria-hidden="true">*</span></span><input name="email" type="email" inputMode="email" autoComplete="email" autoCapitalize="none" required maxLength={254} /></label>
                <label className="form-field--wide">{ui.phone}<input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={40} /></label>
                <label className="form-field--wide"><span>{ui.subject} <span aria-hidden="true">*</span></span><input name="_subject" required maxLength={160} placeholder={ui.subjectPlaceholder} /></label>
                <label className="form-field--wide"><span>{ui.message} <span aria-hidden="true">*</span></span><textarea name="message" rows={5} required maxLength={4000} placeholder={ui.messagePlaceholder} enterKeyHint="send" /></label>
              </div>
              <p className="form-required">{ui.required} · *</p>
              <button className="button form-submit" type="submit" disabled={status === "loading"} aria-busy={status === "loading"}>
                {status === "loading" ? ui.sending : ui.send}
                {status === "loading" ? <span className="spinner" aria-hidden="true" /> : <Send size={17} />}
              </button>
              <p className={`form-status form-status--${status}`} role={status === "error" ? "alert" : "status"} aria-live={status === "error" ? "assertive" : "polite"}>{message}</p>
            </form>
          )}
        </div></section>
      </main>
      <Footer />
    </>
  );
}

function JobsPage() {
  const { content } = usePageCopy();
  return (
    <>
      <main id="main" className="page-main">
        <div className="container"><Breadcrumbs current={content.jobs.label} /></div>
        <PageBanner image={pageHeroImages.jobs} eyebrow={content.jobs.label} title={content.jobs.title} description={content.jobs.intro} />
        <section className="section"><div className="container job-grid">
          {content.jobs.roles.map((role) => (
            <article className="job-card" key={role}>
              <UsersRound size={22} aria-hidden="true" />
              <h2>{role}</h2>
              <a href={resourceUrls.jobs} target="_blank" rel="noreferrer">{content.jobs.link}<ArrowUpRight size={17} /></a>
            </article>
          ))}
        </div></section>
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  const { ui } = usePageCopy();
  return (
    <>
      <main id="main" className="page-main">
        <PageBanner image={pageHeroImages.notFound} eyebrow="404" title={ui.readMore}>
          <Link className="button" to="/">{ui.backHome}<ArrowRight size={17} /></Link>
        </PageBanner>
      </main>
      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  const { content, language, ui } = usePageCopy();
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.lang = language;
    const titleByPath: Record<string, string> = {
      "/": content.heroTitle,
      "/pedagogy": content.approach.title,
      "/activities": content.approach.activityTitle,
      "/team": content.staff.title,
      "/fees": content.fees.title,
      "/practical": content.practical.title,
      "/documents": content.documents.title,
      "/faq": content.faq.title,
      "/jobs": content.jobs.title,
      "/contact": ui.contactPage,
    };
    const detailSlug = pathname.startsWith("/care/") ? pathname.split("/")[2] : undefined;
    const detailIndex = isCenterId(detailSlug) ? centerIds.indexOf(detailSlug) : -1;
    const detail = detailIndex >= 0 ? content.care.centers[detailIndex]?.name : undefined;
    const title = detail ?? titleByPath[pathname] ?? content.heroTitle;
    document.title = `${title} — MalleyPrairie · ${ui.independent}`;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = content.heroLead;
  }, [content, language, pathname, ui]);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/care/:id" element={<CenterDetailPage />} />
        <Route path="/pedagogy" element={<ContentPage kind="pedagogy" />} />
        <Route path="/activities" element={<ContentPage kind="activities" />} />
        <Route path="/team" element={<ContentPage kind="team" />} />
        <Route path="/fees" element={<ContentPage kind="fees" />} />
        <Route path="/practical" element={<ContentPage kind="practical" />} />
        <Route path="/documents" element={<ContentPage kind="documents" />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/faq" element={<ContentPage kind="faq" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/centre" element={<Navigate to="/pedagogy" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
