import Me from './me'
import PhotoCV from "../../assets/CVphoto.png"
import Socials from "./HeaderSocials"

const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hola,Soy</h5>
                <h1>LIANN HUAMAN</h1>
                <h5 className="text-ligth">
                    Desarrolladora Fullstack
                </h5>
                <Me/>
                <Socials/>

                <div className='me'>
                    <img src={PhotoCV} alt="me"/>
                </div>

                <a href="#contact" className='scroll_down'>Desplazar</a>
            </div>
        </header>
    )
}

export default header
