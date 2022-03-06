import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'


const Social = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/david-israel-granados-elias/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/saint333" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="http://api.whatsapp.com/send?phone=+51927426581" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a>
    </div>
  )
}

export default Social