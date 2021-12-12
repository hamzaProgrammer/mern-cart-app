import React , {useState , useEffect} from 'react'
import styled from 'styled-components'
import Navbar from './../../components/navbar/Navbar';
import Announcement from './../../components/announcement/Announcement';
import Footer from './../../components/footer/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { stripePayment } from '../../server_api/Api'
import { useHistory } from 'react-router-dom'

const KEY = process.env.REACT_APP_STRIPE
console.log("Key : ", KEY)

const Container = styled.div`

`;

const Wrapper = styled.div `
    padding: 20px;
`;

const Title = styled.h1 `
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Bottom = styled.div `
    display:flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 2px solid #eee;
    padding-bottom: 5px;
`;

const TopButton = styled.div `
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled"  && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled"  && "none"};
`;


const TopTexts = styled.div`

`;

const TopText = styled.span `
    text-decoration: underline;
    cursor:pointer;
    margin: 0px 10px;
`;


const Info = styled.div`
    flex: 3;
`;



const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom:5px;
    border-bottom: 2px solid #eee;
`;

const ProductDetail = styled.div `
    display: flex;
    flex: 2;
`;

const Image = styled.img `
    width: 200px;
    height: 150px;
    object-fit: cover;
`;

const Details = styled.div `
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span ``;

const ProductId = styled.span ``;

const ProductColor = styled.div `
    width: 20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color}
`;

const ProductSize = styled.span ``;

const PriceDetails = styled.div `
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;


const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div `
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div `
    font-size: 30px;
`;

const Summery = styled.div `
    flex: 1;
    border:0.5px solid lightgrey;
    border-radius: 10px;
    padding :20px;
    height: 50vh;
`;

const SummeryTitle = styled.h1`
    font-weight: 200;
`;

const SummeryItem = styled.div `
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;

const SummeryItemText = styled.span ``;

const SummeryItemPrice = styled.span ``;

const Button = styled.button `
    width: 100%;
    padding:10px;
    background-color: black;
    color:white;
    font-weight: 600;
    cursor: pointer
`;








const Cart = () => {
    const cartItems = useSelector(state => state.cart)
    const [ stripeToken , setStripeToken ] = useState(null);
    const history = useHistory()

    const onToken = (token) => {
        setStripeToken(token)
    }
    console.log(stripeToken)

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const { data } = await stripePayment({ tokenId: stripeToken.id , amount: cartItems.total * 100 })
                history.push('/success' , data)
            } catch (error) {
                console.log("Error in makeRequest and error : ", error)
            }
        }
        stripeToken && cartItems.total >= 1 &&  makeRequest();
    }, [stripeToken , history , cartItems.total])
    return (
        <>
            <Container>
                <Navbar/>
                <Announcement/>
                    <Wrapper>
                        <Title>Your Bag</Title>
                        <Top>
                            <TopButton>CONTINUE SHOPPING</TopButton>
                            <TopTexts>
                                <TopText>Shopping bag(2)</TopText>
                                <TopText>Your Wishlist(0)</TopText>
                            </TopTexts>
                            <TopButton>CHECKOUT NOW</TopButton>
                        </Top>
                        <Bottom>
                            <Info>
                            {
                                Object.values(cartItems).map((prod) => (
                                    <Product key={prod._id} >
                                        <ProductDetail>
                                            <Image src={ prod?.img || "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" } />
                                            <Details>
                                                <ProductName><b>Product: </b>{ prod?.title ||  "JESSIE HUNDERED SHOES" }</ProductName>
                                                <ProductId><b>ID:</b>{ prod?._id || "97589755" }</ProductId>
                                                <ProductColor color={ prod?.color  || "black" } />
                                                <ProductSize><b>Size:</b> {prod?.size ||  "37.8" }</ProductSize>
                                            </Details>
                                        </ProductDetail>
                                        <PriceDetails>
                                            <ProductAmountContainer>
                                                <AddIcon/>
                                                    <ProductAmount>{prod?.quantity || "12"}</ProductAmount>
                                                <RemoveIcon/>
                                            </ProductAmountContainer>
                                            <ProductPrice> {prod?.price * prod?.quantity || "$30" }</ProductPrice>
                                        </PriceDetails>
                                    </Product>
                                ))
                            }
                            </Info>
                            <Summery>
                                <SummeryTitle>Order Summery</SummeryTitle>
                                    <SummeryItem>
                                        <SummeryItemText>Subtotal</SummeryItemText>
                                        <SummeryItemPrice>{cartItems?.total || "$10" }</SummeryItemPrice>
                                    </SummeryItem>
                                    <SummeryItem>
                                        <SummeryItemText>Estimated Shippig </SummeryItemText>
                                        <SummeryItemPrice>$5</SummeryItemPrice>
                                    </SummeryItem>
                                    <SummeryItem>
                                        <SummeryItemText>Shippig Discount</SummeryItemText>
                                        <SummeryItemPrice>-$4.90</SummeryItemPrice>
                                    </SummeryItem>
                                    <SummeryItem  type = "total" >
                                        <SummeryItemText >Total</SummeryItemText>
                                        <SummeryItemPrice>$80</SummeryItemPrice>
                                    </SummeryItem>
                                    <StripeCheckout
                                        name="Hamza"
                                        image = "https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        billingAddress
                                        shippingAddress
                                        description = "Your Total is $20"
                                        amount={cartItems.total * 100}
                                        token={onToken}
                                        stripeKey = {KEY}
                                    >
                                        <Button variant="contained" >Make Payment</Button>
                                    </StripeCheckout>
                            </Summery>
                        </Bottom>

                    </Wrapper>
                <Footer/>
            </Container>
        </>
    )
}

export default Cart
