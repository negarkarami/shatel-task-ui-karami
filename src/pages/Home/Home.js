import Layout from "../../component/layout";
import {styled} from "styled-components";
import {Grid } from "@mui/material";
import {StarIcon} from "../../component/swgIcon/swgIconStart";
import {Constant} from "../../component/Constant";
import {Link} from "react-router-dom";
import {IconCheck} from "../../component/swgIcon/swgIconCheck";
import pic1 from "../../assets/img/hero-Illustration.png";
import {CardBoxData} from "../../component/blog/cardBoxData";
import CartBox from "../../component/cards/cardbox/CartBox";
import pic2 from "../../assets/img/Page Image.png"
import {ButtonCustom, ButtonCustomBlue, WrapperTag} from "../../component/Button";
import {CardPersonalData} from "../../component/blog/cardPersonalData";
import CartBoxPersonal from "../../component/cards/cardboxPeronal/CartBoxPersonal";
// Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const WrapperSectionOne = styled.div`
  background-color: #fbf8f3;
  //height: 80vh;
  height: calc(90vh - 60px);
`;
const WrapperSectionLeft = styled.div`
  padding-top: 130px;
  @media (max-width: 480px) {
    padding-top:80px;
  }

`;
const WrapperIcon = styled.div`
`;

const TextIcon = styled.span`
  margin-left: 13px;
`;

const BoxTitles = styled.div`
  text-align: left;
`;

const Title = styled.h2`
  margin: 15px 0 0 220px;
  font-size: 3rem;
  @media (max-width: 480px) {
    margin-left: 50px ;
    font-size: 1rem;
    line-height: 2;
  }
`;
const Desvription = styled.h1`
  margin: 15px 0 0 220px;
  line-height: 1.5;
  font-size: 1rem;
  color: #666;

  @media (max-width: 480px) {
    margin-left: 50px ;
    font-size: 1rem;
    line-height: 2;
  }
`;

const BoxStartTrial = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  margin: 20px auto;
  padding-left: 35px;
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    padding-left: 0;
  }

`;
const LinkTrial = styled(Link)`
  color: #4d13d1;
  font-weight: bold;
  @media (max-width: 480px) {
    margin-top: 20px;
  }

`;
const WrapperChecked = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width:65%;
  margin: 30px auto;
  padding-left: 80px;
  @media (max-width: 480px) {
    width: 100%;
    padding-left: 0;
    text-align: center;
  }
`;

const WrapBoxCheck = styled.div`
  display: flex;
  justify-content: space-around;
`;

const WrapperImage = styled.div`
  margin-top: 40px;
  > img {
    height: 65%;
    width: 65%;
  }
  @media (max-width: 480px) {
    margin-top: 0;
  }
  

`;
const WrapperSectionTwo = styled.div`
  height: 60vh;
  margin-top: 60px;
`;

const BoxMode = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

const WrapperTitle = styled.div`
  text-align: left;
  margin-bottom: 30px;

  > h4{
    color:#4d13d1 ;
    padding-bottom: 25px;
  }

  > h2 {
    color: #000;
    font-size: 1.8rem;
    padding-bottom: 5px;
    font-weight: bold;
  }
`;
const BowPicture = styled.div`
  background-image: linear-gradient(to bottom, rgba(85,27,219,255),rgba(105,45,242,255));
  height: 55vh;
  border-radius: 10px;
  margin-bottom: 50px;
  @media (max-width: 480px) {
    margin-top: 290px;
    height: 70vh;
    width: 100%;

  }
`;

const BoxPicLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 120px;
  margin-left: 40px;

  > h2 {
    font-size:1.6rem;
    color: white;
    margin-bottom: 10px;
  }
  > h5 {
    font-size:0.8rem;
    color: #ccc3e9;
    letter-spacing: 1px;
    line-height: 1.5;
  ;
  }
  @media (max-width: 480px) {
    margin: 10px;
    //font-size:0.8rem;
    text-align: center;
  }
`;

const BoxPicRight = styled.div``;
const BtnTrial = styled.div`
  text-align: left;
  margin-top: 15px;
  @media (max-width: 480px) {
    text-align: center;

  }
`;


const WrapImage = styled.div`
  > img {
    margin-top: 50px;
    height: 85%;
    width: 85%;
  }

`;

