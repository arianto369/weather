import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'

function App (){
  const[weather , setWeather] = useState();
  useEffect(()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=8c49dcb54fa226f7bd9765e93ed85e13&q=Tehran')
    .then(res=>res.json())
    .then(jason=>setWeather(jason))
  }) 
  
  if(!weather) return null;
  
  return (
    <div className='main'>
     <div className="serachname">
      <input type="search"  id='serach' placeholder='Enter Your city'/>
      <button>serach</button>
     </div>
      <h1>{weather.name}</h1>
    
      <p>{weather.sys.country}</p>
    
      <span>{weather.main.temp}</span> 
    </div>
  )
}


export default App;
