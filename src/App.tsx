import React, {SetStateAction, useEffect, useState} from 'react';
import './App.css';
import {MainPage} from "./components/MainPage/MainPage";
import {Routes , Route} from 'react-router'
import {JobPage} from "./components/JobPage/JobPage";
import {NoMatch} from "./components/noMatch/NoMatch";
import {SavedJobs} from "./models/SavedJobs";
import {JobModel} from "./models/JobModel";

function App() {
    const [jobs , setJobs] = useState<JobModel[]>([])
    const [loading , setLoading] = useState<boolean>(true)
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,
            'Authorization': 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
        },
    }
    useEffect(()=>{
        const fetchData = async () => {
            const result:SetStateAction<JobModel[]> = await new Promise((res) => {
                fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data',requestOptions)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        res(data);
                    });
            });
            setJobs(result)
            setLoading(false)
        };
        fetchData();
    },[])
    const [saveJobs , setSaveJobs] = useState<SavedJobs[]>(() => {
        const saved = localStorage.getItem('save')
        const initialValue: [] = saved? JSON.parse(saved):[]
        return initialValue || []
    })
    return (
    <div className="App">
        <Routes>
            <Route path='/' element={<MainPage loading={loading} items={jobs} saveJobs={saveJobs} setSaveJobs={setSaveJobs}/>}></Route>
            <Route path='/job/:id' element={<JobPage loading={loading} items={jobs} saveJobs={saveJobs} setSaveJobs={setSaveJobs}/>}></Route>
            <Route path='*' element={<NoMatch/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
