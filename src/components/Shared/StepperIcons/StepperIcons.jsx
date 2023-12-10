import './StepperIcons.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AirlineSeatLegroomExtraRoundedIcon from '@mui/icons-material/AirlineSeatLegroomExtraRounded';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PropTypes from "prop-types";

export const StepperIcons = ({labelSelected}) => {
    const iconsArray = [ 
        {
            icon: <LocationOnIcon/>,
            selected: false,
            label: 'Itinerario'
        },
        {
            icon: <CheckCircleRoundedIcon/>,
            selected: false,
            label: 'Pasajeros'
        },
        {
            icon: <AirlineSeatLegroomExtraRoundedIcon/>,
            selected: false,
            label: 'Asientos'
        },
        {
            icon: <PaymentsOutlinedIcon/>,
            selected: false,
            label: 'Pago'
        },
    ]

    const changeSelected = (label) => {
        const findIcon = iconsArray.find(icon => icon.label == label);
        if(findIcon){
            findIcon.selected = true;
        }
    }

    changeSelected(labelSelected)

    return (
        <div className="stepperContent">
            {iconsArray.map((icon, index) => (
                <div className={icon.selected ? "circleSelected" :"circleIcon"} key={index}>
                <div className="iconDecoration">{icon.icon}</div>
                <p>{icon.label} </p>
                </div>
            ))}
        </div>
    )
}


StepperIcons.propTypes = {
    labelSelected: PropTypes.string,
};