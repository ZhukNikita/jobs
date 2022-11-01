//@ts-ignore
import styles from "./MainPage.module.css"
import {JobsList} from "../JobsList/JobsList";
import {JobModel} from "../../models/JobModel";
import React, {Dispatch, SetStateAction} from "react";
import {SavedJobs} from "../../models/SavedJobs";

interface MainPageInt {
    items: JobModel[]
    saveJobs : [],
    setSaveJobs : Dispatch<SetStateAction<SavedJobs[]>>
}

export const MainPage : React.FC<MainPageInt> = ({items , saveJobs, setSaveJobs})=>{
    return(
        <div className={styles.content}>
            <JobsList items = {items} saveJobs={saveJobs} setSaveJobs={setSaveJobs}/>
        </div>
    )
}