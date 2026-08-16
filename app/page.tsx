const Arrow = () => (
  <span aria-hidden="true" className="arrow">
    ›
  </span>
);

export default function Home() {
  return (
    <main className="page">
      <div className="top-band">
        <span>REPUBLICANOS</span>
      </div>
      <section className="card">
        <div className="photo-wrap">
          <img
            className="profile-photo"
            src="/images/augusto-azevedo.jpg"
            alt="Foto oficial do vereador Augusto Azevedo"
          />
        </div>

        <div className="identity">
          <p className="location">BOA VISTA DO RAMOS • AM</p>
          <h1>Augusto Azevedo</h1>
          <h2>Vereador</h2>
        </div>

        <p className="bio">
          Vereador de Boa Vista do Ramos pelo Republicanos, Augusto Azevedo da
          Silva atua com diálogo, responsabilidade e compromisso, defendendo
          melhorias para a sede e as comunidades do município.
        </p>

        <div className="links" aria-label="Links do vereador">
          <a href="#biografia">
            <span className="icon">👤</span>
            <strong>Conheça minha biografia</strong>
            <Arrow />
          </a>
          <a
            href="https://www.facebook.com/augustinho.azevedo.2025"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon facebook">f</span>
            <strong>Acompanhe no Facebook</strong>
            <Arrow />
          </a>
          <a
            href="https://www.instagram.com/vereador.augustinho_azevedo/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon instagram">◎</span>
            <strong>Siga no Instagram</strong>
            <Arrow />
          </a>
        </div>

        <section className="about" id="biografia">
          <span className="mini-title">BIOGRAFIA</span>
          <h3>Compromisso com nossa gente</h3>
          <p>
            Seu mandato é pautado pela escuta da população, pela fiscalização
            dos serviços públicos e pela apresentação de propostas que
            contribuam para o desenvolvimento de Boa Vista do Ramos.
          </p>
        </section>

        <blockquote>
          “Trabalho, diálogo e compromisso com nossa gente.”
        </blockquote>
      </section>
      <footer>
        <strong>Augusto Azevedo</strong>
        <span>Vereador • Republicanos</span>
        <small>© 2026 • Boa Vista do Ramos, Amazonas</small>
        <p className="developer-credit">
          Desenvolvido por <b>DSO Tech &amp; Solutions</b>
        </p>
      </footer>
    </main>
  );
}
