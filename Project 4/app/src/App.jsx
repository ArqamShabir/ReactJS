
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import SearchResult from './components/SearchResult';

export const BASE_URL = "http://localhost:9000";

function App() {

    const[data,setData] = useState(null);
    const[loading,setloading] = useState(false);
    const[error,setError] = useState("");
    const[filterData,setFilterData] = useState(null);
    const[selectedBtn,filterSelectedBtn] = useState("all");

    useEffect(() => {
      const fetchFoodData = async () => {
        setloading(true);
        try {
          const response = await fetch(BASE_URL);
          const json = await response.json();
          setData(json);
          setFilterData(json);
          setloading(false);
        } catch (error) {
          setError("There is a error fetching the data");
        }  
    };
    fetchFoodData();
    }, []);

    const filter = (btn,e) => {
      const value = e.target.value;
      const type = btn;
      if(value === "")
      {
        setFilterData(null);
      }

      const filterResult = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));

      if(selectedBtn === "all")
      {
        const filterResult3 = data?.filter((food) => food.name.toLowerCase().includes(value.toLowerCase()));
        setFilterData(filterResult3);
        return;
      }

      const filterResult2 = filterResult?.filter((food) => food.name.toLowerCase().includes(value.toLowerCase()));

      setFilterData(filterResult2);

    }

    const filterBtn = (type) => {
      if(type === "all")
      {
        setFilterData(data);
        filterSelectedBtn(type);
        return;
      }

      const filterResult = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
      setFilterData(filterResult);
      filterSelectedBtn(type);
    }

    if(error) return <h1>{error}</h1>;
    if(loading) return <h1>Loading....</h1>

    const btndata = [
      {
        name:"All",
        type:"all",
      },
      {
        name:"Breakfast",
        type:"breakfast",
      },
      {
        name:"Lunch",
        type:"lunch",
      },
      {
        name:"Dinner",
        type:"dinner",
      }
    ]

  return (
    <>
      <MainContainer>

      <TopContainer>
        <div className='logo'>
          <img src='/logo.svg' alt='logo' />
        </div>
        <div className='search'>
          <input onChange={(event) => (filter(selectedBtn,event))} type='text' placeholder='Search Here...' />
        </div>
      </TopContainer>

      <FilterContainer>
        {btndata.map((value) => (
          <Button isSelected={value.type === selectedBtn} key={value.type} onClick={() => filterBtn(value.type)}>{value.name}</Button>
        ))}
      </FilterContainer>
      </MainContainer>

      <SearchResult data={filterData}/>
    </>
  )
}

export const MainContainer = styled.div`
    max-width:1200px;
    margin:0 auto;
    padding-bottom:40px;
`;

const TopContainer = styled.div`
    height:140px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:16px;

    .search input{
        all:unset;
        border:1px solid red;
        padding:10px;
        color:#fff;
        border-radius:5px;
      }
      input::placeholder{
        color:#fff;
      }
    @media (0 < width < 768px)
    {
      flex-direction:column;
      height:120px;
    }  
`;

const FilterContainer = styled.div`
      display:flex;
      justify-content:center;
      gap:12px;
`;

export const Button = styled.button`
border-radius: 5px;
padding:6px 12px;
border:none;
color:#fff;
cursor:pointer;
background: ${({isSelected})=> (isSelected ? ' #f22f2f' : '#FF4343')};
outline: 1px solid ${({isSelected})=> (isSelected ? '#fff' : 'none')};
&:hover{
  background: #f22f2f;
}
`;
export default App