import './banner.css'
import { FormSelected } from '../FormSelected.jsx/FormSelected'

export const Banner = () => {
    return (
        <div className="bannerContent">
            <div className="selects">
                <FormSelected/>
                <div className="imgContent">
                    <div className="img paypal"></div>
                    <div className="img paynet"></div>
                    <div className="img visa"></div>
                    <div className="img mastercar"></div>
                    <div className="img coppot"></div>
                </div>
            </div>
        </div>
    )
}
