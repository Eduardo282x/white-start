import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";
import './card.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

export const CardShared = ({width, height, title, subtitle, formActive, dataForm, messageSecundary,paragraphMessage,footer,ticket,dataTicket}) => {
    const [errors, setErrors] = useState({});

    const inputEmpty = (event, fieldName) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: event.target.value === '',
        }));
    };

    return (
        <Box sx={{ minWidth: { width }, height: { height } }} className='cardContent'>
            <CardContent>
                <Typography variant="h5" className='titleCard'>
                    {title}
                </Typography>

                <Typography variant="h5" className='subtitleCard'>
                    {subtitle ? subtitle : ''}
                </Typography>

                {paragraphMessage ? 
                <div className="paragraphMessage">
                <p>{paragraphMessage}</p> 
                </div>
                : ''
                }

                <div className='inputContent'>
                    {formActive && dataForm
                        ? dataForm.map((formData, key) => (
                                <div key={key} className={formData.width}>
                                    <p>
                                        {formData.label} {formData.required ? '*' : ''}
                                    </p>
                                    <TextField
                                        key={key}
                                        variant="outlined"
                                        type={formData.inputType}
                                        placeholder={formData.placeholder}
                                        defaultValue={formData.defaultValue}
                                        className={errors[formData.label] ? 'errorInput' : 'inputForm'}
                                        onClick={(event) => inputEmpty(event, formData.label)}
                                        onChange={(event) => inputEmpty(event, formData.label)}
                                        InputProps={{
                                            readOnly: formData.readOnly,
                                        }}
                                    />
                                    {errors[formData.label] ? (
                                        <p className='messageError'>Campo Requerido.</p>
                                    ) : (
                                        ''
                                    )}
                                </div>
                        ))
                        : <p></p>}
                </div>




                {ticket && dataTicket ? 
                <div className="ticketDisplay">
                    {dataTicket.map((data, index) => (
                        <div key={index} className={data.color === 'red' ? 'dataTicketFocus' : 'dataTicket'}>
                            <p>{data.label}</p>
                            <p>${data.valueNumber}</p>
                        </div>
                    ))}
                </div>
                : ''
            }


                {messageSecundary ?
                <div className="messageSecundary">
                    <p>{messageSecundary}</p>
                </div>
                : ''
                }           

                {footer ?
                    <Typography variant="h6" className='footerMessage'>
                        {footer ? <><DirectionsBusIcon/> {footer}</> : ''}
                    </Typography>          
                    : '' 
                }

            </CardContent>
        </Box>
    )
}


CardShared.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    messageSecundary: PropTypes.string,
    footer: PropTypes.string,
    paragraphMessage: PropTypes.string,


    formActive: PropTypes.bool,
    ticket: PropTypes.bool,

    dataForm: PropTypes.array,
    dataTicket: PropTypes.array,
};