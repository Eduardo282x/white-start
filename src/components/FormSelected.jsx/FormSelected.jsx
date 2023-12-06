import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './form.css'
import { useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LuggageIcon from '@mui/icons-material/Luggage';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export const FormSelected = () => {
    const [showText, setShowText] = useState(true);

    const hiddenText = () => {
        setShowText(false)
    }

    const arraySelector = [ 
        {
            placeholder: 'Origen',
            iconPosition: 'left',
            icon: <LocationOnIcon className="iconUbi"/>,
            type: 'selector'
        },
        {
            placeholder: 'Destino',
            iconPosition: 'left',
            icon: <LocationOnIcon className="iconUbi"/>,
            type: 'selector'
        },
        {
            placeholder: 'Fecha salida',
            iconPosition: 'right',
            icon: <CalendarMonthIcon className="iconUbi"/>,
            type: 'calendar'
        },
        {
            placeholder: 'Regreso',
            iconPosition: 'right',
            icon: <CalendarMonthIcon className="iconUbi"/>,
            type: 'calendar'
        },
        {
            placeholder: 'Pasajeros',
            iconPosition: 'left',
            icon: <LuggageIcon className="iconUbi"/>,
            type: 'selector'
        }
    ]

    return (
        <div className="formSelectedGroup">
            {arraySelector.map((form, index) => (
                            <FormControl key={index} sx={{ m: 1, minWidth: 210, height: 40, borderRadius: 4, background: 'white' }}>
                                {form.iconPosition == 'left' ?
                                (showText ? 
                                <InputLabel htmlFor="grouped-select" className="placeHolderIcon">{form.icon} {form.placeholder}</InputLabel> : '')
                                :
                                (showText ? 
                                    <InputLabel htmlFor="grouped-select" className="placeHolderIcon">{form.placeholder} {form.icon} </InputLabel> : '')
                                }
                                
                            <Select defaultValue="" id="grouped-select" label="Grouping" onChange={hiddenText}>
                                <ListSubheader>Category 1</ListSubheader>
                                    <MenuItem value={1} className="menuItemCustom">Option 1</MenuItem>
                                    <MenuItem value={2} className="menuItemCustom">Option 2</MenuItem>
                                <ListSubheader>Category 2</ListSubheader>
                                    <MenuItem value={3} className="menuItemCustom">Option 3</MenuItem>
                                    <MenuItem value={4} className="menuItemCustom">Option 4</MenuItem>
                            </Select>
                        </FormControl>
            ))}

            <Button component="label" variant="contained" startIcon={<SearchIcon />} sx={{width: 140, height: 40, background: '#046a39'}}>
                Buscar
            </Button>   
        </div>
    );
};
