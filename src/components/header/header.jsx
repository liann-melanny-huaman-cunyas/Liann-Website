import Me from './me'
import PhotoCV from "../../assets/CVphoto.png"
import Socials from "./HeaderSocials"
import "./header.css"

const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hola, Yo Soy</h5>
                <h1>LIANN MELANNY</h1>
                <h5 className="text-ligth">
                    Desarrolladora Fullstack
                </h5>
                <Me/>
                <Socials/>

                <div className='me'>
                    <img src={PhotoCV} alt="me"/>
                </div>

                <a href="#contact" className='scroll__down'>Desplazar</a>
            </div>
        </header>
    )
}

export default header
