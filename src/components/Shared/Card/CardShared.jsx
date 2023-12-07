import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './card.css'

export const CardShared = ({width, height}) => {
    return (
            <Card sx={{ minWidth: {width}, minHeight: 200 }}>
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
