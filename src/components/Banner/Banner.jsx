import './banner.css'
import { FormSelected } from '../FormSelected.jsx/FormSelected'

export const Banner = () => {
    return (
        <div className="bannerContent">
            <div className="selects">
                <FormSelected/>
                <div className="imgContent">
                    <div className="imgCardForm paypal"></div>
                    <div className="imgCardForm paynet"></div>
                    <div className="imgCardForm visa"></div>
                    <div className="imgCardForm mastercar"></div>
                    <div className="imgCardForm coppot"></div>
                </div>
            </div>
        </div>
    )
}
