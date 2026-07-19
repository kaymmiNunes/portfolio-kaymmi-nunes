import { useEffect } from "react";

const SITE_URL =
  "https://portfolio-kaymmi-nunes.pages.dev";

const DEFAULT_DESCRIPTION =
  "Portfólio de Kaymmi Nunes Barbosa: desenvolvimento web, aplicações full stack, automação, IoT, educação tecnológica e sistemas embarcados.";

const DEFAULT_IMAGE = `${SITE_URL}/og-cover.webp`;

interface DocumentTitleProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}

function getAbsoluteUrl(value: string): string {
  try {
    return new URL(value, SITE_URL).toString();
  } catch {
    return SITE_URL;
  }
}

function updateMetaTag(
  selector: string,
  attributeName: "name" | "property",
  attributeValue: string,
  content: string,
): void {
  let element =
    document.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(
      attributeName,
      attributeValue,
    );

    document.head.appendChild(element);
  }

  element.content = content;
}

function updateCanonicalLink(url: string): void {
  let element =
    document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";

    document.head.appendChild(element);
  }

  element.href = url;
}

export function DocumentTitle({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_IMAGE,
}: DocumentTitleProps) {
  useEffect(() => {
    const currentPath =
      path ?? window.location.pathname;

    const pageUrl = getAbsoluteUrl(currentPath);
    const imageUrl = getAbsoluteUrl(image);

    document.title = title;

    updateMetaTag(
      'meta[name="description"]',
      "name",
      "description",
      description,
    );

    updateMetaTag(
      'meta[property="og:title"]',
      "property",
      "og:title",
      title,
    );

    updateMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description,
    );

    updateMetaTag(
      'meta[property="og:url"]',
      "property",
      "og:url",
      pageUrl,
    );

    updateMetaTag(
      'meta[property="og:image"]',
      "property",
      "og:image",
      imageUrl,
    );

    updateMetaTag(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      title,
    );

    updateMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description,
    );

    updateMetaTag(
      'meta[name="twitter:image"]',
      "name",
      "twitter:image",
      imageUrl,
    );

    updateCanonicalLink(pageUrl);
  }, [description, image, path, title]);

  return null;
}