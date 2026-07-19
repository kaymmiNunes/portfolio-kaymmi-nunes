import { Link } from "react-router-dom";
import { DocumentTitle } from "../components/common/DocumentTitle";
import { ExternalLink } from "../components/common/ExternalLink";
import { Icon } from "../components/common/Icon";
import { ProjectCard } from "../components/projects/ProjectCard";
import { getFeaturedProjects } from "../data/projects";
import { profile } from "../data/profile";

export function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <DocumentTitle title="Kaymmi Nunes — Portfólio" />

      <section className="hero page-section">
        <p className="eyebrow">
          Desenvolvimento · Educação · Automação
        </p>

        <h1>{profile.shortName}</h1>

        <p className="hero__title">
          {profile.professionalTitle}
        </p>

        <p className="hero__description">
          {profile.introduction}
        </p>

        <div className="hero__actions">
          <Link
            className="button button--primary"
            to="/projetos"
          >
            Conhecer projetos
            <Icon name="arrow" size={14} />
          </Link>

          <Link
            className="button button--ghost"
            to="/sobre"
          >
            Sobre mim
          </Link>
        </div>

        <div
          className="social-links"
          aria-label="Redes sociais"
        >
          <ExternalLink
            href={profile.socialLinks.github}
            className="social-link"
            icon={false}
          >
            <Icon name="github" size={13} />
            GitHub
          </ExternalLink>

          <ExternalLink
            href={profile.socialLinks.linkedin}
            className="social-link"
            icon={false}
          >
            <Icon name="linkedin" size={13} />
            LinkedIn
          </ExternalLink>

          <ExternalLink
            href={profile.socialLinks.instagram}
            className="social-link"
            icon={false}
          >
            <Icon name="instagram" size={13} />
            Instagram
          </ExternalLink>
        </div>
      </section>

      <section className="page-section home-intro reveal">
        <div className="section-heading">
          <p className="eyebrow">
            Perfil profissional
          </p>

          <h2>
            Tecnologia aplicada a contextos reais
          </h2>
        </div>

        <div className="two-column-text">
          <p>{profile.summary}</p>

          <p>
            Meus trabalhos transitam entre aplicações web,
            projetos comerciais, educação tecnológica,
            Internet das Coisas e integração entre hardware
            e software.
          </p>
        </div>
      </section>

      <section className="page-section reveal">
        <div className="section-heading section-heading--inline">
          <div>
            <p className="eyebrow">
              Trabalhos selecionados
            </p>

            <h2>Projetos em destaque</h2>
          </div>

          <Link
            to="/projetos"
            className="text-link"
          >
            Ver todos
            <Icon name="arrow" size={14} />
          </Link>
        </div>

        <div className="featured-grid">
          {featuredProjects
            .slice(0, 4)
            .map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
        </div>
      </section>

      <section className="page-section callout reveal">
        <p className="eyebrow">
          Contato profissional
        </p>

        <h2>
          Tem uma ideia, projeto ou oportunidade?
        </h2>

        <p>
          Estou disponível para conversar sobre
          desenvolvimento, educação tecnológica, automação
          e colaboração em projetos.
        </p>

        <Link
          to="/contato"
          className="button button--primary"
        >
          Entrar em contato
          <Icon name="arrow" size={14} />
        </Link>
      </section>
    </>
  );
}