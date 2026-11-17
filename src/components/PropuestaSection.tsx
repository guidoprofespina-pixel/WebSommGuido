import React from 'react';

export const PropuestaSection: React.FC = () => {
  return (
    <section
      className="w-full bg-surface-container-low py-space-xl"
      id="propuesta-de-valor"
    >
      <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-lg flex flex-col gap-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Criterio Enológico &amp; Servicio
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              El Rigor de la Cata y la Pasión del Servicio al Consumidor
            </h2>
            <p className="font-title-md text-title-md text-secondary">
              El sommelier como puente vivo entre el viñedo, el hacedor y la copa.
            </p>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
            Metodología de cata sistemática WSET, sensibilidad para armonizar alimentos y bebidas, y solvencia técnica para gestionar cavas comerciales con rigor.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          <div className="lg:col-span-8 flex flex-col gap-space-sm">
            <span className="font-title-lg text-title-lg text-primary">
              Cata Analítica, Sensibilidad de Sala y Divulgación Bilingüe
            </span>
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              Mi enfoque en la sommelerie se fundamenta en la cata analítica objetiva bajo la metodología internacional{' '}
              <span className="font-title-md text-primary font-bold underline decoration-secondary">
                WSET Level 2 Award in Wines (Londres)
              </span>
              : evaluación rigurosa de acidez, taninos, alcohol, balance organoléptico, tipicidad varietal y potencial de guarda en botella. Este criterio técnico se complementa con mi formación en viticultura y enología y con un sólido trasfondo analítico como{' '}
              <span className="font-title-md text-on-surface-variant">
                Técnico en Informática
              </span>
              .
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              En el terreno práctico, mi experiencia en cava y mostrador en tiendas especializadas me ha dado un dominio real de la rotación de stock, la preservación térmica y lumínica de botellas de guarda, el trato con distribuidores y, sobre todo, la empatía enológica para recomendar la etiqueta indicada para cada comensal. A través de mis ensayos y crónicas en{' '}
              <span className="font-title-md text-primary font-bold">
                Substack (@vinoguido)
              </span>
              , acerco la cultura del vino a lectores de todo el mundo con voz propia y fluidez bilingüe (
              <span className="font-title-md text-secondary font-bold">
                Cambridge C1
              </span>
              ).
            </p>
          </div>

          <div className="lg:col-span-4 bg-surface-container rounded-lg p-space-md flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              Convergencia Diferencial
            </span>

            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[28px]">
                workspace_premium
              </span>
              <div>
                <p className="font-title-md text-title-md text-primary font-bold">
                  WSET Level 2 &amp; Enología
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Aval internacional en cata sistemática, estilos del mundo y terroir.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[28px]">
                restaurant_menu
              </span>
              <div>
                <p className="font-title-md text-title-md text-on-surface">
                  Curaduría &amp; Servicio
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Selección de etiquetas para gastronomía, tiendas y coleccionistas.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[28px]">
                terminal
              </span>
              <div>
                <p className="font-title-md text-title-md text-on-surface">
                  Criterio Analítico &amp; IT
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Sistematización de inventarios, cavas y trazabilidad.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[28px]">
                edit_note
              </span>
              <div>
                <p className="font-title-md text-title-md text-on-surface">
                  Escritura &amp; Storytelling
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Crónicas de cata y ensayos enológicos bilingües en Substack.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">
                wine_bar
              </span>
            </div>
            <h3 className="font-title-lg text-title-lg text-primary">
              Cata Sistemática &amp; Análisis Sensorial
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Metodología WSET, detección de tipicidad, descriptores aromáticos precisos, evaluación de defectos y estimación de potencial de guarda.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">
                menu_book
              </span>
            </div>
            <h3 className="font-title-lg text-title-lg text-primary">
              Curaduría de Cartas &amp; Maridaje
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Diseño de cartas para restaurantes y vinotecas, armonización plato-copa por contraste o afinidad y selección de pequeños productores.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">
                shelves
              </span>
            </div>
            <h3 className="font-title-lg text-title-lg text-primary">
              Gestión de Cavas &amp; Hospitalidad
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Rotación de etiquetas, control riguroso de temperatura y humedad, preservación de botellas y excelencia en el servicio de salón.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">
                history_edu
              </span>
            </div>
            <h3 className="font-title-lg text-title-lg text-primary">
              Divulgación &amp; Catas Educativas
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Degustaciones guiadas amenas y rigurosas, comunicación enológica cercana y crónicas bilingües de impacto cultural en medios y Substack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
