import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Container = styled.div`
    width : 100%;
    height: 100vh;
    background-color: transparent;
    display : flex;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative
`;


const Slide = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.bg}
`;


const ImgContainer = styled.div`
    height : 100%;
    flex: 1;
    max-width: 50%;
`;

const Image = styled.img`
    object-fit: cover;
    height: 100%;
    max-width: 100%
`;

const Title = styled.h1`
    font-size: 70px;
    font-weight: 700
`;


const Desc = styled.p`
    margin: 50px 0;
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: 600;
    justify-content: center;
`;


const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color:transparent;
    cursor:pointer;
`;




const InfoContainer = styled.div`
    flex: 1;
    padding:50px;
    max-width: 50%
`;



const Slider = () => {
    return (
        <Container>
                <Carousel autoPlay dynamicHeight infiniteLoop swipeable >
                <div>
                    <Slide bg='transparent'>
                    <ImgContainer>
                        <Image  src="https://www.nicepng.com/png/full/6-60018_fashion-model-png-transparent.png" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                </div>
                <div>
                    <Slide  bg = 'transparent' >
                    <ImgContainer>
                        <Image  src="https://www.nicepng.com/png/full/6-60018_fashion-model-png-transparent.png" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Winter SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                </div>
                <div>
                    <Slide  bg = 'transparent' >
                    <ImgContainer>
                        <Image  src="https://www.nicepng.com/png/full/6-60018_fashion-model-png-transparent.png" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Spring SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                </div>
            </Carousel>
        </Container>
    )
}

export default Slider;