import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

// Hook que te permite agregar estado a los componentes funcionales en React
// Este hook devuelve un array con dos elementos: el estado actual y una función para actualizar ese estado.
import {useState} from 'react'


const Nav = () => {

    // Estado para almacenar el enlace activo
    const [activeNav, setActiveNav] = useState('#');

    // Array de objetos para almacenar la información de los enlaces
    const links = [
        { href: '#', text: 'Home', icon: <AiOutlineHome /> },
        { href: '#about', text: 'About', icon: <AiOutlineUser /> },
        { href: '#experience', text: 'Experience', icon: <BiBook /> },
        { href: '#services', text: 'Services', icon: <RiServiceLine /> },
        { href: '#contact', text: 'Contact', icon: <BiMessageSquareDetail /> }
    ];

    // Función para manejar el clic en un enlace y actualizar el estado del enlace activo
    const handleNavClick = (href) => {
        setActiveNav(href);
    };
    return (
        <nav>
            {links.map((link, index) => (
                <a
                // Mapeo del array de enlaces para crear los elementos de navegación
                    key={index}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={activeNav === link.href ? 'active' : ''}
                >
                    {link.icon}
                </a>
            ))}
        </nav>
    )
}

export default Nav
