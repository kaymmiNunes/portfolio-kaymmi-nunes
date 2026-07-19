import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { Icon } from "../common/Icon";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>

      <h2>
        <Link to={`/projetos/${project.slug}`}>
          {project.shortTitle}
        </Link>
      </h2>

      <p>{project.summary}</p>

      <Link
        to={`/projetos/${project.slug}`}
        className="text-link"
        aria-label={`Conhecer o projeto ${project.title}`}
      >
        Ver projeto
        <Icon name="arrow" size={14} />
      </Link>
    </article>
  );
}