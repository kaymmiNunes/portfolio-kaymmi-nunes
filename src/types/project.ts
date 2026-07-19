export type ProjectStatus =
  | "Publicado"
  | "Publicado e em evolução"
  | "Projeto acadêmico"
  | "Em desenvolvimento";

export type ProjectLinkType = "demo" | "repository";

export interface ProjectLink {
  label: string;
  href: string;
  type: ProjectLinkType;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  year: number;
  status: ProjectStatus;
  featured: boolean;

  summary: string;
  description: string[];
  objective: string;

  roles: string[];
  technologies: string[];
  features: string[];
  highlights: string[];

  links: ProjectLink[];

  coverImage: string;

  deployment?: string[];
  collaborators?: string[];
}