import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";
import './card.css'

export const CardShared = ({width, height}) => {
    return (
            <Card sx={{ minWidth: {width}, minHeight: {height} }} className='cardContent'>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Title
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>
    )
}


CardShared.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};