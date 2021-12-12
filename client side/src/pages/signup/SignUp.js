import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-width: 100%;
    overflow: hidden;
    background: linear-gradient(rgba(225,225,225,0.5) , rgba(225,225,225,0.5)),
                url('https://assets.vogue.com/photos/60144e6748c2e1a66dc237ac/4:3/w_2624,h_1968,c_limit/VO0321_Cover.jpg')
                no-repeat;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100vh;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap
`;

const Title = styled.h1`
    font-size:24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    max-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Aggrement = styled.span`
    font-size: 12px;
    margin: 30px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor:pointer;
    margin-top: 10px;
    justify-content:center;
`;

const SignUp = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="Name" />
                        <Input placeholder="Last name" />
                        <Input placeholder="Username" />
                        <Input placeholder="Email" />
                        <Input placeholder="Password" />
                        <Input placeholder="Confirm Password" />
                    </Form>
                    <Aggrement>
                        By creating an account , I aggre to term and coditions of this website
                    </Aggrement>
                    <Button>CREATE</Button>
                </Wrapper>
            </Container>
        </>
    )
}

export default SignUp
