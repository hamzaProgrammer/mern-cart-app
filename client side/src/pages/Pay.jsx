import { Button } from '@mui/material'
import React , { useState , useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {stripePayment} from '../server_api/Api'
import { useHistory } from 'react-router-dom'

const Pay = () => {
    const KEY = "pk_test_51J6YGhFaWYnNDelkqwFypW6eG4f0ywcWjbAoRWKd13ipcnYzmWr8UVCvn0e7c9o8uwDFCprkCZeuddXscS8a0jud00C4Tw9Hvf";
    const [ stripeToken , setStripeToken ] = useState(null);
    const history = useHistory();

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const { data } = await stripePayment({ tokenId: stripeToken.id , amount: 2000 })
                history.push('/success')
            } catch (error) {
                console.log("Error in makeRequest and error : ", error)
            }
        }
        stripeToken && makeRequest();
    }, [stripeToken , history])

    return (
        <>
            {
                stripeToken ? (
                    <span>Processing. Please wait ... </span>
                ) : (
                    <StripeCheckout
                        name="Hamza"
                        image = "https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        billingAddress
                        shippingAddress
                        description = "Your Total is $20"
                        amount={2000}
                        token={onToken}
                        stripeKey = {KEY}
                    >
                        <Button variant="contained" >Make Payment</Button>
                    </StripeCheckout>
                )
            }
        </>
    )
}

export default Pay
