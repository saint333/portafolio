import './portafolio.css'
import IMG1 from '../../assets/pag1.png'
import IMG2 from '../../assets/pag2.png'
import IMG3 from '../../assets/pag3.png'
import IMG4 from '../../assets/pag4.png'
import IMG5 from '../../assets/pag5.png'
import IMG6 from '../../assets/pag6.png'
import IMG7 from '../../assets/pag7.png'
import IMG8 from '../../assets/pag8.png'

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
            <img src={IMG1} alt="pagina de neon house led" />
          </figure>

          <h3>Neon House Led</h3>
          <a href="https://www.neonhouseled.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        <article className="portfolio__item">
          <figure className="portfolio__item-image">
            <img src={IMG2} alt="pagina de digimedia" />
          </figure>

          <h3>Digimedia</h3>
          <a href="https://www.digimediamkt.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        <article className="portfolio__item">
          <figure className="portfolio__item-image">
            <img src={IMG3} alt="pagina de neon led store" />
          </figure>

          <h3>Neon Led Store</h3>
          <a href="https://neonled-store.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        <article className="portfolio__item">
          <figure className="portfolio__item-image">
            <img src={IMG4} alt="pagina  de eventos especiales" />
          </figure>

          <h3>Eventos Especiales MJ</h3>
          <a href="https://www.eventosespecialesmj.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        <article className="portfolio__item">
          <figure className="portfolio__item-image">
            <img src={IMG5} alt="pagina de polleria veramendis" />
          </figure>

          <h3>Polleria Veramendis</h3>
          <a href="https://veramendischicken.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        <article className="portfolio__item">
          <figure className="portfolio__item-image">
            <img src={IMG6} alt="pagina de discord app" />
          </figure>

          <h3>Discord App</h3>
          <a href="https://discord-vr5p.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        <article className="portfolio__item">
          <figure className="portfolio__item-image">
            <img src={IMG7} alt="pagina de juego" />
          </figure>

          <h3>Wordle</h3>
          <a href="https://puzzle-6ww1.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        <article className="portfolio__item">
          <figure className="portfolio__item-image">
            <img src={IMG8} alt="pagina de gestion de tareas" />
          </figure>

          <h3>Gestion de tareas</h3>
          <a href="https://gestion-de-tareas.onrender.com/task" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visualizar</a>
        </article>

        {/* <article >
          <a href="http://" target="_blank" rel="noopener noreferrer" className='btn'>Ver mas</a>
        </article> */}
      </div>
    </section>
  )
}

export default Portafolio