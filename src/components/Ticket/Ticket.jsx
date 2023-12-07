import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Ticket.css'

export const Ticket = () => {
    return (
        <div className='ticket'>
            <div className="childTicket">
                <div className="header-ticket"></div>
                <div className="travel-ticket"></div>
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
