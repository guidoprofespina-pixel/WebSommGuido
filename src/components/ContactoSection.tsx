import React, { useState } from 'react';

interface ContactoSectionProps {
  selectedSubject: string;
  onSubjectChange: (value: string) => void;
}

const SUBJECT_LABELS: Record<string, string> = {
  cata: 'Cata Guiada / Evento Privado',
  carta: 'Curaduría de Carta de Vinos',
  sala: 'Asesoramiento en Sala / Vinoteca',
  embajada: 'Brand Ambassador / Divulgación',
  otra: 'Otra Consulta Enológica',
};

export const ContactoSection: React.FC<ContactoSectionProps> = ({
  selectedSubject,
  onSubjectChange,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSending(true);
    setError(false);
    setSubmitted(false);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Consulta web (${SUBJECT_LABELS[selectedSubject] ?? selectedSubject}) - ${name}`,
          from_name: 'Portafolio Guido Spina',
          name,
          email,
          empresa: company || 'No indicado',
          tipo_consulta: SUBJECT_LABELS[selectedSubject] ?? selectedSubject,
          message,
          botcheck,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setName('');
        setCompany('');
        setEmail('');
        setMessage('');
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="w-full py-space-xl" id="contacto">
      <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-lg flex flex-col gap-space-lg">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Canal Directo
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Contacto Directo &amp; Consultas Enológicas
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Inicie una conversación sobre curaduría de cartas, cata privada, consultoría para tiendas o asesoramiento enológico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm">
            <form
              className="flex flex-col gap-space-md"
              id="portfolio-contact-form"
              onSubmit={handleSubmit}
            >
              {/* Honeypot antispam (oculto) */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                checked={botcheck}
                onChange={(e) => setBotcheck(e.target.checked)}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface"
                    htmlFor="name"
                  >
                    Nombre y Apellido *
                  </label>
                  <input
                    className="w-full bg-surface-container px-space-sm py-space-xs rounded font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                    id="name"
                    placeholder="Ej: Santiago Rossi"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface"
                    htmlFor="company"
                  >
                    Restaurante, Vinoteca o Proyecto
                  </label>
                  <input
                    className="w-full bg-surface-container px-space-sm py-space-xs rounded font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                    id="company"
                    placeholder="Ej: Restaurante / Vinoteca / Particular"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface"
                    htmlFor="email"
                  >
                    Email de Contacto *
                  </label>
                  <input
                    className="w-full bg-surface-container px-space-sm py-space-xs rounded font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                    id="email"
                    placeholder="contacto@empresa.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface"
                    htmlFor="subject"
                  >
                    Tipo de Consulta *
                  </label>
                  <select
                    className="w-full bg-surface-container px-space-sm py-space-xs rounded font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                    id="subject"
                    value={selectedSubject}
                    onChange={(e) => onSubjectChange(e.target.value)}
                  >
                    <option value="cata">Cata Guiada / Evento Privado</option>
                    <option value="carta">Curaduría de Carta de Vinos</option>
                    <option value="sala">Asesoramiento en Sala / Vinoteca</option>
                    <option value="embajada">Brand Ambassador / Divulgación</option>
                    <option value="otra">Otra Consulta Enológica</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-space-xs">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface"
                  htmlFor="message"
                >
                  Mensaje o Detalle del Proyecto *
                </label>
                <textarea
                  className="w-full bg-surface-container px-space-sm py-space-xs rounded font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                  id="message"
                  placeholder="Indique características de su espacio, fecha estimada de evento o requerimientos de curaduría..."
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg rounded shadow-md transition-all self-start cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
                disabled={sending}
              >
                <span>{sending ? 'Enviando...' : 'Enviar Consulta Enológica'}</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>

              {submitted && (
                <div
                  className="p-space-sm rounded bg-surface-container-high text-primary font-body-sm text-body-sm flex items-center gap-space-xs"
                  id="form-success-banner"
                >
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  <span>
                    Mensaje enviado con éxito. Guido Spina se contactará a la brevedad.
                  </span>
                </div>
              )}

              {error && (
                <div
                  className="p-space-sm rounded bg-error-container text-on-error-container font-body-sm text-body-sm flex items-center gap-space-xs"
                  id="form-error-banner"
                >
                  <span className="material-symbols-outlined">error</span>
                  <span>
                    No se pudo enviar el mensaje. Escribí a guidospina@gmail.com o por WhatsApp.
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Direct Contact Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                Líneas Directas
              </span>

              <a
                className="flex items-center gap-space-sm p-space-xs rounded-lg hover:bg-surface-container transition-colors"
                href="mailto:guidospina@gmail.com"
              >
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Correo Electrónico
                  </span>
                  <span className="font-title-md text-title-md text-primary">
                    guidospina@gmail.com
                  </span>
                </div>
              </a>

              <a
                className="flex items-center gap-space-sm p-space-xs rounded-lg hover:bg-surface-container transition-colors"
                href="https://wa.me/5492804816470"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    chat
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    WhatsApp &amp; Teléfono
                  </span>
                  <span className="font-title-md text-title-md text-primary">
                    +54 9 280 4816470
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-space-sm p-space-xs rounded-lg">
                <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    pin_drop
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Ubicación &amp; Operaciones
                  </span>
                  <span className="font-body-md text-body-md text-on-surface">
                    Argentina (Disponible para misiones internacionales)
                  </span>
                </div>
              </div>
            </div>

            {/* Availability & Mode Card */}
            <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase font-bold">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span>Modalidad &amp; Disponibilidad</span>
              </div>
              <p className="font-title-md text-title-md text-primary">
                Sesiones Virtuales &amp; Catas Presenciales
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Coordinación de asesorías de cartas y maridaje vía virtual y presencia en cavas, salones gastronómicos, bodegas y degustaciones corporativas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
