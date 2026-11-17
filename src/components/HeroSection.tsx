import React from 'react';

interface HeroSectionProps {
  onOpenCvModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[840px] h-[480px] bg-gradient-to-b from-primary/10 via-secondary/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <section
        className="relative max-w-[1440px] mx-auto px-margin lg:px-margin-lg pt-space-lg lg:pt-space-xl pb-space-xl"
        id="inicio"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          {/* Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-space-xs rounded-full bg-surface-container shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                SOMMELIER INTERNACIONAL WSET &amp; WINE CONSULTANT
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Guido Spina
              <span className="block font-headline-md text-headline-md text-on-surface-variant font-normal mt-space-xs">
                Sommelier Internacional (WSET 2) &amp; Consultor Enológico
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Cata analítica profesional, curaduría sensorial de cartas y cavas, diseño de experiencias enológicas memorables y divulgación bilingüe. Articulación entre el conocimiento riguroso del terroir, la hospitalidad en salón y la visión comercial de bodegas y tiendas especializadas.
            </p>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-sm">
              <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary">
                  +5 Años
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Ecosistema del Vino &amp; Cavas
                </span>
              </div>

              <div className="bg-secondary-container/20 border-2 border-secondary p-space-sm rounded-lg shadow-md flex flex-col relative overflow-hidden">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  WSET Level 2
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                  Londres · Cata Sistemática
                </span>
              </div>

              <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col">
                <span className="font-headline-sm text-headline-sm text-secondary">
                  Curaduría
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Cartas, Degustaciones &amp; Salón
                </span>
              </div>

              <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col">
                <span className="font-headline-sm text-headline-sm text-secondary">
                  Bilingüe / Substack
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Divulgación &amp; Prensa (ES/EN)
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <a
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg rounded shadow-md transition-all"
                href="#contacto"
              >
                <span>Agendar Degustación / Consulta</span>
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
              </a>

              <a
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-surface-container text-primary hover:bg-surface-container-high font-label-lg text-label-lg rounded transition-colors shadow-sm"
                href="#servicios-sommelier"
                onClick={() => {
                  if (onOpenCvModal) onOpenCvModal();
                }}
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  download
                </span>
                <span>Descargar CV / Perfil Profesional</span>
              </a>
            </div>
          </div>

          {/* Hero Visual Accent Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-secondary/20 via-primary/10 to-secondary/15 rounded-xl blur-xl pointer-events-none" />
            <div className="relative bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/60 overflow-hidden flex flex-col">
              <div className="h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
              <div className="p-space-md lg:p-space-lg flex flex-col gap-space-md">
                <div className="flex items-start justify-between gap-space-sm border-b border-surface-container pb-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center shadow-inner">
                      <span className="material-symbols-outlined text-[28px]">
                        wine_bar
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
                        Guido Spina
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold uppercase tracking-wider">
                      Certificado Oficial
                    </span>
                    <span className="font-label-sm text-[11px] text-on-surface-variant mt-0.5">
                      WSET Level 2, Londres
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-0.5">
                  <p className="font-title-md text-title-md text-primary font-semibold">
                    Sommelier Internacional &amp; Consultor Enológico
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Curaduría sensorial de cartas, cavas boutique y divulgación bilingüe
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-space-xs">
                  <div className="bg-surface-container-low rounded-lg p-space-xs border border-surface-container flex items-center gap-space-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
