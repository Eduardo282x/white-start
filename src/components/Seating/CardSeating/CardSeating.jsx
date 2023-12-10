
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { useState } from 'react';
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
    ];

    const generateSeats = (cantidad) => {
        const colores = ['available', 'reserve'];

        return Array.from({ length: cantidad }, (_, index) => ({
            seatNumber: index + 1,
            color: colores[Math.floor(Math.random() * colores.length)],
        }));
    };

    const [seats, setSeats] = useState(generateSeats(36));
    const [selectedSeatIndex, setSelectedSeatIndex] = useState(null);

    const handleSeatClick = (index) => {
        const updatedSeats = [...seats];
        if (selectedSeatIndex !== null) {
            updatedSeats[selectedSeatIndex].color = 'available';
        }
        updatedSeats[index].color = 'selected';
        setSeats(updatedSeats);
        setSelectedSeatIndex(index);
    };

    return (
        <div>
            <Box sx={{ minWidth: 730, height: 270 }} className='cardSeatingContent'>
                <CardContent>
                    <div className="seatGroup">
                        {seats.map((seat, index) => (
                            <div
                                className={`${seat.color} seat`}
                                key={index}
                                onClick={() => handleSeatClick(index)}
                            >
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
    );
};