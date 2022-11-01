import style from './JobsList.module.css'
import {JobModel} from "../../models/JobModel";
import {JobItem} from "../JobItem/JobItem";
import React, {Dispatch, SetStateAction, useState} from "react";
import {SavedJobs} from "../../models/SavedJobs";
interface JobsListInt {
    items: JobModel[]
    saveJobs : [],
    setSaveJobs : Dispatch<SetStateAction<SavedJobs[]>>
}
export const JobsList : React.FC<JobsListInt> = ({items ,saveJobs,setSaveJobs})=> {
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