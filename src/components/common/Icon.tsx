type IconName =
  | "home"
  | "projects"
  | "about"
  | "contact"
  | "github"
  | "linkedin"
  | "instagram"
  | "arrow"
  | "back"
  | "external";

interface IconProps {
  name: IconName;
  size?: number;
  decorative?: boolean;
}

export function Icon({ name, size = 22, decorative = true }: IconProps) {
  return (
    <img
      src={`/icons/${name}.svg`}
      width={size}
      height={size}
      alt={decorative ? "" : name}
      aria-hidden={decorative}
      className="icon"
    />
  );
}
