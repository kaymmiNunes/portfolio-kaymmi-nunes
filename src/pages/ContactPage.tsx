import { DocumentTitle } from "../components/common/DocumentTitle";
import { ExternalLink } from "../components/common/ExternalLink";
import { Icon } from "../components/common/Icon";
import { profile } from "../data/profile";

export function ContactPage() {
  const emailAddress = profile.socialLinks.email.replace(
    "mailto:",
    "",
  );

  return (
    <>
      <DocumentTitle title="Contato — Kaymmi Nunes" />

      <header className="page-header page-section">
        <p className="eyebrow">Vamos conversar</p>

        <h1>Contato</h1>

        <p>
          Para projetos, oportunidades profissionais,
          colaborações acadêmicas ou conversas sobre
          tecnologia e educação, utilize um dos canais
          abaixo.
        </p>
      </header>

      <section
        className="contact-list page-section"
        aria-label="Canais de contato"
      >
        <address className="contact-list__items">
          <a
            className="contact-item"
            href={profile.socialLinks.email}
            aria-label={`Enviar e-mail para ${emailAddress}`}
          >
            <span className="contact-item__label">
              E-mail
            </span>

            <div className="contact-item__body">
              <strong>{emailAddress}</strong>

              <p>
                Canal principal para projetos, propostas e
                oportunidades profissionais.
              </p>
            </div>

            <span
              className="contact-item__action"
              aria-hidden="true"
            >
              <Icon
                name="arrow"
                size={15}
              />
            </span>
          </a>

          <ExternalLink
            href={profile.socialLinks.github}
            className="contact-item"
            icon={false}
            ariaLabel="Acessar o GitHub de Kaymmi Nunes"
          >
            <span className="contact-item__label">
              GitHub
            </span>

            <div className="contact-item__body">
              <strong>@kaymmiNunes</strong>

              <p>
                Repositórios, códigos-fonte, documentação e
                projetos em desenvolvimento.
              </p>
            </div>

            <span
              className="contact-item__action"
              aria-hidden="true"
            >
              <Icon
                name="arrow"
                size={15}
              />
            </span>
          </ExternalLink>

          <ExternalLink
            href={profile.socialLinks.linkedin}
            className="contact-item"
            icon={false}
            ariaLabel="Acessar o LinkedIn de Kaymmi Nunes"
          >
            <span className="contact-item__label">
              LinkedIn
            </span>

            <div className="contact-item__body">
              <strong>Kaymmi Nunes</strong>

              <p>
                Formação, experiências, competências e
                conexões profissionais.
              </p>
            </div>

            <span
              className="contact-item__action"
              aria-hidden="true"
            >
              <Icon
                name="arrow"
                size={15}
              />
            </span>
          </ExternalLink>

          <ExternalLink
            href={profile.socialLinks.instagram}
            className="contact-item"
            icon={false}
            ariaLabel="Acessar o Instagram de Kaymmi Nunes"
          >
            <span className="contact-item__label">
              Instagram
            </span>

            <div className="contact-item__body">
              <strong>@kaymmi_n</strong>

              <p>
                Projetos, educação, tecnologia e atividades
                profissionais.
              </p>
            </div>

            <span
              className="contact-item__action"
              aria-hidden="true"
            >
              <Icon
                name="arrow"
                size={15}
              />
            </span>
          </ExternalLink>
        </address>
      </section>
    </>
  );
}