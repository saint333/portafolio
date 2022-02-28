import './portafolio.css'
import IMG1 from '../../assets/pag1.png'
import IMG2 from '../../assets/pag2.png'
import IMG3 from '../../assets/pag3.png'
import IMG4 from '../../assets/pag4.png'
import IMG5 from '../../assets/pag5.png'

const Portafolio = () => {
  return (
    <section id='portfolio'>
      <hgroup>
        <h5>Mis trabajos recientes</h5>
        <h2>Mi Portafolio</h2>
      </hgroup>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <figure className="portfolio__item-image">
            <img src={IMG1} alt="pagina 1" />
          </figure>

          <h3>Neon House Led</h3>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        <article className="portfolio__item">
          <figure className="portfolio__item-image">
            <img src={IMG2} alt="pagina 1" />
          </figure>

          <h3>Digimedia</h3>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        <article className="portfolio__item">
          <figure className="portfolio__item-image">
            <img src={IMG3} alt="pagina 1" />
          </figure>

          <h3>Neon Led Store</h3>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        <article className="portfolio__item">
          <figure className="portfolio__item-image">
            <img src={IMG4} alt="pagina 1" />
          </figure>

          <h3>Eventos Especiales MJ</h3>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        <article className="portfolio__item">
          <figure className="portfolio__item-image">
            <img src={IMG5} alt="pagina 1" />
          </figure>

          <h3>Polleria Veramendis</h3>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        <article >
          <a href="http://" target="_blank" rel="noopener noreferrer" className='btn'>Ver mas</a>
        </article>
      </div>
    </section>
  )
}

export default Portafolio