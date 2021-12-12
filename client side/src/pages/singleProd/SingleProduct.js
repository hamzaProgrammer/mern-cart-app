import styled from 'styled-components'
import { useState , useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Announcements from '../../components/announcement/Announcement'
import NewsLetter from '../../components/newsletter/NewsLetter'
import Footer from '../../components/footer/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useLocation } from 'react-router-dom'
import { getMyProduct } from '../../server_api/Api'
import { addProduct } from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'


const Container = styled.div`

`;

const Wrapper = styled.div `
    display: flex;
    padding: 50px;
`;

const ImageContainer = styled.div `
    flex: 1;
`;


const Image = styled.img `
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div `
    flex: 1;
    padding: 0 50px;
`;

const Title = styled.h2 `
    font-weight: 700;
    font-size: 40px;
`;

const Desc = styled.p `
    margin: 20px 0px;
`;

const Price = styled.span `
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: 30px 0px;
`;


const Filter = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    margin-right: 15px;
`;


const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 7px;
`;


const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor:pointer;
`;


const FilterSize = styled.select`
    margin-left:10px;
    padding: 5px;
`;


const FilterSizeOption = styled.option``;


const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;


const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`;


const Button = styled.button`
    padding: 15px;
    border: 2px solid grey;
    background-color : white;
    cursor: pointer;
`;

const SingleProd = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    const [ product , setProduct ] = useState({})
    const [ quantity , setQuantity ] = useState(1)
    const [ color , setColor ] = useState("")
    const [ size , setSize ] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async() => {
            //const { data } = await getMyProduct(id);
            //console.log(data)
            //setProduct(data);
        }
        getProduct();
    },[id])

    const handleQty = (type) => {
        if(type === "inc"){
            setQuantity(quantity + 1)
        }else{
            quantity > 1 && setQuantity(quantity - 1)
        }
    }

    // adding to cart
    const handleCart = () => {
        dispatch(addProduct({ ...product , quantity , color , size }))
    }

    return (
        <>
            <Container>
                <Navbar/>
                <Announcements/>
                    <Wrapper>
                        <ImageContainer>
                            <Image src="https://media.istockphoto.com/photos/brown-eyed-woman-is-looking-tenderly-at-viewer-make-up-hairdressing-picture-id1280410981?b=1&k=20&m=1280410981&s=170667a&w=0&h=Q8wh4aBkJ1eBwKHIE0Mhszc8MVdrMxCweQdPr3ijnHI=" />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{product?.title || "Product Name"}</Title>
                            <Desc>{product?.desc || "lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versi" }</Desc>
                            <Price>{product?.price || "$20" }</Price>
                            <FilterContainer>
                                <Filter>
                                    <FilterTitle>Colors:</FilterTitle>
                                        {
                                            product?.color?.map((c) => (
                                                <FilterColor color={c} key={c}  onClick={(e)=>setColor(e.target.value)} />
                                            ))
                                        }
                                </Filter>

                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                {
                                    product?.size?.map((s) => (
                                        <FilterSizeOption size={s} key={s}  onClick={(e)=>setSize(e.target.value)} />
                                    ))
                                }
                                </FilterSize>
                            </FilterContainer>
                            <AddContainer>
                                <AmountContainer  >
                                    <RemoveIcon onClick={() => handleQty("dec")} style={{cursor: "pointer"}} />
                                    <Amount>{quantity}</Amount>
                                    <AddIcon  onClick={() => handleQty("inc")} style={{cursor: "pointer"}} />
                                </AmountContainer>
                                <Button onClick={handleCart} >ADD TO CART</Button>
                            </AddContainer>
                        </InfoContainer>
                    </Wrapper>
                <NewsLetter/>
                <Footer/>
            </Container>
        </>
    )
}

export default SingleProd;