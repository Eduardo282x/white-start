import './header.css'

export const Header = () => {
    return (
        <div className="headercontent">
            <div className="logo"></div>
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
