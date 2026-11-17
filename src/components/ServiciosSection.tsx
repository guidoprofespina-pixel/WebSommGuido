import React from 'react';

interface ServiciosSectionProps {
  onSelectSubject: (subjectValue: string) => void;
}

const PILARES = [
  {
    pilar: 'Pilar 01',
    icon: 'wine_bar',
    accent: 'primary',
    title: 'Catas Guiadas & Experiencias Sensoriales',
    desc: 'Degustaciones privadas, maridajes paso a paso, catas a ciegas didácticas y activaciones bilingües para clientes particulares y corporativos.',
    bullets: [
      'Catas temáticas: terroir, cepas patrimoniales, añadas históricas.',
      'Degustaciones privadas para eventos corporativos y reuniones exclusivas.',
      'Dinámica bilingüe (Español / Inglés) con método sistemático WSET.',
    ],
    ctaLabel: 'Agendar cata guiada',
    subjectValue: 'cata',
  },
  {
    pilar: 'Pilar 02',
    icon: 'restaurant_menu',
    accent: 'secondary',
    title: 'Curaduría de Cartas & Asesoramiento Enológico',
    desc: 'Diseño y actualización de cartas de vino para restaurantes y vinotecas, fichas técnicas de maridaje y capacitación a brigadas de salón.',
    bullets: [
      'Estructuración equilibrada de carta por regiones, estilos y rangos de precio.',
      'Diseño de maridajes gastronómicos adaptados a menús degustación.',
      'Capacitación técnica en servicio, descorche y temperatura para mozos.',
    ],
    ctaLabel: 'Consultar curaduría',
    subjectValue: 'carta',
  },
  {
    pilar: 'Pilar 03',
    icon: 'storefront',
    accent: 'primary',
    title: 'Sommelier en Sala & Venta Consultiva',
    desc: 'Atención experta en mostrador y salón: recomendación de etiquetas según perfil de gusto, fidelización y gestión operativa de cavas.',
    bullets: [
      'Asesoramiento cara a cara en tienda especializada y cavas boutique.',
      'Optimización de rotación de stock y control de temperatura de guarda.',
      'Vínculo y negociación directa con distribuidoras y bodegas proveedoras.',
    ],
    ctaLabel: 'Consultar servicio en sala',
    subjectValue: 'sala',
  },
  {
    pilar: 'Pilar 04',
    icon: 'edit_note',
    accent: 'secondary',
    title: 'Brand Ambassador & Divulgación en Medios',
    desc: 'Representación en ferias vitivinícolas, redacción de notas de cata y divulgación editorial bilingüe en Substack.',
    bullets: [
      'Embajada de bodegas en ferias, exposiciones y rondas enoturísticas.',
      'Elaboración de notas de cata y fichas descriptivas de producto en ES/EN.',
      'Artículos y ensayos independientes en medios y Substack (@vinoguido).',
    ],
    ctaLabel: 'Consultar divulgación',
    subjectValue: 'embajada',
  },
];

export const ServiciosSection: React.FC<ServiciosSectionProps> = ({
  onSelectSubject,
}) => {
  return (
    <section className="w-full py-space-xl" id="servicios-sommelier">
      <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-lg flex flex-col gap-space-lg">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Servicios Profesionales de Sommelierie
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Servicios de Sommelierie &amp; Consultoría Enológica
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Soluciones integrales de cata, curaduría, salón y comunicación estratégica para restaurantes, vinotecas, bodegas y amantes del vino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {PILARES.map((item) => {
            const isPrimary = item.accent === 'primary';
            return (
              <div
                key={item.pilar}
                className={`group bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-t-2 ${
                  isPrimary ? 'border-primary' : 'border-secondary'
                }`}
              >
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span
                      className={`w-10 h-10 rounded-full bg-surface-container flex items-center justify-center transition-colors ${
                        isPrimary
                          ? 'text-primary group-hover:bg-primary group-hover:text-on-primary'
                          : 'text-secondary group-hover:bg-secondary group-hover:text-on-secondary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {item.icon}
                      </span>
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                      {item.pilar}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {item.desc}
                  </p>

                  <ul className="flex flex-col gap-space-xs pt-space-xs">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-space-xs text-body-sm font-body-sm text-on-surface"
                      >
                        <span className="material-symbols-outlined text-secondary text-[16px] shrink-0">
                          check_circle
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-space-md">
                  <a
                    href="#contacto"
                    onClick={() => onSelectSubject(item.subjectValue)}
                    className="inline-flex items-center gap-space-xs text-primary font-title-md text-title-md group-hover:text-secondary transition-colors"
                  >
                    <span>{item.ctaLabel}</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
