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
import { cities } from "./cities";
import { useLocation, useNavigate } from "react-router-dom";

export const FormSelected = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showTextArray, setShowTextArray] = useState([true,true,true,true,true]);

    const hiddenText = (index) => {
        const showText = [...showTextArray]
        showText[index] = false;
        setShowTextArray(showText)
    }

    const redirect = () => {
        // console.log(location);
        if(location.pathname == '/'){
            navigate('itinerario')
        }
    }

    const arraySelector = [ 
        {
            placeholder: 'Origen',
            iconPosition: 'left',
            icon: <LocationOnIcon className="iconUbiLeft"/>,
            data: 'cities',
            type: 'selector'
        },
        {
            placeholder: 'Destino',
            iconPosition: 'left',
            icon: <LocationOnIcon className="iconUbiLeft"/>,
            data: 'cities',
            type: 'selector'
        },
        {
            placeholder: 'Fecha salida',
            iconPosition: 'right',
            icon: <CalendarMonthIcon className="iconUbiRight"/>,
            data: 'other',
            type: 'calendar'
        },
        {
            placeholder: 'Regreso',
            iconPosition: 'right',
            icon: <CalendarMonthIcon className="iconUbiRight"/>,
            data: 'other',
            type: 'calendar'
        },
        {
            placeholder: 'Pasajeros',
            iconPosition: 'left',
            icon: <LuggageIcon className="iconUbiLeft"/>,
            data: 'other',
            type: 'selector'
        }
    ]

    return (
        <div className="formSelectedGroup">
            {arraySelector.map((form, index) => (
                <FormControl key={index} sx={{ m: 1, minWidth: 210, maxWidth: 220, height: 40, borderRadius: 3, background: 'white' }}>
                    {form.iconPosition === 'left' ?
                        (showTextArray[index] ? 
                            <InputLabel htmlFor="grouped-select" className="placeHolderIcon">{form.icon} {form.placeholder}</InputLabel> : '')
                        :
                        (showTextArray[index] ? 
                            <InputLabel htmlFor="grouped-select" className="placeHolderIcon">{form.placeholder} {form.icon} </InputLabel> : '')
                    }

                    <Select defaultValue="" id="grouped-select" label="Grouping" onChange={() => hiddenText(index)}>
                        {form.data === 'cities' ? 
                            cities.map((city, key) => ( 
                                [
                                    <ListSubheader key={key}>{city.name}</ListSubheader>,
                                    ...city.stations.map((stats) => (
                                        <MenuItem value={stats.id} key={stats.id} className="menuItemCustom">{stats.name}</MenuItem>
                                    ))
                                ]
                            )) 
                            :
                            [
                                <ListSubheader key="category1">Category 1</ListSubheader>,
                                <MenuItem value={1} className="menuItemCustom" key={1}>Option 1</MenuItem>,
                                <MenuItem value={2} className="menuItemCustom" key={2}>Option 2</MenuItem>,
                                <ListSubheader key="category2">Category 2</ListSubheader>,
                                <MenuItem value={3} className="menuItemCustom" key={3}>Option 3</MenuItem>,
                                <MenuItem value={4} className="menuItemCustom" key={4}>Option 4</MenuItem>,
                            ]
                        }
                    </Select>
                </FormControl>
            ))}

            <Button 
            component="label" 
            variant="contained" 
            startIcon={<SearchIcon />} 
            sx={{
                width: 140, 
                height: 40, 
                background: '#046a39', 
                '&:hover': {
                    background: '#046a39', // Establece el mismo color al pasar el ratón
                },}} 
            onClick={redirect}>
                Buscar
            </Button>   
        </div>
    );
};
