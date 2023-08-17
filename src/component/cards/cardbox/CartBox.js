import { Card, CardContent, Typography} from "@mui/material";

const CartBox = ({item}) => {

    return(

        <Card sx={{ minWidth: 275, textAlign: "left", height: 200 , boxShadow: "none", cursor:"pointer"}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.icon}
                </Typography>
                <Typography variant="h5" component="div" style={{paddingBottom: "15px", fontSize: "0.8rem", fontWeight:"bold"}}>
                    {item.title}
                </Typography>
                <Typography variant="body2" style={{color:"#666", fontSize: "1rem"}}>
                    {item.description}
                </Typography>
            </CardContent>
        </Card>
    )

}

export default CartBox