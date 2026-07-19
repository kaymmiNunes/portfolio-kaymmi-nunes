import type { ReactNode } from "react";
import { BackToTop } from "../common/BackToTop";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({
  children,
}: LayoutProps) {
  return (
    <div className="site-shell">
      <main className="site-main">
        {children}
      </main>

      <Sidebar />
      <BackToTop />
    </div>
  );
}