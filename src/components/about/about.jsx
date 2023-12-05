import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";



const about = () => {
  return (
    <section id="about">
      <h5>Conoce</h5>
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiencia :</h5>
              <small>1+ Año trabajando</small>
            </article>

            <article className='about__card'>
              <FaFolderOpen className='about__icon'/>
              <h5>Proyectos :</h5>
              <small>Diversos</small>
            </article>

            <p>
            Desarrollador Web enfocado en el área Back-End 💻, bajista en progreso 🎸, amante de la cultura japonesa 🍥, los mochis ❤️, la música 🎼 y los gatos en general 🐈‍⬛.
            </p>

            <a href="#contact" className='btn btn-primary'>Contactame </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default about