const Home = () => {

    return(
       <Layout>
           <WrapperTag>
               <WrapperSectionOne>
                   <Grid container spacing={2}>
                       <Grid item xs={12} md={6} sm={6}>
                           <WrapperSectionLeft>
                               <WrapperIcon>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <TextIcon>
                                       {Constant.TitleStar}
                                   </TextIcon>
                               </WrapperIcon>
                               <BoxTitles>
                                   <Title>{Constant.createPortfolio}</Title>
                                   <Desvription>{Constant.FilberDesc}</Desvription>
                               </BoxTitles>
                               <BoxStartTrial>
                                   <ButtonCustomBlue variant="contained"  >
                                       {Constant.btnTitle}
                                   </ButtonCustomBlue>
                                   <LinkTrial to={'/'}>{Constant.view}</LinkTrial>
                               </BoxStartTrial>
                               <WrapperChecked>
                                   <WrapBoxCheck>
                                       <IconCheck/>
                                       <h4>{Constant.credit}</h4>
                                   </WrapBoxCheck>
                                   <WrapBoxCheck>
                                       <IconCheck/>
                                       <h4>{Constant.template}</h4>
                                   </WrapBoxCheck>
                               </WrapperChecked>
                           </WrapperSectionLeft>
                       </Grid>
                       <Grid item xs={12} md={6} sm={6}>
                               <WrapperImage>
                                   <img src={pic1}/>
                               </WrapperImage>
                       </Grid>
                   </Grid>
               </WrapperSectionOne>
           </WrapperTag>
           <BoxMode>
               <WrapperSectionTwo>
                   <WrapperTitle>
                       <h4>{Constant.whyFiber}</h4>
                       <h2>{Constant.goodPortfolio1}</h2>
                       <h2>{Constant.goodPortfolio2}</h2>
                   </WrapperTitle>
                   <Grid container spacing={2}>
                           {
                               CardBoxData.map((item, index) => (
                                   <Grid item xs={12} md={4}>
                                     <CartBox item ={item} key={index}/>
                                   </Grid>
                               ))
                           }
                   </Grid>
               </WrapperSectionTwo>
           </BoxMode>
           <BoxMode>
               <BowPicture>
                   <Grid container spacing={2}>
                       <Grid item xs={12} md={6}>
                           <BoxPicLeft>
                               <h2>{Constant.diversify}</h2>
                               <h5>{Constant.diversifyDec}</h5>
                               <h5>{Constant.diversifyDec2}</h5>
                               <BtnTrial>
                                   <ButtonCustom variant="contained" sx={{
                                           ':hover': {
                                               bgcolor: 'primary.main', // theme.palette.primary.main
                                               color: 'white',
                                           },
                                       } } >
                                       {Constant.btnTitle}
                                   </ButtonCustom>
                               </BtnTrial>
                           </BoxPicLeft>
                       </Grid>
                       <Grid item xs={12} md={6}>
                           <BoxPicRight>
                               <WrapImage>
                                   <img src={pic2}/>
                               </WrapImage>
                           </BoxPicRight>
                       </Grid>
                   </Grid>
               </BowPicture>
           </BoxMode>
           <BoxMode>
               <WrapperSectionTwo>
                   <Swiper
                       breakpoints={{
                           // when window width is >= 360px

                          360: {
                               width: 360,
                               slidesPerView: 1.1,
                           },

                           // when window width is >= 640px
                           640: {
                               width: 640,
                               slidesPerView: 1,
                           },
                           // when window width is >= 768px
                           768: {
                               width: 768,
                               slidesPerView: 2,
                           },
                       }}
                       modules={[Navigation, Pagination, Scrollbar, A11y]}
                       spaceBetween={30}
                       slidesPerView={3}

                       pagination={{ clickable: true }}
                       onSwiper={(swiper) => console.log(swiper)}
                       onSlideChange={() => console.log('slide change')}
                   >
                       <Grid container spacing={2}>
                           {
                               CardPersonalData.map((item, index) => (
                                   <Grid item xs={12} md={4}>
                                           <SwiperSlide style={{height:"45vh"}}>
                                                <CartBoxPersonal item ={item} key={index} style={{zIndex:"34"}}/>
                                           </SwiperSlide>

                                   </Grid>
                               ))
                           }
                       </Grid>
                   </Swiper>

               </WrapperSectionTwo>
           </BoxMode>



       </Layout>
    )
}

export default Home