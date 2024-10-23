import './experiencia.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experiencia = () => {
  return (
    <section id='experience'>
      <hgroup>
        <h5>¿Que habilidades tengo?</h5>
        <h2>Mi experiencia</h2>
      </hgroup>
        <div className='container experience__container'>
          <div className='experience__frontend'>
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Html5</h4>
                  <progress value='90' max='100' min='0'></progress>
                  <small className='text-light'>90%</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Css3</h4>
                  <progress value='90' max='100' min='0'></progress>
                  <small className='text-light'>90%</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <progress value='80' max='100' min='0'></progress>
                  <small className='text-light'>80%</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <progress value='80' max='100' min='0'></progress>
                  <small className='text-light'>80%</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  <progress value='85' max='100' min='0'></progress>
                  <small className='text-light'>85%</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Next</h4>
                  <progress value='65' max='100' min='0'></progress>
                  <small className='text-light'>65%</small>
                </div>
              </article>
            </div>
          </div>

          <div className='experience__backend'>
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Express</h4>
                  <progress value='45' max='100' min='0'></progress>
                  <small className='text-light'>45%</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <progress value='75' max='100' min='0'></progress>
                  <small className='text-light'>75%</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Angular</h4>
                  <progress value='35' max='100' min='0'></progress>
                  <small className='text-light'>35%</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <progress value='50' max='100' min='0'></progress>
                  <small className='text-light'>50%</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Qwik</h4>
                  <progress value='55' max='100' min='0'></progress>
                  <small className='text-light'>55%</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default Experiencia