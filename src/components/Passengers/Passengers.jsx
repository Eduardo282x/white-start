import './passengers.css'
import { CardShared } from '../Shared/Card/CardShared'


export const Passengers = () => {
    const dataFormOne = [
        {
            label: 'Nombre',
            required: true,
            inputType: 'text',
            placeholder: 'Nombre'
        },
        {
            label: 'Apellido(s)',
            required: true,
            inputType: 'text',
            placeholder: 'Apellido'
        },
        {
            label: 'Correo Electronico',
            required: true,
            inputType: 'email',
            placeholder: 'correo@example.com'
        },
        {
            label: 'Télefono',
            required: true,
            inputType: 'tel',
            placeholder: 'XXX XXX XXXX'
        },
    ]

    const dataFormTwo = [
        {
            label: 'Nombre',
            required: true,
            inputType: 'text',
            placeholder: 'Nombre'
        },
        {
            label: 'Apellido',
            required: true,
            inputType: 'text',
            placeholder: 'Apellido'
        },
        {
            label: 'Tipo de boleto',
            readOnly: true,
            inputType: 'email',
            placeholder: 'Tipo de boleto',
            defaultValue: 'Adulto $590'
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
        </div>
    )
}
