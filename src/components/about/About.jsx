import './about.css'
import ME from '../../assets/foto.png'
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
              <small>4+ meses trabajando</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>5+ clientes</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyectos</h5>
              <small>5+ completados</small>
            </article>
          </div>

          <p>
            Soy un desarrollador frontend y vivo en Perú. Tengo una gran pasión por la tecnologia 
          </p>

          <a href="#contact" className='btn btn-primary btn__modify'>Contactar</a>
        </div>
      </div>
    </section>
  )
}

export default About