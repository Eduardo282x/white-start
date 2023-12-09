
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import './CardSeating.css'

export const CardSeating = () => {
    const seatInformationMessage = [
        {
        label: 'Disponible',
        color: 'availableInfo',
        },
        {
        label: 'Seleccionado',
        color: 'selectedInfo',
        },
        {
        label: 'Reservado',
        color: 'reserveInfo',
        },
    ]
    const generateSeats = (cantidad) => {
        const colores = ['available', 'reserve'];
    
        return Array.from({ length: cantidad }, (_, index) => ({
            seatNumber: index + 1,
            color: colores[Math.floor(Math.random() * colores.length)],
        }));
    };
    
    const seats = generateSeats(36);

    return (
        <div>
            <Box sx={{ minWidth: 730, height: 270 }} className='cardSeatingContent'>
                <CardContent>
                    <div className="seatGroup">
                        {seats.map((seat, index) => (
                            <div className={seat.color} key={index}>
                                <div className="background"></div>
                                {seat.seatNumber}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Box>

            <div className="seatInformation">
                {seatInformationMessage.map((seat) => (
                    <div className="seatInfo" key={seat.label}>
                        <div className={seat.color}></div>
                        <p>{seat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
