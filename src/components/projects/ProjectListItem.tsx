import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { Icon } from "../common/Icon";

interface ProjectListItemProps {
  project: Project;
  index: number;
}

export function ProjectListItem({
  project,
  index,
}: ProjectListItemProps) {
  const projectNumber = String(index + 1).padStart(
    2,
    "0",
  );

  const projectUrl = `/projetos/${project.slug}`;

  return (
    <article className="project-list-item">
      <div
        className="project-list-item__number"
        aria-hidden="true"
      >
        {projectNumber}
      </div>

      <div className="project-list-item__content">
        <p className="eyebrow">
          {project.category} · {project.year}
        </p>

        <h2>
          <Link to={projectUrl}>
            {project.title}
          </Link>
        </h2>

        <p>{project.summary}</p>

        <div
          className="chip-list"
          aria-label={`Principais tecnologias do projeto ${project.title}`}
        >
          {project.technologies
            .slice(0, 5)
            .map((technology) => (
              <span
                className="chip"
                key={technology}
              >
                {technology}
              </span>
            ))}
        </div>
      </div>

      <Link
        className="project-list-item__arrow"
        to={projectUrl}
        aria-label={`Abrir projeto ${project.title}`}
      >
        <Icon
          name="arrow"
          size={15}
        />
      </Link>
    </article>
  );
}