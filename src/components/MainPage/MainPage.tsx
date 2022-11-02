//@ts-ignore
import styles from "./MainPage.module.css"
import {JobsList} from "../JobsList/JobsList";
import {JobModel} from "../../models/JobModel";
import React, {Dispatch, SetStateAction, useState} from "react";
import {SavedJobs} from "../../models/SavedJobs";
import {PaginationComponent} from "../Pagination/PaginationComponent";

interface MainPageInt {
    items: JobModel[]
    saveJobs : SavedJobs[],
    setSaveJobs : Dispatch<SetStateAction<SavedJobs[]>>
    loading: boolean
}

export const MainPage : React.FC<MainPageInt> = ({items , saveJobs, setSaveJobs , loading})=>{
    const [currentPage , setCurrentPage] = useState(1)
    const [jobsPerPage ] = useState(15)
    const indexOfLastJob = currentPage*jobsPerPage
    const indexOfFirstJob = indexOfLastJob - jobsPerPage
    let currentJob = items.slice(indexOfFirstJob , indexOfLastJob)
    const pageNumbers = []
    for(let i = 0 ;  i <= items.length/ jobsPerPage ; i++){
        pageNumbers.push(i)
    }
    if(items.length % jobsPerPage === 0) pageNumbers.pop()

    return(
        <div className={styles.content}>
            <div style={{marginBottom: '50px' , width:'100%'}}>
                <JobsList loading={loading} items = {currentJob} saveJobs={saveJobs} setSaveJobs={setSaveJobs}/>
            </div>
            <div>
                <PaginationComponent pageNumbers={pageNumbers} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    )
}