import style from './JobsList.module.css'
import {JobModel} from "../../models/JobModel";
import {JobItem} from "../JobItem/JobItem";
import React, {useEffect, useState} from "react";
import {SavedJobs} from "../../models/SavedJobs";
interface JobsListInt {
    items: JobModel[]
}
export const JobsList : React.FC<JobsListInt> = ({items})=> {
    const [saveJobs , setSaveJobs] = useState<SavedJobs[]>(() => {
        const saved = localStorage.getItem('save')
        const initialValue: [] = saved? JSON.parse(saved):[]
        return initialValue || []
    })
    function isRatingJob(job: JobModel){
        if(job=== items[0]) return true
        if(job=== items[2]) return true
    }
    return(
        <div className={style.list}>
            {
                items.map(job =>
                    <JobItem saveJobs={saveJobs} setSaveJobs={setSaveJobs} rating = {isRatingJob(job)} item = {job} key={job.id}/>
                )
            }
        </div>
    )
}