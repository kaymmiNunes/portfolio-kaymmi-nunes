import { useEffect, useState } from "react";

const VISIBILITY_OFFSET = 320;

function prefersReducedMotion(): boolean {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(
        window.scrollY > VISIBILITY_OFFSET,
      );
    }

    updateVisibility();

    window.addEventListener(
      "scroll",
      updateVisibility,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateVisibility,
      );
    };
  }, []);

  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion()
        ? "auto"
        : "smooth",
    });
  }

  const className = isVisible
    ? "back-to-top back-to-top--visible"
    : "back-to-top";

  return (
    <button
      type="button"
      className={className}
      onClick={handleBackToTop}
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
    >
      <svg
        viewBox="0 0 24 24"
        width="17"
        height="17"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M6 15L12 9L18 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}