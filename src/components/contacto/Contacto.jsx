import './contacto.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react'


const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e5gtfi6', 'template_jlln0c1', form.current, 'omviN9NztOU6b-dXx')
    
    e.target.reset()
  };


  return (
    <section id='contact'>
      <hgroup>
        <h5>¿Quiere saber más?</h5>
        <h2>Contactame</h2>
      </hgroup>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='text-light'>israeldavi0904@gmail.com</h5>
            <a href="mailto:israeldavi0904@gmail.com" target="_blank" rel="noopener noreferrer">Enviar mensaje</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5 className='text-light'>David Granados</h5>
            <a href="https://m.me/davidisrael.granadoselias/" target="_blank" rel="noopener noreferrer">Enviar mensaje</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5 className='text-light'>+51927426581</h5>
            <a href="https://api.whatsapp.com/send?phone=+51927426581" target="_blank" rel="noopener noreferrer">Enviar mensaje</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="nombre">
            <span className='text-light'>Ingrese su nombre</span>
            <input type="text" name="nombre" id="nombre" placeholder='nombres' required/>
          </label>
          <label htmlFor="email">
            <span className='text-light'>Correo</span>
            <input type="email" name="email" id="email" placeholder='correo electronico' required />
          </label>
          <label htmlFor="mensaje">
            <span className='text-light'>Mensaje</span>
            <textarea name="mensaje" id="mensaje" rows="7" placeholder='ingrese el mensaje' required></textarea>
          </label>
          <input type="submit" value="Send messege" className='btn btn-primary'/>
        </form>
      </div>
    </section>
  )
}

export default Contacto