import { Link } from "react-router-dom";
import { DocumentTitle } from "../components/common/DocumentTitle";
import { Icon } from "../components/common/Icon";

export function NotFoundPage() {
  return (
    <section className="not-found page-section">
      <DocumentTitle title="Página não encontrada — Kaymmi Nunes" />
      <p className="eyebrow">Erro 404</p>
      <h1>Página não encontrada</h1>
      <p>O endereço informado não corresponde a uma página deste portfólio.</p>
      <Link to="/" className="button button--primary">Voltar ao início <Icon name="arrow" size={18} /></Link>
    </section>
  );
}
