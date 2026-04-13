import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const BASE = import.meta.env.BASE_URL;

const WA_NUMBER = "5538991310133";
const WA_URL = `https://wa.me/${WA_NUMBER}`;
const EMAIL = "keefnow@outlook.com.br";
const INSTAGRAM = "https://instagram.com/keefnow";

type Lang = "pt" | "en";

const content = {
  pt: {
    tagline: "Desenvolvimento Web",
    subtitle: "Sites e sistemas web que fazem seu negócio crescer. Design com propósito, código de qualidade.",
    cta: "Solicitar Projeto",
    ctaAlt: "Ver Serviços",
    navServices: "Serviços",
    navStack: "Stack",
    navContact: "Contato",
    servicesLabel: "O que faço",
    servicesTitle: "Serviços",
    stackLabel: "Tecnologias",
    contactLabel: "Vamos conversar",
    contactTitle: "Contato",
    contactSubtitle: "Tem um projeto em mente? Me conta o que você precisa e vamos construir algo incrível juntos.",
    sendBtn: "Enviar Mensagem",
    waLabel: "WhatsApp · +55 38 9131-0133",
    igLabel: "@keefnow",
    scroll: "scroll",
    footer: "Desenvolvimento Web",
    services: [
      { title: "Sites Institucionais", desc: "Presença digital profissional para sua marca. Design único, responsivo e otimizado para resultados." },
      { title: "Landing Pages", desc: "Páginas de alta conversão que transformam visitantes em clientes. Foco em performance e impacto." },
      { title: "Lojas Virtuais", desc: "E-commerce completo com experiência de compra fluida, gestão de produtos e integração de pagamentos." },
      { title: "Sistemas Web", desc: "Aplicações customizadas para automatizar processos e escalar seu negócio com tecnologia de ponta." },
    ],
  },
  en: {
    tagline: "Web Development",
    subtitle: "Websites and web systems that make your business grow. Purposeful design, quality code.",
    cta: "Start a Project",
    ctaAlt: "View Services",
    navServices: "Services",
    navStack: "Stack",
    navContact: "Contact",
    servicesLabel: "What I do",
    servicesTitle: "Services",
    stackLabel: "Technologies",
    contactLabel: "Let's talk",
    contactTitle: "Contact",
    contactSubtitle: "Got a project in mind? Tell me what you need and let's build something great together.",
    sendBtn: "Send Message",
    waLabel: "WhatsApp · +55 38 9131-0133",
    igLabel: "@keefnow",
    scroll: "scroll",
    footer: "Web Development",
    services: [
      { title: "Institutional Websites", desc: "Professional digital presence for your brand. Unique, responsive design optimized for results." },
      { title: "Landing Pages", desc: "High-conversion pages that turn visitors into customers. Focus on performance and impact." },
      { title: "Online Stores", desc: "Full e-commerce with a smooth shopping experience, product management and payment integration." },
      { title: "Web Systems", desc: "Custom applications to automate processes and scale your business with cutting-edge technology." },
    ],
  },
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("pt");

  const t = content[lang];

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 0.7;
  }, []);

  // Keep <html lang> in sync
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "pt" ? "en" : "pt"));

  const stack = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-mono" translate="no">
      {/* VIDEO BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={`${BASE}bg.mp4`}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* NOISE OVERLAY */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-xl font-bold tracking-widest uppercase select-none"
          >
            keefnow
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-white/60"
          >
            <a href="#services" className="hover:text-white transition-colors">{t.navServices}</a>
            <a href="#stack" className="hover:text-white transition-colors">{t.navStack}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.navContact}</a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/60 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="text-white/40 hover:text-white transition-colors text-xs tracking-widest uppercase"
              aria-label="Toggle language"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8"
            >
              {[
                { label: t.navServices, href: "#services" },
                { label: t.navStack, href: "#stack" },
                { label: t.navContact, href: "#contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl uppercase tracking-widest text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                aria-label="Instagram"
                className="text-white/60 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-7 h-7" />
              </a>

              {/* Language toggle in mobile menu */}
              <button
                onClick={() => { toggleLang(); setMenuOpen(false); }}
                className="mt-2 flex items-center gap-2 text-xs tracking-[0.3em] uppercase"
              >
                <span className={lang === "pt" ? "text-white" : "text-white/30"}>PT</span>
                <span className="text-white/20">·</span>
                <span className={lang === "en" ? "text-white" : "text-white/30"}>EN</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 text-xs tracking-[0.4em] uppercase text-white/40"
          >
            {t.tagline}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6"
          >
            keef
            <br />
            <span className="text-white/20">now</span>
          </motion.h1>

          <motion.p
            key={lang + "-subtitle"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-sm text-sm text-white/50 leading-relaxed mb-12 tracking-wide"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors"
            >
              {t.cta}
            </a>
            <a
              href="#services"
              className="px-8 py-3 border border-white/20 text-white/70 text-xs font-bold uppercase tracking-widest hover:border-white/60 hover:text-white transition-colors"
            >
              {t.ctaAlt}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest text-white/30">{t.scroll}</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
            />
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-32 px-6 md:px-16 lg:px-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-4">{t.servicesLabel}</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">{t.servicesTitle}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {t.services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black/60 backdrop-blur-sm p-8 md:p-10 group hover:bg-white/5 transition-colors cursor-default"
              >
                <div className="text-white/20 text-2xl mb-6 group-hover:text-white/40 transition-colors">✦</div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-3">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="py-24 px-6 md:px-16 lg:px-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-4">{t.stackLabel}</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Stack</h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="px-5 py-2 border border-white/15 text-xs uppercase tracking-widest text-white/60 hover:border-white/50 hover:text-white transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 px-6 md:px-16 lg:px-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-4">{t.contactLabel}</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">{t.contactTitle}</h2>
            <p className="text-sm text-white/50 leading-relaxed mb-10">{t.contactSubtitle}</p>

            <div className="flex flex-col gap-5 mt-2">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors"
              >
                <FaEnvelope size={22} />
                <span className="text-xs uppercase tracking-widest">Email</span>
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors"
              >
                <FaWhatsapp size={22} />
                <span className="text-xs uppercase tracking-widest">WhatsApp</span>
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors"
              >
                <FaInstagram size={22} />
                <span className="text-xs uppercase tracking-widest">Instagram</span>
              </a>
            </div>

            <div className="mt-12">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-white/90 transition-colors"
              >
                {t.sendBtn}
              </a>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 px-6 md:px-16 lg:px-32 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/20 uppercase tracking-widest">
            © {new Date().getFullYear()} Keefnow
          </span>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/20 hover:text-white/50 transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
