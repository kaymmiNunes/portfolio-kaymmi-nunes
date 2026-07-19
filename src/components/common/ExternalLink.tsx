import type { ReactNode } from "react";
import { Icon } from "./Icon";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: boolean;
  ariaLabel?: string;
}

export function ExternalLink({
  href,
  children,
  className = "",
  icon = true,
  ariaLabel,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className || undefined}
      aria-label={ariaLabel}
    >
      {children}

      {icon && (
        <Icon
          name="external"
          size={13}
        />
      )}
    </a>
  );
}