
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import {ButtonCustomOutline} from "../../Button";
import {Constant} from "../../Constant";

const CartBoxPersonal = ({item}) => {

    return(
        <Card sx={{ height: 270, cursor:"pointer"}} >
            <CardHeader
                style={{color:"#4d13d1"}}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
                        <img src={item.image}/>
                    </Avatar>
                }
                title={item.title}
                subheader={item.subtitle}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" style={{textAlign:"left", marginLeft:"10px"}}>
                    {item.description}
                </Typography>
            </CardContent>
            <ButtonCustomOutline variant="outlined"  sx={{
                ':hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                },
            }}>{Constant.viewMathew}</ButtonCustomOutline>
        </Card>

    )

}

export default CartBoxPersonal