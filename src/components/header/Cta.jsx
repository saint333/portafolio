import CV from '../../assets/curriculum.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className="btn">Descargar CV</a>
        <a href="#contact" className="btn btn-primary">Contactar</a>
    </div>
  )
}

export default Cta