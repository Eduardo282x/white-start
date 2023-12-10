import { useNavigate } from 'react-router-dom';
import './pay.css'
import { CardShared } from '../Shared/Card/CardShared';
import { StepperIcons } from '../Shared/StepperIcons/StepperIcons';
import Button from '@mui/material/Button';

export const Pay = () => {

    const navigate = useNavigate()

    const redirect = (path) => {
        navigate(path == 'back' ? -1 : '/seating');
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
            label: 'Dirección',
            required: true,
            inputType: 'text',
            placeholder: 'Calle, Número',
            width: 'fullWidth'
        },
        {
            label: 'Código Postal',
            required: true,
            inputType: 'text',
            placeholder: 'CP',
            width: 'middle'
        },
        {
            label: 'Pais',
            required: true,
            inputType: 'text',
            placeholder: 'Mexico',
            width: 'middle'
        },
        {
            label: 'Estado',
            required: true,
            inputType: 'text',
            placeholder: 'Aguascalientes',
            width: 'middle'
        },
        {
            label: 'Ciudad',
            required: true,
            inputType: 'text',
            placeholder: 'Mexico',
            width: 'middle'
        },
        {
            label: 'Correo Electrónico',
            required: true,
            inputType: 'email',
            placeholder: 'XXX XXX XXXX',
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
            label: 'Número de la tarjeta',
            required: true,
            inputType: 'text',
            placeholder: 'Número de la tarjeta',
            width: 'fullWidth'
        },
        {
            label: 'Fecha de vencimiento',
            required: true,
            inputType: 'text',
            placeholder: 'Fecha de vencimiento',
            width: 'middle'
        },
        {
            label: 'CSC',
            required: true,
            inputType: 'text',
            placeholder: 'CSC',
            width: 'middle'
        },
        {
            label: 'Nombre',
            required: true,
            inputType: 'text',
            placeholder: 'Nombre',
            width: 'middle'
        },
        {
            label: 'Apellidos',
            required: true,
            inputType: 'text',
            placeholder: 'Apellidos',
            width: 'middle'
        },
        {
            label: 'Dirección',
            required: true,
            inputType: 'text',
            placeholder: 'Calle, Número',
            width: 'fullWidth'
        },
        {
            label: 'Colonia',
            required: true,
            inputType: 'text',
            placeholder: 'Colonia',
            width: 'fullWidth'
        },
        {
            label: 'Ciudad',
            required: true,
            inputType: 'text',
            placeholder: 'Ciudad',
            width: 'fullWidth'
        },
        {
            label: 'Estado',
            required: true,
            inputType: 'text',
            placeholder: 'Estado',
            width: 'fullWidth'
        },
        {
            label: 'Código Postal',
            required: true,
            inputType: 'text',
            placeholder: 'Código Postal',
            width: 'fullWidth'
        },
        {
            label: 'Celular',
            required: true,
            inputType: 'text',
            placeholder: '+52',
            defaultValue: '+52',
            width: 'fullWidth'
        },
        {
            label: 'Correo electrónico',
            required: true,
            inputType: 'text',
            placeholder: 'Correo electrónico',
            width: 'fullWidth'
        },
    ]

    calculateTotal(dataTicket)

    return (
        <div className='payContent'>

            <StepperIcons labelSelected={'Pago'}/>

            <div className="payChild">
                <div className="firstColum">
                    <CardShared width={633} height={570} title={"Datos del cliente"} formActive={true} dataForm={dataFormOne}/>
                    <CardShared width={633} height={156} title={"Pasajedos ida"} subtitle={'PASAJERO 1     ADULTO       Asiento: 31'}/>
                    <CardShared width={633} height={1100} title={"Datos del pago"} formActive={true} dataForm={dataFormTwo}/>
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
