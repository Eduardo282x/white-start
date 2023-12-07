// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SortIcon from "@mui/icons-material/Sort";
import "./accordion.css";

import {Accordion, AccordionItem} from "@nextui-org/react";

export const AccordionPage = () => {

    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div className="accordionWidth">

        <Accordion className="aco">
            <AccordionItem key="1" aria-label="Accordion 1"  className="mainAccordion" indicator={<SortIcon/>} title="FILTRAR RESULTADOS">
                <Accordion selectionMode="multiple">
                    <AccordionItem key="1" aria-label="Accordion 2" title="Accordion 2">
                    {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 3" title="Accordion 3">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
            </AccordionItem>
        </Accordion>
        {/* <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <SortIcon />
            FILTRAR RESULTADOS
            </AccordionSummary>
            <AccordionDetails>
            <Accordion className="accordionChild">
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                Accordion 2
                </AccordionSummary>
                <AccordionDetails>
                Contenido del Accordion 2
                </AccordionDetails>
            </Accordion>

            <Accordion className="accordionChild">
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                Accordion 3
                </AccordionSummary>
                <AccordionDetails>
                Contenido del Accordion 3
                </AccordionDetails>
            </Accordion>
            </AccordionDetails>
        </Accordion> */}
        </div>
    );
};
