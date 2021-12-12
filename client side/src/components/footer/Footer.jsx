import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Container = styled.div`
    display: flex;
    margin-top: 30px;
`;

const Left = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Center = styled.div `
    flex: 1;
    padding: 20px;
`;

const Right = styled.div `
    flex: 1;
    display: flex;
    flex-direction:column
`;

const Logo = styled.h1``;

const Title = styled.h2`
    margin-bottom : ${props => props.margin};
    margin-top: ${props => props.top}
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap
`;

const ListItem = styled.li `
    width: 50%;
    margin-bottom : 10px;
    font-size: 20px;
`;


const Desc = styled.p`
    margin: 20px 0;
`;


const SocialContainer = styled.div`
    display: flex;
`;


const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    align-items: center;
    padding-top: 10px;
    padding-left: 12px;
    justify-content: center;
    background-color: ${props => props.color};
    margin-right: 20px;
    color: white
`;

const ContactItem = styled.div`
    margin-top: ${props => props.margin};
    padding-top: 10px;
    display: flex;
    margin-right: 5px;
`;


const Payment = styled.img`
    width: 70px;
    height: 30px;
    margin-right: 10px;
    margin-top: 30px;
`;




const Footer = () => {
    return (
        <>
            <Container>
                <Left>
                    <Logo>OutFitters</Logo>
                    <Desc>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </Desc>
                    <SocialContainer>
                        <SocialIcon color="#385999" >
                            <InstagramIcon/>
                        </SocialIcon>
                        <SocialIcon color="#E4405F">
                            <FacebookIcon/>
                        </SocialIcon>
                        <SocialIcon color="#55ACEE">
                            <LinkedInIcon/>
                        </SocialIcon>
                        <SocialIcon color="#E60023" >
                            <YouTubeIcon/>
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title margin="15px" top='0' >Usefull Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>Whislits</ListItem>
                        <ListItem>Order Traking</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>Whislits</ListItem>
                        <ListItem>Order Traking</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title margin='-5px' top='20px'>Contact</Title>
                    <ContactItem margin='15px' >
                        <RoomIcon/>12-4, Banglore
                    </ContactItem>
                    <ContactItem margin="10px">
                        <AddIcCallIcon/>0336-5454564
                    </ContactItem>
                    <ContactItem margin="10px" >
                        <EmailIcon/> contact@ hamza@gmail.com
                    </ContactItem>
                    <div>
                        <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcUEKuHqgJ35NLLdXZGrLURQ7AejD-zAQ2g&usqp=CAU" />
                        <Payment src="data:image/jpeg;base64,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" />
                        <Payment src="data:image/png;base64,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" />
                    </div>
                </Right>
            </Container>
        </>
    )
}

export default Footer;