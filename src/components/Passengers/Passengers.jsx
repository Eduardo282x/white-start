import './passengers.css'
import { CardShared } from '../Shared/Card/CardShared'

export const Passengers = () => {
    return (
        <div className='passengerContent'>
            <div className="passengerChild">
                <div className="firstColum">
                    <CardShared width={675} height={275}/>
                    <CardShared width={675} height={275}/>
                </div>
                <div className="secondColum">
                    <CardShared width={375} height={475}/>
                    <CardShared width={375} height={275}/>
                </div>
            </div>
        </div>
    )
}
