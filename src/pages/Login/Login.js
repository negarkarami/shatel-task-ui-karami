import {Box,Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import {styled} from "styled-components";
import Container from "@mui/material/Container";
import {Constant} from "../../component/Constant";
import {ButtonCustomOLogin} from "../../component/Button";
import pic1 from "../../assets/img/img1.jpg"
import {useState} from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const WrapperLoginTilte = styled.div`
  text-align: left;
  margin-right: 180px;

  @media (max-width: 480px) {
    text-align: center;
    margin-right:0;
    > h4{
      padding-bottom: 10px;
    }
  }

  > h4{
    padding-bottom: 40px;
  }

  > h2 {
    font-size: 1.5rem;
    padding-bottom: 30px;
  }
`;

const WrapperParallel = styled.div`
  background-image: linear-gradient(to bottom, rgba(85,27,219,255),rgba(105,45,242,255));
  height: 100vh;
  @media (max-width: 480px) {
    height: 60vh;

  }
`;

const WrapperImage = styled.div`
    > img {
      margin-top: 150px;
      height: 70%;
      width: 70%;
    }

`;
const WrapperTextImage = styled.div`
    > h2 {
      color: white;
      font-size: 1.8rem;
      margin-top: 30px;
      padding-bottom: 10px;
    }
  > p {
    color: #ccc3e9;
    font-size: 0.8rem;
    padding-bottom: 4px;
  }

`;

const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;

  > span {
    background-color:#bcaee7;
    height: 9px;
    width:9px;
    border-radius: 50%;
    margin:12px 5px;

    &:nth-child(1) {
      background-color: white !important;
    }

  }
`;

const SignIn = styled.div`
  > a {
    color: #4d13d1;
  }
  
`;

const EyeInput = styled.div`
margin-top: 7px;
  
`;
const BoxFormcontrol = styled.div`
display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  
`;




const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
        if(passwordType==="password")
        {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get("text"),
            email: data.get("email"),
            password: data.get("password"),
        });
    };
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Container component="main" maxWidth="sm">
                    <Box
                        sx={{
                            boxShadow: 0,
                            borderRadius: 0,
                            px: 4,
                            py: 2,
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <WrapperLoginTilte>
                            <h4>{Constant.fiber}</h4>
                            <h2>{Constant.titleLogin}</h2>
                        </WrapperLoginTilte>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}} >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="text"
                                label="Your Name"
                                name="text"
                                autoComplete="text"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={passwordType}
                                id="password"
                                autoComplete="current-password"
                                onChange={handlePasswordChange} value={passwordInput}
                                InputProps={{
                                    endAdornment: (
                                        <EyeInput  onClick={togglePassword}>
                                            { passwordType==="password"? <RemoveRedEyeIcon/> :<VisibilityOffIcon/> }
                                        </EyeInput>
                                    ),
                                }}

                            />
                            <BoxFormcontrol>

                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label={Constant.titleChecked}
                                />
                                <br></br>
                                <a href='/' style={{textAlign:"left"}}>{Constant.term}</a>
                            </BoxFormcontrol>


                            <ButtonCustomOLogin
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {Constant.titleButton}
                            </ButtonCustomOLogin>
                            <Grid container center>
                                <Grid item >
                                    <SignIn >
                                        <a to="/" variant="body2"  >
                                            {Constant.Already}
                                            <a href='/'>{Constant.signIn}</a>
                                        </a>
                                    </SignIn>

                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Grid>
            <Grid item xs={12} md={6}>
                <WrapperParallel>
                    <WrapperImage>
                        <img src={pic1}/>
                    </WrapperImage>
                    <WrapperTextImage>
                        <h2>{Constant.unParallel}</h2>
                        <p>{Constant.description}</p>
                        <p>{Constant.description2}</p>
                    </WrapperTextImage>
                    <CircleWrapper>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </CircleWrapper>
                </WrapperParallel>
            </Grid>
        </Grid>
    )
}

export default Login