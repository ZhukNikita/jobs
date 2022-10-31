import React, {useEffect, useState} from 'react';
import './App.css';
import {MainPage} from "./components/MainPage/MainPage";
import {Routes , Route} from 'react-router'
function App() {
    const [jobs , setJobs] = useState([])
    useEffect(()=>{
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' ,
                'Authorization': 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
            },

        }
        fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data'  ,requestOptions)
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(e => console.log(e))
    },[])
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<MainPage items={jobs}/>}></Route>
            <Route path='/job' element={<JobPage items={jobs}/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
