import CV from '../../assets/cv.pdf'
const me = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'> Descargar CV</a>
            <a href="#contact" className='btn btn-primary'>Contactame</a>
        </div>
    )
}

export default me
