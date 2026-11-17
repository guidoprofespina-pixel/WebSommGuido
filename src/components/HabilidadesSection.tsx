import React from 'react';

const SKILLS = [
  {
    icon: 'wine_bar',
    accent: 'primary',
    title: 'Cata Sistemática WSET & Análisis Sensorial',
    desc: 'Evaluación organoléptica precisa, identificación de varietales, balance, tipicidad y potencial de envejecimiento.',
    widthClass: 'w-[98%]',
  },
  {
    icon: 'restaurant_menu',
    accent: 'secondary',
    title: 'Curaduría de Cartas & Maridaje Gastronómico',
    desc: 'Construcción armónica de cartas de vino, acuerdos plato-copa por afinidad o contraste y selección de autor.',
    widthClass: 'w-[95%]',
  },
  {
    icon: 'storefront',
    accent: 'primary',
    title: 'Servicio en Sala & Venta Consultiva en Vinoteca',
    desc: 'Recomendación experta personalizada, servicio de descorche y temperatura, y fidelización de comensales.',
    widthClass: 'w-[94%]',
  },
  {
    icon: 'shelves',
    accent: 'secondary',
    title: 'Gestión, Conservación y Rotación de Cavas',
    desc: 'Supervisión de temperatura, humedad, estiba de botellas, rotación de etiquetas y control de mermas.',
    widthClass: 'w-[92%]',
  },
  {
    icon: 'record_voice_over',
    accent: 'primary',
    title: 'Comunicación Didáctica & Oratoria Enológica Bilingüe',
    desc: 'Transmisión accesible y refinada en degustaciones guiadas para comensales y grupos corporativos (EN/ES).',
    widthClass: 'w-[96%]',
  },
  {
    icon: 'edit_note',
    accent: 'secondary',
    title: 'Escritura Enológica & Storytelling en Substack',
    desc: 'Redacción de crónicas, análisis de terruños y notas de cata con alcance y publicación internacional.',
    widthClass: 'w-[90%]',
  },
];

export const HabilidadesSection: React.FC = () => {
  return (
    <section className="w-full py-space-xl" id="habilidades">
      <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-lg flex flex-col gap-space-lg">
        <div className="text-center max-w-xl mx-auto flex flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Matriz de Competencias
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Habilidades Clave &amp; Maestría Sommelier
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Destrezas enológicas, sensoriales, pedagógicas y de gestión validadas en sala y bajo certificación WSET.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SKILLS.map((skill) => {
            const isPrimary = skill.accent === 'primary';
            return (
              <div
                key={skill.title}
                className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`material-symbols-outlined text-[24px] ${
                      isPrimary ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    {skill.icon}
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary">
                  {skill.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {skill.desc}
                </p>
                <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`${
                      isPrimary ? 'bg-primary' : 'bg-secondary'
                    } h-full ${skill.widthClass}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
