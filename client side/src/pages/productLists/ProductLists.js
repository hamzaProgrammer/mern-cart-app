import styled from 'styled-components'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Announcements from '../../components/announcement/Announcement'
import NewsLetter from '../../components/newsletter/NewsLetter'
import Footer from '../../components/footer/Footer'
import Products from '../../components/productsLists/Products'

const Container = styled.div`

`;

const Title = styled.h1 `
    margin: 20px;
    font-size: 40px;
`;

const FilterContainer = styled.div `
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div `
    margin: 20px;
`;

const FilterText = styled.p`
    font-size: 20px;
    font-weight: 600;
`;


const Select = styled.select`
    margin-right: 20px;
    margin-left: 10px;
    width: 100px;
    height: 40px;
    border: 2px solid grey;
`;

const Option = styled.option`
    font-weight: 700;
`;


const ProductsLists = () => {
    const location = useLocation()
    const catg = location.pathname.split("/")[2];
    const [ filter , setFilter ] = useState({})
    const [ sort , setSort ] = useState("newest")
    
    const handleFilters = (e) => {
        const value = e.target.value
        setFilter({[e.target.name] : value})
    }

    return (
        <>
            <Container>
                <Navbar/>
                <Announcements/>

                <Title>Dresses</Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>
                            Filter Products:
                            <Select name="color" onChange={handleFilters} >
                                <Option dsiabled  >Color</Option>
                                <Option>White</Option>
                                <Option>Black</Option>
                                <Option>Red</Option>
                                <Option>Blue</Option>
                                <Option>Pink</Option>
                            </Select>
                            <Select name="size" onChange={handleFilters} >
                                <Option dsiabled  >Size</Option>
                                <Option>XL</Option>
                                <Option>L</Option>
                                <Option>M</Option>
                                <Option>S</Option>
                                <Option>XS</Option>
                            </Select>
                        </FilterText>
                    </Filter>
                    <Filter>
                        <FilterText>
                            Sort Products:
                            <Select onChange={(e) =>setSort(e.target.value) }>
                                <Option value="newest" >Newset</Option>
                                <Option value="assc" >Price(Assc)</Option>
                                <Option value="desc" >Price (desc)</Option>
                            </Select>
                        </FilterText>
                    </Filter>
                </FilterContainer>

                <Products  cat={catg} filters={filter} sort={sort} />

                <NewsLetter/>
                <Footer/>
            </Container>
        </>
    )
}

export default ProductsLists