import { DocumentTitle } from "../components/common/DocumentTitle";
import { ProjectListItem } from "../components/projects/ProjectListItem";
import { projects } from "../data/projects";

export function ProjectsPage() {
  return (
    <>
      <DocumentTitle title="Projetos — Kaymmi Nunes" />

      <header className="page-header page-section">
        <p className="eyebrow">
          Portfólio de trabalhos
        </p>

        <h1>Projetos</h1>

        <p>
          Uma seleção de soluções comerciais, projetos
          acadêmicos, aplicações web, experiências de
          front-end e sistemas que integram hardware e
          software.
        </p>
      </header>

      <section
        className="projects-list page-section"
        aria-label="Lista de projetos"
      >
        {projects.map((project, index) => (
          <ProjectListItem
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </section>
    </>
  );
}