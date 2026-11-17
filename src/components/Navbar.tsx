import React, { useState } from 'react';

export const MONOGRAM_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1Um3hCzDuN6W7v3_lIWh7OUyxQcG67OF1Vn57I0wJLN6O2QsJkBhm7u8wR2vlDZyaiptXzOTPQpP8e1j7THJ6MjpTB0KzLPu9AHSntOtKOe0XwUFbo3RzzxzZIowWQguj9fuom7k8oQpiJIoS4_99TP17Z7fm6MZPnfpEkBZSwFbSnPOcMw_nj7S8jw-OpJx4aZ4cnCbObUqXjmd2Rbq8I_g0cj0vb21y4sUs3Xk2fZ-WXQGZgWCebMiHQ';

const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'propuesta-de-valor', label: 'Propuesta de Valor' },
  { id: 'servicios-sommelier', label: 'Servicios de Sommelier' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'certificaciones', label: 'Certificaciones' },
  { id: 'contacto', label: 'Contacto' },
];

interface NavbarProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSelectSection }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    onSelectSection(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(30,30,36,0.06)]">
      <div className="h-20 max-w-[1440px] mx-auto px-margin lg:px-margin-lg flex items-center justify-between gap-space-md">
        <a
          href="#inicio"
          onClick={() => handleLinkClick('inicio')}
          className="flex items-center gap-space-md shrink-0"
        >
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
          <div className="flex flex-col">
            <span className="font-title-md text-title-md text-primary tracking-tight">
              Guido Spina
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              Sommelier Internacional &amp; Consultor Enológico
            </span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-space-lg">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                aria-current={isActive ? 'page' : undefined}
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={
                  isActive
                    ? 'transition-colors bg-primary-container text-on-primary font-title-md rounded-lg px-space-sm py-space-xs'
                    : 'font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors py-space-xs'
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-md shrink-0">
          <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container rounded-full">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">
              Argentina &amp; Global
            </span>
          </div>

          <a
            href="#contacto"
            onClick={() => handleLinkClick('contacto')}
            className="hidden md:inline-flex items-center justify-center px-space-lg py-space-sm bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg rounded shadow-[0_4px_16px_rgba(91,19,35,0.2)] transition-all duration-300"
          >
            Agendar Degustación / Reunión
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-pointer xl:cursor-default"
            aria-label="Menú o Acceso Rápido"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              {mobileOpen ? 'close' : 'wine_bar'}
            </span>
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-surface/95 backdrop-blur-xl border-t border-outline-variant/40 px-margin py-space-md flex flex-col gap-space-xs">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={
                  isActive
                    ? 'px-space-sm py-space-xs rounded-lg bg-primary-container text-on-primary font-title-md text-sm'
                    : 'px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:bg-surface-container font-label-lg text-sm'
                }
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
