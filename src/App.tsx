import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PropuestaSection } from './components/PropuestaSection';
import { ServiciosSection } from './components/ServiciosSection';
import { TrayectoriaSection } from './components/TrayectoriaSection';
import { HabilidadesSection } from './components/HabilidadesSection';
import { CertificacionesSection } from './components/CertificacionesSection';
import { ContactoSection } from './components/ContactoSection';
import { FooterSection } from './components/FooterSection';

const SECTION_IDS = [
  'inicio',
  'propuesta-de-valor',
  'servicios-sommelier',
  'trayectoria',
  'habilidades',
  'certificaciones',
  'contacto',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [selectedSubject, setSelectedSubject] = useState<string>('cata');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSubject = (subjectValue: string) => {
    setSelectedSubject(subjectValue);
    setActiveSection('contacto');
  };

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Navbar
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />

      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          <HeroSection />
          <PropuestaSection />
          <ServiciosSection onSelectSubject={handleSelectSubject} />
          <TrayectoriaSection />
          <HabilidadesSection />
          <CertificacionesSection />
          <ContactoSection
            selectedSubject={selectedSubject}
            onSubjectChange={setSelectedSubject}
          />
        </div>
      </main>

      <FooterSection onSelectSection={setActiveSection} />
    </div>
  );
}
