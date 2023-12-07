import { FormSelected } from "../FormSelected.jsx/FormSelected";
import { AccordionPage } from "../Accordion/AccordionPage";
import { Ticket } from "../Ticket/Ticket";
import './Itinerary.css'
export const Itinerary = () => {
    return (
        <div className="itineraryCont">
            <div className="formSelected">
                <FormSelected/>
            </div>

            <div className="step">
                
            </div>

            <div className="information">                
                <h1>Boletos de Huejutla a Mexico Norte</h1>

                <div className="unit">
                    <AccordionPage/>

                    <div className="ticket">
                        <Ticket/>
                        <Ticket/>
                        <Ticket/>
                        <Ticket/>
                    </div>
                </div>
            </div>
            {/* <Header/> */}
        </div>
    )
}
