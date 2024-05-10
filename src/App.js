

import React from "react";
import { useState,useEffect } from 'react'
import {apiURL,filterData} from './data'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from "./components/Cards"
import { toast } from "react-toastify";
import Spinner from "./components/Spinner"
import './components/Common.css'
function App(){
  const[courses,setCourses] = useState('null');
  const [loading , setLoading] = useState(true); 
  const[category,setCategory] = useState(filterData[0].title)
  
    async function fetchData(){
      setLoading(true);
      try{
        const res = await fetch(apiURL);
        const output = await res.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }

    useEffect(()=>{
    fetchData();
  },[])
return(
  <div className="MainBox"> 
    <div><Navbar /></div>
    <div> <Filter filterData = {filterData} catogory ={category} setCategory={setCategory}></Filter></div>
    <div className="cards">
      {
        loading ? (<Spinner/>):(<Cards courses = {courses} category={category}/>)
      }
    </div>
  </div>
)
}

export default App; 
 