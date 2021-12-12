import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom'

const Container = styled.div `
    flex: 3;
    margin:5px;
    height: 320px;
    display: flex;
    width: 300px;
    background-color:red;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    background-color:#f5fbfd;
    align-items: center;
    &:hover {
        background: rgba(0,0,0,0.2) ;
    }
`;



const Image = styled.img`
    height: 90%;
    width: 75%;
    object-fit: cover;
    z-index: 999;
`;

const Info = styled.div`
    padding-left: 10px;
`;

const Icon = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:#4b4b4b
`;



const Product = ({item}) => {
    return (
        <>
            <Container>
                <Image src="https://images.unsplash.com/photo-1586078130702-d208859b6223?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <Info>
                    <Icon>
                        <ShoppingCartIcon/>
                    </Icon>
                    <Icon>
                        <Link to={`product/${48459852}`} style={{color: 'inherit'}}>
                            <SearchIcon/>
                        </Link>
                    </Icon>
                    <Icon>
                        <FavoriteBorderIcon/>
                    </Icon>
                </Info>
            </Container>
        </>
    )
}

export default Product
