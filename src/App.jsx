import React, { useEffect, useState } from 'react'
import  Sidebar  from './component/Sidebar'
import  Footer  from './component/Footer'
import MainPart from './component/MainPart'
const App = () => {
  
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);

  const [showModal,setShowModal]=useState(false);
  
  function handleToggleModel(){
    setShowModal(!showModal);
  }
  
  useEffect(()=>{
    async function fetchAPIData(){
      const NASA_KEY=import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      const today=(new Date()).toDateString;
      const localDate=`Nasa-${today}`;
      if(localStorage.getItem(localDate)){
        const apiData=JSON.parse(localStorage.getItem(localDate));
        setData(apiData);
        return ;
      }
      
      localStorage.clear();
      try{
        const res=await fetch(url);
        const apiData=await res.json();
        localStorage.setItem(localDate,JSON.stringify(apiData));
        setData(apiData);
        console.log("DATA:\n",apiData);
      }
      catch(err){
        console.error(err.message);
      }

    }
    fetchAPIData();
  },[])

  return (
    <>
      {data ? (<MainPart data={data}></MainPart>) : ( 
        <div className='loadingState'>
            <i className="fa-solid fa-gear"></i>

        </div> )}
     {showModal &&  <Sidebar handleToggleModel={handleToggleModel}  data={data} ></Sidebar>} 
      {data && <Footer handleToggleModel={handleToggleModel} data={data} ></Footer> } 
    </>
  );
}

export default App