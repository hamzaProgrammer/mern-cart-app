import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 25px;
    background-color: teal;
    color: white;
    padding-left: 550px;
    font-size: 20px;
    padding-top: 5px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600
`;



const Announcement = () => {
    return (
        <>
            <Container>
                Super Deal Free offer for order over $10
            </Container>
        </>
    )
}

export default Announcement
