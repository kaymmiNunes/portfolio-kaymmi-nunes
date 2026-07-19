import { NavLink } from "react-router-dom";
import { Icon } from "../common/Icon";

const navigationItems = [
  {
    to: "/",
    label: "Início",
    icon: "home",
    end: true,
  },
  {
    to: "/projetos",
    label: "Projetos",
    icon: "projects",
    end: false,
  },
  {
    to: "/sobre",
    label: "Sobre",
    icon: "about",
    end: false,
  },
  {
    to: "/contato",
    label: "Contato",
    icon: "contact",
    end: false,
  },
] as const;

export function Sidebar() {
  return (
    <header className="sidebar-header">
      <nav className="menu-nav" aria-label="Navegação principal">
        {navigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive ? "active-link" : undefined
            }
            aria-label={item.label}
          >
            <Icon name={item.icon} size={16} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}