import React, { useState } from 'react';
import { MONOGRAM_URL } from './Navbar';

interface FooterSectionProps {
  onSelectSection: (id: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onSelectSection,
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <footer className="w-full bg-surface-container-low pt-space-xl pb-space-lg">
      <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-lg pb-space-xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              {!imgFailed ? (
                <img
                  alt="Guido Spina Executive Monogram"
                  className="h-8 w-auto object-contain"
                  src={MONOGRAM_URL}
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="h-8 px-2.5 rounded bg-surface-container flex items-center justify-center font-headline-sm text-sm text-primary font-bold">
                  GS
                </div>
              )}
              <span className="font-headline-sm text-headline-sm text-primary">
                Guido Spina
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Sommelier Internacional (WSET Level 2 Award in Wines) &amp; Consultor Enológico. Curaduría de cartas de vino, análisis sensorial profesional, servicio de hospitalidad en salón y divulgación enológica bilingüe.
            </p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <span className="px-space-sm py-space-xs rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold uppercase tracking-widest">
                WSET Level 2 Certified
              </span>
              <span className="px-space-sm py-space-xs rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Cambridge C1
              </span>
              <span className="px-space-sm py-space-xs rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Enología &amp; Viticultura
              </span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-primary tracking-wide uppercase">
              Navegación
            </span>
            <ul className="flex flex-col gap-space-xs pt-space-xs">
              <li className="list-none">
                <a
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#inicio"
                  onClick={() => onSelectSection('inicio')}
                >
                  Inicio
                </a>
              </li>
              <li className="list-none">
                <a
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#propuesta-de-valor"
                  onClick={() => onSelectSection('propuesta-de-valor')}
                >
                  Propuesta de Valor
                </a>
              </li>
              <li className="list-none">
                <a
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#servicios-sommelier"
                  onClick={() => onSelectSection('servicios-sommelier')}
                >
                  Servicios de Sommelier
                </a>
              </li>
              <li className="list-none">
                <a
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#trayectoria"
                  onClick={() => onSelectSection('trayectoria')}
                >
                  Trayectoria Ejecutiva
                </a>
              </li>
              <li className="list-none">
                <a
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#habilidades"
                  onClick={() => onSelectSection('habilidades')}
                >
                  Habilidades Sommelier
                </a>
              </li>
              <li className="list-none">
                <a
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#certificaciones"
                  onClick={() => onSelectSection('certificaciones')}
                >
                  Certificaciones Enológicas
                </a>
              </li>
              <li className="list-none">
                <a
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  href="#contacto"
                  onClick={() => onSelectSection('contacto')}
                >
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-primary tracking-wide uppercase">
              Contacto Enológico
            </span>
            <div className="flex flex-col gap-space-sm pt-space-xs">
              <a
                className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors"
                href="mailto:guidospina@gmail.com"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  mail
                </span>
                <span className="font-body-sm text-body-sm">
                  guidospina@gmail.com
                </span>
              </a>
              <a
                className="flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors"
                href="tel:+5492804816470"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  call
                </span>
                <span className="font-body-sm text-body-sm">
                  +54 9 280 4816470
                </span>
              </a>
              <div className="flex items-center gap-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  pin_drop
                </span>
                <span className="font-body-sm text-body-sm">
                  Argentina &amp; Operaciones Globales
                </span>
              </div>
            </div>
            <div className="pt-space-md">
              <a
                className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container font-label-md text-label-md rounded transition-colors shadow-sm"
                href="#contacto"
                onClick={() => onSelectSection('contacto')}
              >
                <span className="material-symbols-outlined text-[16px]">
                  wine_bar
                </span>
                Coordinar Degustación o Reunión
              </a>
            </div>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center sm:text-left">
            © 2024 Guido Spina. Todos los derechos reservados. Sommelerie profesional y consultoría enológica internacional.
          </p>
          <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary text-center sm:text-right">
            Sommelier Internacional &amp; Wine Consultant
          </p>
        </div>
      </div>
    </footer>
  );
};
