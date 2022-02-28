import './header.css'
import Cta from './Cta'
import ME from '../../assets/foto.png'
import Social from './Social'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <hgroup>
          <h5>Hola soy</h5>
          <h1>David Granados</h1>
          <h5 className='text-light'>Frontend Developer</h5>
        </hgroup>

        <Cta />


        <figure className='me'>
          <img src={ME} alt="foto del desarrollador" />
        </figure>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <Social />
      </div>
    </header>
  )
}

export default Header