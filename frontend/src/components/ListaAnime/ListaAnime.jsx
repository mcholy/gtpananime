import ElementoAnime from "../ElementoAnime/ElementoAnime";

function ListaAnime() {
  return (
    <section className="container2">
      <div className="anime">
        <div className="Titulo">
          {" "}
          <h2 id="tendencia">Zona.Anime</h2>{" "}
        </div>
        <ul className="anime-ul">
          <ElementoAnime />
        </ul>
      </div>
    </section>
  );
}

export default ListaAnime;
