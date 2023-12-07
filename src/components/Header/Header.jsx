import { useNavigate } from 'react-router-dom'
import './header.css'

export const Header = () => {
    const navigate = useNavigate();

    const redirectHome = () => {
        navigate('/')
    }

    return (
        <div className="headercontent">
            <div className="logo" onClick={redirectHome}></div>
            <ul className="listOption">
                <li>Nuestro Grupo</li>
                <li>Facturación</li>
                <li>Imprime tu Boleto</li>
                <li>Empleo</li>
                <li>Cambia tu boleto</li>
                <li className='textLong'>Servicio al cliente 5544403187 o 5544403106</li>
                <li>Español</li>
                <li>Mi cuenta</li>
            </ul>
        </div>
    )
}
