import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 60px;
    background-color: black;
    @media only screen and (max-width: 380px){
        display: none;
    }
`;

const Wrapper = styled.div`
    padding : 10px 20px;
    color : #fff;
    display : flex;
    justify-content: space-between;
    align-items: center
`;

const Left = styled.div`
    flex: 1;
    display: flex;
`;

const Center = styled.div `
    flex: 1;
    text-align: center
`;

const Right = styled.div `
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-top: 10px
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;


const SearchContainer = styled.div`
    //border: 0.2px solid lightgrey;
    display : flex;
    align-items: center;
    padding: 5px;
    margin-left: 5px
`;

const Logo = styled.h1`
    font-weight: bold;
`;


const Input = styled.input``;


const Navbar = () => {
    const cartQty = useSelector(state => state.cart.quantity);
    console.log("Cart : ",cartQty)
    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input/>
                            <SearchIcon/>
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Logo>OutFitters</Logo>
                    </Center>
                    <Right>
                        <MenuItem>REGISTER</MenuItem>
                        <MenuItem>SIGN IN</MenuItem>
                        <Badge badgeContent={cartQty} style={{backgroundColor: '#f7f1e3' , marginLeft: '25px' , borderRadius: '50%' , fontSize: '17px'}} color="primary">
                        <Link to="/cart">
                            <ShoppingCartIcon color="action" />
                        </Link>
                        </Badge>
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default Navbar
