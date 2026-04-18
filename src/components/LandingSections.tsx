import { useEffect, useState } from "react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/BsKfVC2u8PTDazj6jMt4TS";

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block w-full max-w-md bg-gradient-fire text-highlight-foreground font-display font-extrabold text-lg md:text-xl py-4 px-8 rounded-lg text-center animate-pulse-glow hover:scale-105 transition-transform duration-200 cursor-pointer ${className}`}
  >
    {children}
  </a>
);

const VacancyCounter = () => {
  const [count, setCount] = useState(127);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev > 23 ? prev - 1 : prev));
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <span className="inline-block w-3 h-3 rounded-full bg-danger animate-countdown" />
      <span className="text-danger font-bold text-sm md:text-base">
        🔴 Apenas <span className="text-highlight font-extrabold">{count}</span> vagas restantes
      </span>
    </div>
  );
};

export const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-dark overflow-hidden px-4 py-16">
    {/* Decorative elements */}
    <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">⚡</div>
    <div className="absolute bottom-20 right-10 text-5xl opacity-15 animate-float" style={{ animationDelay: "1s" }}>🏷️</div>
    <div className="absolute top-1/3 right-1/4 text-4xl opacity-10 animate-float" style={{ animationDelay: "2s" }}>💰</div>

    <div className="relative z-10 text-center max-w-3xl mx-auto">
      <div className="inline-block bg-danger/20 border border-danger/40 rounded-full px-4 py-1.5 mb-6">
        <span className="text-danger font-semibold text-sm">⚡ OFERTAS QUE ACABAM EM MINUTOS</span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
        Promoções que somem em minutos.{" "}
        <span className="text-gradient-fire">Você vai continuar pagando mais caro?</span>
      </h1>

      <p className="text-muted-foreground text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
        Entre no grupo <span className="text-highlight font-bold">Relâmpago de Ofertas</span> e receba descontos reais
        da Shopee, Amazon e Mercado Livre todos os dias.
      </p>

      <CTAButton>QUERO RECEBER AS PROMOÇÕES 🔥</CTAButton>

      <VacancyCounter />

      <div className="flex items-center justify-center gap-4 mt-8 text-muted-foreground text-xs md:text-sm">
        <span>✅ 100% Gratuito</span>
        <span>✅ Sem Spam</span>
        <span>✅ Saia quando quiser</span>
      </div>
    </div>
  </section>
);

export const BenefitsSection = () => {
  const benefits = [
    { icon: "✅", title: "Ofertas Verificadas", description: "Cada promoção é testada e confirmada antes de chegar até você." },
    { icon: "🎟️", title: "Cupons Escondidos", description: "Cupons exclusivos que não aparecem na página principal das lojas." },
    { icon: "⚡", title: "Promoções Relâmpago", description: "As melhores ofertas duram minutos. Quem recebe primeiro, compra barato." },
    { icon: "💰", title: "Economia Todo Dia", description: "Membros economizam em média R$200+ por mês com nossas dicas." },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-4">
          Por que <span className="text-gradient-fire">milhares de pessoas</span> já estão no grupo?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          O Relâmpago de Ofertas reúne tudo que você precisa para nunca mais pagar caro.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-glow transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-display font-bold text-lg mb-2 text-foreground">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SocialProofSection = () => {
  const testimonials = [
    { name: "Camila R.", text: "Entrei ontem e já economizei R$127 em duas compras. Sério, é surreal!", time: "há 2 dias" },
    { name: "Lucas M.", text: "Peguei um fone Bluetooth por metade do preço. Nunca mais compro sem olhar o grupo antes.", time: "há 5 dias" },
    { name: "Ana Paula S.", text: "Meu marido não acreditou quando mostrei o quanto economizei esse mês. Grupo top!", time: "há 1 semana" },
    { name: "Roberto F.", text: "Comprei uma airfryer por R$189 que estava R$399. Melhor grupo de ofertas que já entrei.", time: "há 3 dias" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-4">
          Veja o que estão <span className="text-gradient-fire">falando</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          +4.800 pessoas já economizam com o Relâmpago de Ofertas
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gradient-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-highlight text-sm">★</span>
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-foreground">{t.name}</span>
                <span className="text-muted-foreground text-xs">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HowItWorksSection = () => {
  const steps = [
    { number: "1", title: "Você entra no grupo", description: "Clique no botão e entre gratuitamente pelo WhatsApp." },
    { number: "2", title: "Recebe as promoções", description: "Ofertas verificadas chegam diretamente no seu celular." },
    { number: "3", title: "Compra antes que acabe", description: "Aproveite os descontos antes que as vagas acabem." },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          Como <span className="text-gradient-fire">funciona?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.number} className="text-center">
              <div className="w-16 h-16 bg-gradient-fire rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-display font-extrabold text-2xl text-highlight-foreground">{s.number}</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton>ENTRAR NO GRUPO AGORA ⚡</CTAButton>
        </div>
      </div>
    </section>
  );
};

export const ObjectionsSection = () => {
  const items = [
    { q: "É gratuito mesmo?", a: "Sim, 100% gratuito. Sem pegadinha, sem cobrança." },
    { q: "Vai ter spam?", a: "Não. Enviamos apenas ofertas reais e verificadas. Nada de propaganda." },
    { q: "Posso sair quando quiser?", a: "Claro! Sem compromisso. Mas duvido que vai querer sair 😉" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          Ainda tem <span className="text-gradient-fire">dúvidas?</span>
        </h2>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.q} className="bg-gradient-card border border-border rounded-xl p-6">
              <h3 className="font-display font-bold text-foreground mb-2">{item.q}</h3>
              <p className="text-muted-foreground text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalCTASection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-dark relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 left-1/4 text-8xl">⚡</div>
      <div className="absolute bottom-10 right-1/4 text-7xl">🔥</div>
    </div>

    <div className="relative z-10 text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
        Quem entra primeiro,{" "}
        <span className="text-gradient-fire">paga menos.</span>
      </h2>

      <p className="text-muted-foreground text-base md:text-lg mb-8">
        As melhores ofertas não esperam. Entre agora e comece a economizar hoje mesmo.
      </p>

      <CTAButton className="text-xl md:text-2xl py-5">ENTRAR NO GRUPO AGORA ⚡</CTAButton>

      <VacancyCounter />

      <p className="text-muted-foreground text-xs mt-8">
        Grupo no WhatsApp · Gratuito · Sem spam · Saia quando quiser
      </p>
    </div>
  </section>
);
