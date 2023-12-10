import './mainContent.css'
import { CarouselComponent } from './Carousel/CarouselComponent'

export const MainContent = () => {
    return (
        <div className="mainContent">
            <h1>ESPACIO ESTRELLA</h1>
            <div className="cont displayImage">
                <div className="img first"></div>
                <div className="img second"></div>
                <div className="img thirsty"></div>
            </div>
            <h1>DESCUBRE Y DISFRUTA</h1>
            <div className="cont carousel">
                <CarouselComponent/>
            </div>
            <h1>SERVICIOS A BORDO</h1>
            <div className="cont servi">
                <div className="services">
                    <div className="iconGreen serviceIconAc"></div>
                    <p>AIRE ACOMDICIONADO</p>
                </div>
                <div className="services">
                    <div className="iconGreen serviceIconSecurity"></div>
                    <p>CINTORONES DE SEGURIDAD</p>
                </div>
                <div className="services">
                    <div className="iconGreen serviceIconComodidad"></div>
                    <p>COMODIDAD</p>
                </div>
                <div className="services">
                    <div className="iconGreen serviceIconWifi"></div>
                    <p>WIFI</p>
                </div>
                <div className="services">
                    <div className="iconGreen serviceIconEntreteiment"></div>
                    <p>ENTRETENIMIENTO</p>
                </div>
                <div className="services">
                    <div className="iconGreen serviceIconBathroom"></div>
                    <p>BAÑO</p>
                </div>
            </div>
            <h1>OTROS SERVICIOS</h1>
            <div className="cont others">
                <div className="othersCont">
                    <div className="imgOther othersSustent"></div>
                    <p className='textGrenn'>Sustentabilidad</p>
                </div>
                <div className="othersCont">
                    <div className="imgOther othersPackage"></div>
                    <p className='textGrenn'>Paquetería y Mensajeria ENVÍA</p>
                </div>
                <div className="othersCont">
                    <div className="imgOther othersEspecial"></div>
                    <p className='textGrenn'>Servicios Especiales</p>
                </div>
            </div>
            <h1 className='shortText'>¿SIN TARJETA? ¡DESCUIDA! RESERVA TUS BOLETOS Y PAGA EN:</h1>
            <div className="cont cards">
                <div className="contentCard">
                    <div className="card bodega"></div>
                    <div className="card ahorro"></div>
                    <div className="card sams"></div>
                    <div className="card walmart"></div>
                    <div className="card circle"></div>
                    <div className="card extra"></div>
                    <div className="card waldos"></div>
                    <div className="card systienda"></div>
                    <div className="card super"></div>
                    <div className="card kisoko"></div>
                </div>
            </div>
        </div>
    )
}
