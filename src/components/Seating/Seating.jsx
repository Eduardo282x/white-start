import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { CardShared } from '../Shared/Card/CardShared';
import { CardSeating } from './CardSeating/CardSeating';
import './seating.css'


export const Seating = () => {
    const navigate = useNavigate()

    const redirect = (path) => {
        navigate(path == 'back' ? -1 : '/pay');
    }

    const dataTicket = [
        {
            color: 'normal',
            valueNumber: 508.62,
            label: 'SUBTOTAL',
        },
        {
            color: 'normal',
            valueNumber: 81.38,
            label: 'IVA',
        },
        {
            color: 'red',
            valueNumber: 0,
            label: 'TOTAL',
        }
    ]

    const calculateTotal = (data) => {
        let total = 0;

        for (let i = 0; i < data.length - 1; i++) {
            const item = data[i];
            if (item.valueNumber) {
                total += item.valueNumber;
            }
        }

        const ultimoElemento = data[data.length - 1];
        if (ultimoElemento) {
            ultimoElemento.valueNumber = total;
        }
    
        return data;
    };

    calculateTotal(dataTicket)

    return (
        <div className='seatingContent'>
            <div className="passengerChild">
                <div className="firstColum">
                    <p>Para cambiar de asiento, primero debe hacer click sobre cualquiera de los asientos seleccionados, y posteriormente sleccione su nuevo asiento.</p>
                    <CardSeating/>
                </div>
                <div className="secondColum">
                    <CardShared width={348} height={392} title={"Itinerario ida:"} footer={`Primera Select Local`}/>
                    <CardShared width={348} height={300} title={"Detalles del pago"} paragraphMessage={'1 pasajeros'} ticket={true} dataTicket={dataTicket}/>
                </div>
            </div>

            <div className="btnDisplay">
                <Button variant="contained" size="large" className='btnGreen' onClick={() => redirect('back')}>Regresar</Button>
                <Button variant="contained" size="large" className='btnGreen' onClick={() => redirect('continue')}>Continuar</Button>
            </div>
        </div>
    )
}
