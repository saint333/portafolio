import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'


const Social = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a>
    </div>
  )
}

export default Social