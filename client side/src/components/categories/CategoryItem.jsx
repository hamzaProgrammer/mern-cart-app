import { Link } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    flex: 1;
    margin: 3px;
    max-width: 380px;
    max-height: 400px;

`;

const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div `
    height: 100%;
    width: 100%;
    padding-left: 40px;
    margin-top: -250px;
`;

const Title = styled.h1 `
    color: #ffffff;
    font-size: 45px;
    text-transform:uppercase;
`;

const Button = styled.button `
    border: 0.5px solid transparent;
    font-size: 18px;
    padding: 5px;
    height: 30px;
    font-weight: 700;
    cursor:pointer;
    color: #ff4d4d;
    width: 120px;
    margin-left: 90px;
    background-color: #ffffff;
    margin-top: 15px;
`;

const CategoryItem = ({item}) => {
    return (
        <>
            <Container>
                <Link to={`/products/${item?.cat}`}>
                    <Image src="https://thumbs.dreamstime.com/b/beauty-brunette-model-girl-perfect-makeup-trendy-accessories-fashion-wear-88929334.jpg" />
                    <Info>
                        <Title>Winter Title</Title>
                        <Button>SHOP NOW</Button>
                    </Info>
                </Link>
            </Container>
        </>
    )
}

export default CategoryItem
