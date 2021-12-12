import React , { useState , useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product';
import { getAllProducts } from '../../server_api/Api'


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


const Products = ({catg , sort , filter}) => {
    const [ products , setProducts ] = useState([])
    const [ filterProd ,setFilteredProd ] = useState([])

    useEffect(() => {
        const getProducts = async() => {
            try {
                const { data } = catg ?  await getAllProducts(catg) : await getAllProducts() ;
                //setProducts(data)
                console.log("Producst are : " , data)
            } catch (error) {
                console.log("Error in getProducts in Client and error is : ", error)
            }
        }
        getProducts();
    }, [catg])

    useEffect(() => {
        catg && setFilteredProd(
            products.filter(item => Object.enteries(filter).every(([key,value]) =>
                item[key].includes(value)
            ))
        )
    },[products, catg , filter])

    useEffect(() => {
        if(sort === "newest"){
            setFilteredProd((prev) =>
                [...prev].sort((a,b) => a.createdAt - b.createdAt)
            )
        }else if(sort === "assc"){
            setFilteredProd((prev) =>
                [...prev].sort((a,b) => a.price - b.price)
            )
        }else{
            setFilteredProd((prev) =>
                [...prev].sort((a,b) => a.price - b.price)
            )
        }
    })

    return (
        <>
            <Container>
            {/* {
                catg ? filterProd.map((item) => (<Product item={item} key={item} />)) :
                        filterProd.slice(0,8).map((item) => (<Product item={item} key={item} />))
            } */}
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </Container>
        </>
    )
}

export default Products
