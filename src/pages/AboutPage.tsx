import { DocumentTitle } from "../components/common/DocumentTitle";
import { profile } from "../data/profile";

export function AboutPage() {
  return (
    <>
      <DocumentTitle title="Sobre — Kaymmi Nunes" />
      <header className="page-header page-section">
        <p className="eyebrow">Trajetória e atuação</p>
        <h1>Sobre mim</h1>
        <p>{profile.summary}</p>
      </header>

      <section className="about-layout page-section">
        <div className="about-main">
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside className="about-aside">
          <p className="eyebrow">Áreas de atuação</p>
          <div className="chip-list chip-list--large">
            {profile.areas.map((area) => <span className="chip" key={area}>{area}</span>)}
          </div>
        </aside>
      </section>

      <section className="timeline page-section">
        <div className="section-heading">
          <p className="eyebrow">Formação e experiência</p>
          <h2>Uma trajetória multidisciplinar</h2>
        </div>
        <div className="timeline__items">
          <article>
            <span>Formação técnica</span>
            <h3>Técnico em Sistemas de Energia Renovável</h3>
            <p>Base em eletrônica, energia, automação, instrumentação e aplicação de soluções sustentáveis.</p>
          </article>
          <article>
            <span>Ensino superior</span>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>Formação voltada a programação, engenharia de software, banco de dados, desenvolvimento web e projetos de extensão.</p>
          </article>
          <article>
            <span>Atuação profissional</span>
            <h3>Professor no Ensino Médio Técnico em Informática</h3>
            <p>Desenvolvimento de atividades em programação, hardware, banco de dados, documentação técnica e projetos integradores STEAM.</p>
          </article>
          <article>
            <span>Desenvolvimento</span>
            <h3>Soluções web, full stack e IoT</h3>
            <p>Construção de projetos institucionais, comerciais, acadêmicos e experimentais, do levantamento à publicação.</p>
          </article>
        </div>
      </section>
    </>
  );
}
