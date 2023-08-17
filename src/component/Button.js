import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import Box from "@mui/material/Box";

export const ButtonCustom = styled(MuiButton)((props) => ({
    backgroundColor:"#f2f2f2", padding: "12px 22px", fontSize:"1rem", fontWeight:"bold", color:"#4d13d1", textTransform:"capitalize"
}));
export const ButtonCustomBlue = styled(MuiButton)((props) => ({
    backgroundColor:"#4d13d1", padding: "12px 22px", fontSize:"1.1rem", fontWeight:"bold", textTransform:"capitalize"
}));

export const ButtonCustomSignUp = styled(MuiButton)((props) => ({
    backgroundColor: "#4d13d1", textTransform: 'none', color:"white", fontWeight:"bold"
}));

export const ButtonCustomSigIn = styled(MuiButton)((props) => ({
    textTransform: 'none', color:"#000", marginRight:"20px", fontWeight:"bold"
}));
export const ButtonCustomOutline = styled(MuiButton)((props) => ({
    textTransform: 'none', padding: "10px 70px", color:"#4d13d1"
}));
export const ButtonCustomOLogin = styled(MuiButton)((props) => ({
    textTransform: "capitalize", backgroundColor: "#4d13d1", padding:"10px"
}));

export const WrapperTag = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {

    },
    [theme.breakpoints.down("sm")]: {

    },
    [theme.breakpoints.up("lg")]: {

    },
}));





