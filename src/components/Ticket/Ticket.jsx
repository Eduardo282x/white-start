import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PropTypes from "prop-types";
import './Ticket.css'

import { useNavigate } from "react-router-dom";


export const Ticket = ({price}) => {
    const navigate = useNavigate();

    const redirectPassenger = () => {
        navigate('/passengers')
    }

    return (
        <div className='ticket'>
            <div className="childTicket">
                <div className="header-ticket">
                    <div className="imgFSelect"></div>
                    <div className="btnPrice">
                        <div className="price">${price}</div>
                        <div className='elegir' onClick={redirectPassenger}>Elegir</div>
                    </div>
                </div>
                <div className="travel-ticket">

                </div>
                <div className="info-ticket">
                    <div className="bus">
                        <DirectionsBusIcon/>
                        Primera Select
                    </div>
                    <div className="time">
                        <div className="local">
                            <LocationOnIcon/>
                            Local
                        </div>
                        <div className="duration">
                            <AccessTimeFilledOutlinedIcon/>
                            Duración
                        </div>
                        <div className="hour">
                            07:55hrs
                        </div>
                    </div>
                    <div className="avalible">Disponible 25</div>
                </div>
                <div className="footer-ticket">
                    <div className="services serviceIconSecurity whiteLine"></div>
                    <div className="services serviceIconBathroom whiteLine"></div>
                    <div className="services serviceIconComodidad whiteLine"></div>
                    <div className="services serviceIconAc whiteLine"></div>
                    <div className="services serviceIconEntreteiment whiteLine"></div>
                    <div className="services serviceIconWifi"></div>
                </div>
            </div>
        </div>
    )
}



Ticket.propTypes = {
    price: PropTypes.number,
};