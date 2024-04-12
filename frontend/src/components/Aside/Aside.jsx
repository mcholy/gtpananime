
function Aside() {
  return (
    <section className="container1 aside">
    <div className="news">
      <div className="news-container">
        <i className="fa-solid fa-shield-halved"></i>
        <div className="news-container-block">
          <div className="news-container_security">AdBlock</div>
          <div className="news-container_text">
            Para una mejor experiencia
          </div>
        </div>
      </div>

      <div className="news-container_buttons">
        <button
          onClick="window.location.href='https://chrome.google.com/webstore/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom?hl=es'"
          className="news-container_button curser"
        >
          Probar Ahora
        </button>
      </div>
    </div>

    <div className="aplicacion">
      <div className="container-app">
        <i className="fa-solid fa-circle-down"></i>
        <div className="container-app-text">
          <div className="container-app-titulo">GTPananime-App</div>
          <div className="container-app-subtext">
            Aplicacion para escritorio
          </div>
        </div>
      </div>

      <div className="aplicacion-container_buttons">
        <button
          onClick="window.open('https://mega.nz/file/XdsFQKRA#Qys5HCtJ5QDUVAkO_JUezO8KNH5usO-BsEgoP38x_5Y', '_blank');"
          className="aplicacion-container_button curser"
        >
          Descargar
        </button>
      </div>
    </div>

    <div className="crearcomunity">
      <div className="crearcomunity-img"></div>

      <div className="crearcomunity-titulo">
        <div className="crearcomunity-titulo_img"></div>
        <div className="crearcomunity-titulo_text">Home</div>
      </div>

      <div className="crearcomunity-parrafo">
        Tu portada personal de GTPananime. Ven aquí para consultar con tus
        comunidades favoritas. dame uno personalizado{" "}
      </div>
      <hr className="crearcomunity-barra" />

      <section className="crearcomunity-botones">
        <div className="crearcomunity-buttons">
          <button
            onClick="window.location.href='https://www.reddit.com/submit'"
            className="crearcomunity-button crear-publi  curser"
          >
            Crear Publicacion
          </button>
        </div>
        <div className="crearcomunity-buttons box2">
          <button
            onClick="window.location.href='faltalink'"
            className="crearcomunity-button curser"
          >
            Crear comunidad
          </button>
        </div>
      </section>
    </div>

    <div className="users">
      <div className="users-container">
        <div className="users_containers1">
          <a
            href="https://www.redditinc.com/policies/user-agreement"
            className="users_containers1-text usuario"
          >
            Acuerdo del Usuario
          </a>
          <a
            href="https://www.reddit.com/policies/privacy-policy"
            className="users_containers1-text text1s"
          >
            Política de privacidad
          </a>
        </div>

        <div className="users_containers2">
          <a
            href="https://www.redditinc.com/policies/content-policy"
            className="users_containers1-text usuario coreect"
          >
            Política de contenido
          </a>
          <a
            href="https://www.redditinc.com/policies/moderator-code-of-conduct"
            className="users_containers1-text text2s"
          >
            Código de conducta del moderador
          </a>
        </div>
      </div>
    </div>

    <div className="anouncer"></div>
  </section>
  )
}

export default Aside