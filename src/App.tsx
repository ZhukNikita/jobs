import React, {useEffect, useState} from 'react';
import './App.css';
import {MainPage} from "./components/MainPage/MainPage";
import {Routes , Route} from 'react-router'
import {JobPage} from "./components/JobPage/JobPage";
import {NoMatch} from "./components/noMatch/NoMatch";
import {SavedJobs} from "./models/SavedJobs";

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
    const [saveJobs , setSaveJobs] = useState<SavedJobs[]>(() => {
        const saved = localStorage.getItem('save')
        const initialValue: [] = saved? JSON.parse(saved):[]
        return initialValue || []
    })
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<MainPage items={jobs} saveJobs={saveJobs} setSaveJobs={setSaveJobs}/>}></Route>
            <Route path='/job/:id' element={<JobPage items={jobs} saveJobs={saveJobs} setSaveJobs={setSaveJobs}/>}></Route>
            <Route path='*' element={<NoMatch/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
