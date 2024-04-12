function Buscador() {
  return (
    <section className="etiquetas etiquetas-centrado">
            <div className="etiquetas-buscadores" id="centrado-bot">
            <button onClick="funcion(); flechas(); buscado(); centrado()"  className="etiquetas__button">
                <img src="assets/reproductor2.png" className="etiquetas__img-foros"/>
                <div className="etiquetas__img-text">CATEGORIAS</div>
                <img src="assets/flecha-final.png" id="flechas" className="etiquetas__img-flecha"/>
            </button>
            <input type="search" placeholder="Buscar" id="buscadores" name="buscador"/>
            </div>
            {/* <div id="list1" className="etiquetas_list">
                <a href="#" className="category_item "  category="all">TODO</a>
                <a href="#" className="category_item"  category="ShonenA">SHONEN</a>
                <a href="#" className="category_item"  category="ShojoA">SHOJO</a>
                <a href="#" className="category_item"  category="SeinenA">SEINEN</a>
                <a href="#" className="category_item"  category="IsekaiA">ISEKAI</a>
                <a href="#" className="category_item"  category="FantasiaA">FANTASIA</a>
                <a href="#" className="category_item"  category="AventuraA">AVENTURA</a>
                <a href="#" className="category_item"  category="AccionA">ACCION</a>
                <a href="#" className="category_item"  category="CienciaficcionA">CIENCIA FICCION</a>
                <a href="#" className="category_item"  category="ComediaA">COMEDIA</a>
                <a href="#" className="category_item"  category="RomanceA">ROMANCE</a>
                <a href="#" className="category_item"  category="TerrorA">TERROR</a>
            </div> */}
        </section>
  )
}

export default Buscador