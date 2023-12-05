import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDev } from "react-icons/fa";



const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/liannmelannyhuamancunyas/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/liann-melanny-huaman-cunyas" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://dev.to/liannmelannyhuamancunyas" target="_blank" rel="noopener noreferrer">
                <FaDev />
            </a>
        </div>
    )
}

export default HeaderSocials
