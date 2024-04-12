function Navbar() {
  return (
    <div className="headers">
      <nav className="header__nav">
        <a href="index.html">
          <img
            src="assets/logo_copy_V2.0.png"
            className="logo-anime"
            alt="logo"
          />
        </a>
        <ul className="header__nav-ul">
          <li className="header__nav-li">
            <a href="#tendencia" className="color">
              <i className="fass fa-brands fa-algolia fa-bounce"></i>Animes
            </a>
          </li>
          <li className="header__nav-li">
            <a href="pages/Foros/foros.html">
              <i className="fass fa-brands fa-stack-overflow fa-beat"></i>Foros
            </a>
          </li>
          <li className="header__nav-li">
            <a href="pages/Mangas/manga.html">
              <i className="fass fa-solid fa-photo-film fa-bounce"></i>Mangas
            </a>
          </li>
          <li className="header__nav-li">
            <a href="https://discord.gg/rnkZM5xbsW" target="_blank">
              <i className="fass fa-brands fa-discord fa-beat"></i>Discord
            </a>
          </li>
          <li className="header__nav-li">
            <a href="pages/loginGTP/users.html">
              <i className="fass fa-solid fa-users fa-bounce"></i>Registro
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
