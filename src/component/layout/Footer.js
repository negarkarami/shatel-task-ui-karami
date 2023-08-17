import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import {styled} from "styled-components";
import FavoriteIcon from '@mui/icons-material/Favorite';

import {Company, Portfolio, Resources, Sitemap} from "../blog/footerBlog";
import {Constant} from "../Constant";

const FooterWrap = styled.div`
height: 250px;
  background-color: #fbf8f3;
  @media (max-width: 480px) {
    height: 70vh;
  }
`


const Footer = () => {

    const footerStyle = {textAlign: "left", fontSize:"0.8rem", cursor: "pointer"}
    return(
        <Box
            component="footer"
        >
            <FooterWrap>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h6" color="text.primary" fontWeight={"bold"} gutterBottom style={footerStyle}>
                                {Constant.fiber}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={footerStyle}>
                                We are XYZ company, dedicated to providing the best service to our
                                customers. company, dedicated to providing the best service
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paddingTop="20px" style={footerStyle}>
                                Made with <FavoriteIcon style={{paddingTop: "5px"}}/>in the Netherlands
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <Typography variant="h6" color="text.primary" style={footerStyle} fontWeight={"bold"} gutterBottom >
                                {Constant.sitemap}
                                {
                                    Sitemap.map((item) => (
                                        <Typography variant="body2" color="text.secondary" padding={"5px"} key={item.id} style={footerStyle} >
                                            {item.title}
                                        </Typography>
                                    ))
                                }
                            </Typography>

                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <Typography variant="h6" color="text.primary" style={footerStyle}  fontWeight={"bold"} gutterBottom >
                                {Constant.resources}
                                {
                                    Resources.map((item) => (
                                        <Typography variant="body2" color="text.secondary" padding={"5px"} key={item.id} style={footerStyle}>
                                            {item.title}
                                        </Typography>
                                    ))
                                }
                            </Typography>

                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <Typography variant="h6" color="text.primary" style={footerStyle}  fontWeight={"bold"} gutterBottom >
                                {Constant.company}
                                {
                                    Company.map((item) => (
                                        <Typography variant="body2" color="text.secondary" padding={"5px"} key={item.id} style={footerStyle}>
                                            {item.title}
                                        </Typography>
                                    ))
                                }
                            </Typography>

                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="h6" color="text.primary"  fontWeight={"bold"} gutterBottom style={footerStyle} >
                                {Constant.portfolios}
                                {
                                    Portfolio.map((item) => (
                                        <Typography variant="body2" color="text.secondary" padding={"5px"} key={item.id} style={footerStyle}>
                                            {item.title}
                                        </Typography>
                                    ))
                                }
                            </Typography>

                        </Grid>
                    </Grid>
                </Container>

            </FooterWrap>
        </Box>
    )

}

export default Footer