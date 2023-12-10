import { FormSelected } from "../FormSelected.jsx/FormSelected";
import { Ticket } from "../Ticket/Ticket";
import './Itinerary.css'
import { useState, useEffect } from "react";
import { StepperIcons } from "../Shared/StepperIcons/StepperIcons";

export const Itinerary = () => {

    const [numberRandom, setNumberRandom] = useState([]);

    useEffect(() => {
        const randomNumberGeneration = () => {
            const randomNumbers = Array.from({ length: 4 }, () => {
                return Math.floor(Math.random() * (1500 - 200 + 1)) + 200;
            });
    
            setNumberRandom(randomNumbers);
        };

        randomNumberGeneration();
    }, []);

    return (
        <div className="itineraryCont">
            <div className="formSelected">
                <FormSelected/>
            </div>

            <StepperIcons labelSelected={'Itinerario'}/>

            <div className="information">                
                <h1>Boletos de Huejutla a Mexico Norte</h1>

                <div className="unit">
                    <div className="ticket">
                        <div className="orderBy">
                            <div className="title">Elige Ida</div>
                            <div className="hourDuration">
                                <div className="titleDuration">Ordernar por:</div>
                                <div className="hourOrderBy">Hora</div>
                                <div className="durationOrderBy">Duración</div>
                            </div>
                        </div>
                        {numberRandom.map((number, index) => (
                            <Ticket key={index} price={number}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
