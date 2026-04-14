import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const layouts = [
  {
    id: "minimal",
    name: "Minimalista",
    desc: "Elegante e direto",
    accent: "#ffffff",
    preview: ({ name }: { name: string }) => (
      <div className="w-full h-full bg-black flex flex-col text-white font-mono overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <span className="text-sm font-bold uppercase tracking-widest">{name || "Sua Marca"}</span>
          <div className="flex gap-4 text-[10px] text-white/40 uppercase tracking-widest">
            <span>Sobre</span><span>Serviços</span><span>Contato</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <div className="text-[9px] tracking-[0.4em] uppercase text-white/30 mb-3">Bem-vindo</div>
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">{name || "Sua Marca"}</h1>
          <p className="text-xs text-white/40 max-w-xs leading-relaxed mb-6">Transforme sua visão em realidade. Qualidade e resultado em cada detalhe.</p>
          <button className="px-6 py-2 bg-white text-black text-[10px] uppercase tracking-widest font-bold">Saiba Mais</button>
        </div>
        <div className="px-6 py-3 border-t border-white/10 text-[9px] text-white/20 text-center uppercase tracking-widest">
          © 2026 {name || "Sua Marca"}
        </div>
      </div>
    ),
  },
  {
    id: "corporate",
    name: "Corporativo",
    desc: "Profissional e confiável",
    accent: "#2563eb",
    preview: ({ name }: { name: string }) => (
      <div className="w-full h-full bg-white flex flex-col text-gray-900 font-sans overflow-hidden">
        <div className="flex items-center justify-between px-6 py-3 bg-blue-700 text-white">
          <span className="text-sm font-bold">{name || "Sua Empresa"}</span>
          <div className="flex gap-4 text-[10px] uppercase tracking-wide">
            <span>Início</span><span>Serviços</span><span>Contato</span>
          </div>
        </div>
        <div className="bg-blue-600 text-white text-center py-10 px-6">
          <h1 className="text-3xl font-bold mb-2">{name || "Sua Empresa"}</h1>
          <p className="text-xs text-blue-100 mb-4">Soluções profissionais para o seu negócio crescer</p>
          <button className="px-6 py-2 bg-white text-blue-700 text-[10px] font-bold uppercase rounded">Fale Conosco</button>
        </div>
        <div className="flex gap-2 p-4">
          {["Qualidade", "Rapidez", "Suporte"].map(v => (
            <div key={v} className="flex-1 bg-gray-50 rounded p-3 text-center border border-gray-100">
              <div className="w-6 h-6 bg-blue-100 rounded-full mx-auto mb-2" />
              <div className="text-[10px] font-semibold text-gray-700">{v}</div>
            </div>
          ))}
        </div>
        <div className="px-4 py-2 bg-gray-100 text-[9px] text-gray-400 text-center">© 2026 {name || "Sua Empresa"}</div>
      </div>
    ),
  },
  {
    id: "creative",
    name: "Criativo",
    desc: "Moderno e impactante",
    accent: "#f97316",
    preview: ({ name }: { name: string }) => (
      <div className="w-full h-full bg-gray-950 flex flex-col text-white font-sans overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-sm font-black text-orange-400">{name || "Studio"}</span>
          <div className="flex gap-3 text-[10px] text-white/50">
            <span>Work</span><span>About</span><span>Contact</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center px-5">
          <div className="text-orange-400 text-[9px] uppercase tracking-widest mb-2">✦ Agência Criativa</div>
          <h1 className="text-4xl font-black leading-none mb-3">
            <span className="text-white">{name?.split(" ")[0] || "Criamos"}</span>
            <br/>
            <span className="text-orange-400">{name?.split(" ")[1] || "Experiências"}</span>
          </h1>
          <p className="text-xs text-white/40 mb-5 max-w-xs">Design que conecta. Código que performa. Resultado que impressiona.</p>
          <div className="flex gap-2">
            <button className="px-5 py-2 bg-orange-400 text-black text-[10px] font-black uppercase rounded-full">Ver Projetos</button>
            <button className="px-5 py-2 border border-white/20 text-white/60 text-[10px] uppercase rounded-full">Contato</button>
          </div>
        </div>
        <div className="flex gap-2 px-5 pb-4">
          {[1,2,3].map(i => (
            <div key={i} className="flex-1 h-14 bg-white/5 rounded-lg border border-white/10" />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "ecommerce",
    name: "Loja Virtual",
    desc: "Venda online com estilo",
    accent: "#16a34a",
    preview: ({ name }: { name: string }) => (
      <div className="w-full h-full bg-gray-50 flex flex-col font-sans overflow-hidden text-gray-900">
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
          <span className="text-sm font-bold text-green-700">{name || "Minha Loja"}</span>
          <div className="flex gap-3 text-[10px] text-gray-500">
            <span>Produtos</span><span>Sobre</span><span>🛒 0</span>
          </div>
        </div>
        <div className="bg-green-700 text-white text-center py-5 px-4">
          <div className="text-[9px] uppercase tracking-widest text-green-200 mb-1">Promoção especial</div>
          <h1 className="text-xl font-bold">{name || "Minha Loja"}</h1>
          <p className="text-[10px] text-green-100">Frete grátis acima de R$ 99</p>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3 flex-1">
          {["Produto A", "Produto B", "Produto C"].map((p) => (
            <div key={p} className="bg-white rounded-lg border border-gray-200 p-2 flex flex-col items-center">
              <div className="w-full h-10 bg-gray-100 rounded mb-1" />
              <div className="text-[9px] font-medium text-gray-700 text-center">{p}</div>
              <div className="text-[9px] text-green-600 font-bold">R$ 49,90</div>
              <button className="mt-1 w-full py-1 bg-green-600 text-white text-[8px] rounded font-bold">Comprar</button>
            </div>
          ))}
        </div>
        <div className="px-4 py-2 bg-white border-t border-gray-200 text-[9px] text-gray-400 text-center">
          © 2026 {name || "Minha Loja"} · Pagamento seguro
        </div>
      </div>
    ),
  },
];

export default function DemoBuilder({ lang }: { lang: "pt" | "en" }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [businessName, setBusinessName] = useState("");

  const active = layouts.find(l => l.id === selected);
  const Preview = active?.preview;

  const label = lang === "pt"
    ? { section: "Experimente", sub: "Visualize seu site", choose: "Escolha um estilo", placeholder: "Nome do seu negócio", back: "← Escolher outro" }
    : { section: "Try it", sub: "Preview your site", choose: "Choose a style", placeholder: "Your business name", back: "← Choose another" };

  return (
    <section className="py-24 px-6 md:px-16 lg:px-32 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <div className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-4">{label.section}</div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">{label.sub}</h2>
        <p className="text-sm text-white/40 mt-3 max-w-md">
          {lang === "pt"
            ? "Teste diferentes estilos e veja como ficaria o seu site antes de contratar."
            : "Test different styles and see how your site would look before hiring."}
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!selected ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {layouts.map((layout, i) => (
              <motion.div
                key={layout.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => setSelected(layout.id)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === "Enter" && setSelected(layout.id)}
                className="group relative aspect-[3/4] bg-black/40 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden text-left cursor-pointer"
              >
                {/* Mini preview */}
                <div className="absolute inset-0 scale-[0.35] origin-top-left pointer-events-none"
                  style={{ width: "285%", height: "285%" }}>
                  {layout.preview({ name: layout.name })}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-white mb-0.5">{layout.name}</div>
                  <div className="text-[10px] text-white/40">{layout.desc}</div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] text-white/60 uppercase tracking-widest">Ver →</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-2">
              <button
                onClick={() => setSelected(null)}
                className="text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors"
              >
                {label.back}
              </button>
              <input
                type="text"
                value={businessName}
                onChange={e => setBusinessName(e.target.value)}
                placeholder={label.placeholder}
                className="bg-white/5 border border-white/15 text-white text-xs px-4 py-2 placeholder-white/20 focus:outline-none focus:border-white/40 tracking-wide w-full sm:w-64"
              />
            </div>

            {/* Layout selector */}
            <div className="flex gap-2 flex-wrap">
              {layouts.map(l => (
                <button
                  key={l.id}
                  onClick={() => setSelected(l.id)}
                  className={`px-4 py-1.5 text-[10px] uppercase tracking-widest border transition-colors ${
                    l.id === selected
                      ? "border-white text-white"
                      : "border-white/15 text-white/40 hover:border-white/30"
                  }`}
                >
                  {l.name}
                </button>
              ))}
            </div>

            {/* Preview window */}
            <div className="border border-white/15 overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <div className="flex-1 bg-white/5 rounded px-3 py-0.5 text-[10px] text-white/25 tracking-wide">
                  www.{(businessName || "seusite").toLowerCase().replace(/\s+/g, "")}.com.br
                </div>
              </div>
              <div className="h-80 md:h-96">
                {Preview && <Preview name={businessName} />}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-white/90 transition-colors"
              >
                {lang === "pt" ? "Quero este estilo" : "I want this style"}
              </a>
              <span className="text-xs text-white/30">
                {lang === "pt" ? "Personalizamos tudo para você" : "We customize everything for you"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const WA_URL = `https://wa.me/5538991310133`;
