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
                    <div className="accor">
                        <AccordionPage/>
                    </div>

                    <div className="ticket">
                        <div className="orderBy">
                            <div className="title">Elige Ida</div>
                            <div className="hourDuration">
                                <div className="titleDuration">Ordernar por:</div>
                                <div className="hourOrderBy">Hora</div>
                                <div className="durationOrderBy">Duración</div>
                            </div>
                        </div>
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
