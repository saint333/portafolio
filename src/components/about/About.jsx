import './about.css'
import ME from '../../assets/foto.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <hgroup>
        <h5>Conocer</h5>
        <h2>Sobre Mí</h2>
      </hgroup>

      <div className="container about__container">
        <div className="about__me">
          <figure className="about__me-image">
            <img src={ME} alt="imagen sobre mi" />
          </figure>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>3+ trabajando</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>20+ clientes</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyectos</h5>
              <small>10+ completados</small>
            </article>
          </div>

          <p>
            Soy un <strong>desarrollador frontend </strong>y vivo en Perú. Tengo una gran pasión por la tecnologia, he sido capaz de desarrollar diversas habilidades y potenciado otras, asi mismo aprender las diversas tecnologias mas demandadas por el mercado laboral, me gusta tomar diversos desafios nuevos para aprender y dar lo mejor de mi.
          </p>

          <a href="#contact" className='btn btn-primary btn__modify'>Contactar</a>
        </div>
      </div>
    </section>
  )
}

export default About