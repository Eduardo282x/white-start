import './passengers.css'
import { CardShared } from '../Shared/Card/CardShared'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Passengers = () => {
    const navigate = useNavigate()

    const dataFormOne = [
        {
            label: 'Nombre',
            required: true,
            inputType: 'text',
            placeholder: 'Nombre',
            width: 'middle'
        },
        {
            label: 'Apellido(s)',
            required: true,
            inputType: 'text',
            placeholder: 'Apellido',
            width: 'middle'
        },
        {
            label: 'Correo Electronico',
            required: true,
            inputType: 'email',
            placeholder: 'correo@example.com',
            width: 'middle'
        },
        {
            label: 'Télefono',
            required: true,
            inputType: 'tel',
            placeholder: 'XXX XXX XXXX',
            width: 'middle'
        },
    ]

    const dataFormTwo = [
        {
            label: 'Nombre',
            required: true,
            inputType: 'text',
            placeholder: 'Nombre',
            width: 'middle'
        },
        {
            label: 'Apellido',
            required: true,
            inputType: 'text',
            placeholder: 'Apellido',
            width: 'middle'
        },
        {
            label: 'Tipo de boleto',
            readOnly: true,
            inputType: 'email',
            placeholder: 'Tipo de boleto',
            defaultValue: 'Adulto $590',
            width: 'middle'
        },
    ]

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

    const redirect = (path) => {
        navigate(path == 'back' ? -1 : '/seating');
    }


    calculateTotal(dataTicket)

    return (
        <div className='passengerContent'>
            <div className="passengerChild">
                <div className="firstColum">
                    <CardShared width={633} height={256} title={"Datos del cliente"} formActive={true} dataForm={dataFormOne}/>
                    <CardShared width={633} height={392} title={"Pasajeros"} formActive={true} subtitle={'PASAJERO 1 - ADULTO'} dataForm={dataFormTwo} messageSecundary={'Mayores de 18 años con identificación'}/>
                </div>
                <div className="secondColum">
                    <CardShared width={443} height={344} title={"Itinerario ida:"} footer={`Primera Select Local`}/>
                    <CardShared width={443} height={300} title={"Detalles del pago"} paragraphMessage={'1 pasajeros'} ticket={true} dataTicket={dataTicket}/>
                </div>
            </div>

            <div className="btnDisplay">
                <Button variant="contained" size="large" className='btnGreen' onClick={() => redirect('back')}>Regresar</Button>
                <Button variant="contained" size="large" className='btnGreen' onClick={() => redirect('continue')}>Seleccionar asientos</Button>
            </div>
        </div>
    )
}
