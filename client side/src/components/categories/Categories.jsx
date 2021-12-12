import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: flex;
    padding: 20px;
    height: 400px;
    overflow:hidden;
    justify-content: space-around;
    margin-bottom: 0;
`;


const Categories = () => {
    return (
        <>
            <Container>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </Container>
        </>
    )
}

export default Categories
