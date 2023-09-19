import axios from 'axios'
import React, { useState } from 'react'
import DataShow from './DataShow';

function Weather() {
  const[cityname,setcity]=useState('')
  const[data,setData]=useState('')
  const APIkey='72f425e183edb83c4c6834839e1014b7';
  const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`;
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
        const response=await axios.get(API_URL)
        setData(response.data)
        console.log(data)
    }catch(error){
        console.log(error)
    }
  }


  return (
    <div>
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="city" value={cityname} onChange={(e)=>{setcity(e.target.value)}} ></input>
            <button type="submit">Serach</button>
        </form>
    </div>
   )
}
export default Weather;
