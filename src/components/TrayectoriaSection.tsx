import React from 'react';

export const TrayectoriaSection: React.FC = () => {
  return (
    <section
      className="w-full bg-surface-container-low py-space-xl"
      id="trayectoria"
    >
      <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-lg flex flex-col gap-space-lg">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Experiencia Real &amp; Trayectoria
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Experiencia Profesional Ejecutiva
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Recorrido consolidado y honesto en el servicio en sala, divulgación independiente bilingüe y gestión física de cavas y tiendas de vino.
          </p>
        </div>

        <div className="relative flex flex-col gap-space-md">
          {/* Card 1: 2025 - Presente */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm flex flex-col md:flex-row gap-space-md justify-between items-start border-t-2 border-secondary">
            <div className="flex flex-col gap-space-xs max-w-3xl">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="px-space-sm py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                  2025 – Presente
                </span>
                <span className="px-space-sm py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  Actual
                </span>
                <span className="text-on-surface-variant font-label-md text-label-md">
                  Remoto · Publicaciones Internacionales
                </span>
                <a
                  className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-surface-container text-primary hover:bg-secondary-container hover:text-on-secondary-container font-label-sm text-label-sm transition-colors"
                  href="https://substack.com/@vinoguido"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    open_in_new
                  </span>
                  <span>substack.com/@vinoguido</span>
                </a>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-primary pt-space-xs">
                Escritor Independiente – Substack · Pipette Magazine · BK Wine Magazine
              </h3>

              <ul className="flex flex-col gap-space-xs pt-space-xs text-body-md text-on-surface-variant">
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[16px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    Redacción y publicación de artículos originales sobre vino, cultura, filosofía y comunidad para una audiencia internacional.
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[16px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    Investigación y análisis de tendencias en el mundo del vino, enoturismo y hospitalidad.
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[16px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    Desarrollo de ensayos y crónicas que conectan el vino con temas sociales, culturales y de viajes.
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[16px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    Producción de contenido en inglés y español, para revistas especializadas internacionales de la industria y comunicación accesible para públicos especializados y no especializados.
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-space-xs pt-space-sm">
                <span className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Ensayos &amp; Storytelling
                </span>
                <span className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Análisis Enológico Global
                </span>
                <span className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Publicaciones Bilingües (ES/EN)
                </span>
                <span className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Divulgación Digital
                </span>
              </div>
            </div>

            <div className="w-full md:w-56 shrink-0 bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                Aporte &amp; Alcance
              </span>
              <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  public
                </span>
                <span>Audiencia Internacional</span>
              </div>
              <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  history_edu
                </span>
                <span>Storytelling &amp; Ensayos</span>
              </div>
              <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  translate
                </span>
                <span>Cobertura Bilingüe ES/EN</span>
              </div>
              <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  rss_feed
                </span>
                <span>Divulgación Digital</span>
              </div>
            </div>
          </div>

          {/* Card 2: 2021 - Presente */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm flex flex-col md:flex-row gap-space-md justify-between items-start">
            <div className="flex flex-col gap-space-xs max-w-3xl">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="px-space-sm py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                  2021 – Presente
                </span>
                <span className="px-space-sm py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  Actual
                </span>
                <span className="text-on-surface-variant font-label-md text-label-md">
                  Actividad Independiente &amp; Eventos
                </span>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-primary pt-space-xs">
                Sommelier, Catas Guiadas &amp; Divulgación Enológica
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">
                Diseño y conducción de experiencias sensoriales y degustaciones guiadas para grupos privados, eventos corporativos y aficionados del vino. Transmisión accesible de estilos, varietales y maridajes con criterio WSET, acercando el relato de bodegas y productores al consumidor final de forma auténtica.
              </p>

              <div className="flex flex-wrap gap-space-xs pt-space-sm">
                <span className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Catas Guiadas &amp; Maridajes
                </span>
                <span className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Educación Enológica WSET
                </span>
                <span className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Presentaciones Bilingües (EN/ES)
                </span>
                <span className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Comunicación de Etiquetas
                </span>
              </div>
            </div>

            <div className="w-full md:w-56 shrink-0 bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                Enfoque Clave
              </span>
              <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  wine_bar
                </span>
                <span>Catas temáticas a medida</span>
              </div>
              <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  menu_book
                </span>
                <span>Pedagogía sensorial clara</span>
              </div>
              <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  translate
                </span>
                <span>Sesiones en inglés y español</span>
              </div>
            </div>
          </div>

          {/* Card 3: 2019 - 2021 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm flex flex-col md:flex-row gap-space-md justify-between items-start">
            <div className="flex flex-col gap-space-xs max-w-3xl">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="px-space-sm py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                  2019 – 2021
                </span>
                <span className="text-on-surface-variant font-label-md text-label-md">
                  Experiencia Presencial · Vinoteca Especializada
                </span>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-primary pt-space-xs">
                Atención en Cava, Venta en Vinoteca &amp; Gestión de Stock
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">
                Atención directa en mostrador y salón en tienda especializada de vinos. Asesoramiento personalizado a consumidores en la elección de varietales y maridajes, gestión física del stock en cava, control de rotación de etiquetas en estantería, recepción y coordinación de pedidos con proveedores y bodegas.
              </p>

              <div className="flex flex-wrap gap-space-xs pt-space-sm">
                <span className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Venta Consultiva en Mostrador
                </span>
                <span className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Asesoramiento al Consumidor
                </span>
                <span className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Control de Stock e Inventario
                </span>
                <span className="px-space-sm py-space-xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                  Trato Directo con Proveedores
                </span>
              </div>
            </div>

            <div className="w-full md:w-56 shrink-0 bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                Aporte Concreto
              </span>
              <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  sentiment_satisfied
                </span>
                <span>Fidelización en salón</span>
              </div>
              <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  inventory_2
                </span>
                <span>Rotación y orden en cava</span>
              </div>
              <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  local_shipping
                </span>
                <span>Coordinación de entregas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
