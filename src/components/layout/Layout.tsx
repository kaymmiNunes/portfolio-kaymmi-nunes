import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <main className="site-main">{children}</main>
      <Sidebar />
    </div>
  );
}
