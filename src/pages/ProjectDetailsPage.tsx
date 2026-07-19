import { Link, useParams } from "react-router-dom";
import { DocumentTitle } from "../components/common/DocumentTitle";
import { ExternalLink } from "../components/common/ExternalLink";
import { Icon } from "../components/common/Icon";
import {
  getProjectBySlug,
  projects,
} from "../data/projects";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectDetailsPage() {
  const { slug = "" } = useParams();

  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const currentProjectIndex = projects.findIndex(
    (item) => item.slug === project.slug,
  );

  const nextProjectIndex =
    (currentProjectIndex + 1) % projects.length;

  const nextProject = projects[nextProjectIndex];

  return (
    <>
      <DocumentTitle
        title={`${project.shortTitle} — Kaymmi Nunes`}
      />

      <article className="project-detail">
        <header className="project-detail__header page-section">
          <Link
            to="/projetos"
            className="back-link"
          >
            <Icon
              name="back"
              size={14}
            />

            Todos os projetos
          </Link>

          <p className="eyebrow">
            {project.category} · {project.year}
          </p>

          <h1>{project.title}</h1>

          <p className="project-detail__lead">
            {project.summary}
          </p>

          <div className="project-detail__links">
            {project.links.map((link) => {
              const isRepository =
                link.type === "repository";

              return (
                <ExternalLink
                  key={link.href}
                  href={link.href}
                  icon={false}
                  ariaLabel={`${link.label}: ${project.title}`}
                  className={
                    link.type === "demo"
                      ? "button button--primary"
                      : "button button--ghost"
                  }
                >
                  {link.label}

                  <Icon
                    name={
                      isRepository
                        ? "github"
                        : "external"
                    }
                    size={13}
                  />
                </ExternalLink>
              );
            })}
          </div>
        </header>

        <figure className="project-detail__cover page-section">
          <img
            src={project.coverImage}
            alt={`Captura de tela do projeto ${project.title}`}
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
          />

          <figcaption>
            Interface do projeto {project.shortTitle}
          </figcaption>
        </figure>

        <div className="project-detail__content page-section">
          <aside
            className="project-facts"
            aria-label="Informações do projeto"
          >
            <div>
              <span>Status</span>
              <strong>{project.status}</strong>
            </div>

            <div>
              <span>Ano</span>
              <strong>{project.year}</strong>
            </div>

            <div>
              <span>Categoria</span>
              <strong>{project.category}</strong>
            </div>

            {project.collaborators &&
              project.collaborators.length > 0 && (
                <div>
                  <span>Colaboração</span>

                  <strong>
                    {project.collaborators.join(", ")}
                  </strong>
                </div>
              )}
          </aside>

          <div className="project-story">
            <section>
              <p className="eyebrow">Contexto</p>
              <h2>Sobre o projeto</h2>

              {project.description.map(
                (paragraph, index) => (
                  <p
                    key={`${project.slug}-description-${index}`}
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </section>

            <section>
              <p className="eyebrow">Direcionamento</p>
              <h2>Objetivo</h2>

              <p>{project.objective}</p>
            </section>

            <section className="detail-grid">
              <div>
                <p className="eyebrow">Participação</p>
                <h2>Minha atuação</h2>

                <ul>
                  {project.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="eyebrow">Implementação</p>
                <h2>Funcionalidades</h2>

                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <p className="eyebrow">Tecnologias</p>
              <h2>Stack utilizada</h2>

              <div className="chip-list chip-list--large">
                {project.technologies.map(
                  (technology) => (
                    <span
                      className="chip"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </section>

            <section>
              <p className="eyebrow">Destaques</p>
              <h2>Resultados e diferenciais</h2>

              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>
                    {highlight}
                  </li>
                ))}
              </ul>

              {project.deployment &&
                project.deployment.length > 0 && (
                  <div className="deployment-note">
                    <strong>Publicação:</strong>{" "}
                    {project.deployment.join(" · ")}
                  </div>
                )}
            </section>
          </div>
        </div>

        <footer className="next-project page-section">
          <p className="eyebrow">
            Próximo projeto
          </p>

          <Link
            to={`/projetos/${nextProject.slug}`}
            aria-label={`Abrir próximo projeto: ${nextProject.title}`}
          >
            <span>{nextProject.shortTitle}</span>

            <Icon
              name="arrow"
              size={20}
            />
          </Link>
        </footer>
      </article>
    </>
  );
}