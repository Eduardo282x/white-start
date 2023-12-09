import './passengers.css'
import { CardShared } from '../Shared/Card/CardShared'

export const Passengers = () => {
    return (
        <div className='passengerContent'>
            <div className="passengerChild">
                <div className="firstColum">
                    <CardShared width={633} height={256}/>
                    <CardShared width={633} height={392}/>
                </div>
                <div className="secondColum">
                    <CardShared width={443} height={344}/>
                    <CardShared width={443} height={300}/>
                </div>
            </div>
        </div>
    )
}
