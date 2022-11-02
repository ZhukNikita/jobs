//@ts-ignore
import style from './JobsList.module.css'
import {JobModel} from "../../models/JobModel";
import {JobItem} from "../JobItem/JobItem";
import React, {Dispatch, SetStateAction} from "react";
import {SavedJobs} from "../../models/SavedJobs";
import {MainPageSkeleton} from "../MainPageSkeleton/MainPageSkeleton";

interface JobsListInt {
    items: JobModel[]
    saveJobs: SavedJobs[],
    setSaveJobs: Dispatch<SetStateAction<SavedJobs[]>>
    loading: boolean
}

export const JobsList: React.FC<JobsListInt> = ({items, saveJobs, setSaveJobs, loading}) => {

    if (loading) {
        return (
            <div className={style.list}>
                {
                    [...Array(20)].map(() => <div className={style.skeleton}><MainPageSkeleton key={Math.random()}/>
                    </div>)
                }
            </div>

        )
    }

    function isRatingJob(job: JobModel) {
        if (job.id === items[0].id) return true
        if (job.id === items[2].id) return true
    }

    return (
        <div className={style.list}>
            {
                items.map(job =>
                    <JobItem saveJobs={saveJobs} setSaveJobs={setSaveJobs} rating={isRatingJob(job)} item={job}
                             key={job.id}/>
                )
            }
        </div>
    )
}