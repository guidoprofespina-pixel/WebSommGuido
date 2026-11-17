import React from 'react';

export const CertificacionesSection: React.FC = () => {
  return (
    <section
      className="w-full bg-surface-container-low py-space-xl"
      id="certificaciones"
    >
      <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-lg flex flex-col gap-space-lg">
        <div className="flex flex-col gap-space-xs text-center max-w-2xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Formación Académica &amp; Enológica
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Certificaciones de Prestigio Internacional
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Respaldo formal de instituciones globales en el ámbito de la viticultura, análisis sensorial, idiomas y sistemas informáticos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Card 1: WSET Level 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col justify-between gap-space-md border-2 border-secondary relative overflow-hidden">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    workspace_premium
                  </span>
                </div>
                <span className="px-space-xs py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-[10px] font-bold uppercase tracking-wider">
                  Certificación Principal
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider pt-space-xs">
                Estándar Internacional • Londres
              </span>
              <h3 className="font-title-lg text-title-lg text-primary font-bold">
                WSET Level 2 Award in Wines
              </h3>
              <p className="font-body-sm text-body-sm text-secondary font-bold">
                Wine &amp; Spirit Education Trust (Londres)
              </p>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Certificación de máxima validez global sobre principales variedades de uva, estilos enológicos del mundo y metodología sistemática de cata profesional.
            </p>
          </div>

          {/* Card 2: Cambridge ESOL */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-md border-t-2 border-primary">
            <div className="flex flex-col gap-space-xs">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">
                  translate
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider pt-space-xs">
                2016 • Nivel C1 Advanced
              </span>
              <h3 className="font-title-lg text-title-lg text-primary">
                Cambridge ESOL International
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                University of Cambridge
              </p>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Competencia comunicativa y de negociación en inglés profesional orientado a acuerdos comerciales internacionales y misiones de exportación.
            </p>
          </div>

          {/* Card 3: Diplomatura */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-md border-t-2 border-primary">
            <div className="flex flex-col gap-space-xs">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">
                  school
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider pt-space-xs">
                Formación Complementaria
              </span>
              <h3 className="font-title-lg text-title-lg text-primary">
                Diplomatura en Viticultura, Enología y Cata
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Instituto Superior de Enseñanza (ISE)
              </p>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Técnicas agronómicas de viñedo, vinificación en bodega y metodología de análisis sensorial complementario.
            </p>
          </div>

          {/* Card 4: Técnico en Informática */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between gap-space-md border-t-2 border-secondary">
            <div className="flex flex-col gap-space-xs">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[20px]">
                  devices
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider pt-space-xs">
                2010 – 2017 • Graduado
              </span>
              <h3 className="font-title-lg text-title-lg text-primary">
                Técnico en Informática Personal
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Escuela ETP Nº 728
              </p>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Base analítica para sistematización de datos, control digital de stocks y adaptación de herramientas tecnológicas a la gestión de bodegas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
