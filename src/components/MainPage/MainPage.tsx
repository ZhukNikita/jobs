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
    const [feedbacksPerPage ] = useState(15)
    const indexOfLastFeedback = currentPage*feedbacksPerPage
    const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage
    let currentFeedback = items.slice(indexOfFirstFeedback , indexOfLastFeedback)
    const pageNumbers = []
    for(let i = 0 ;  i <= items.length/ feedbacksPerPage ; i++){
        pageNumbers.push(i)
    }
    if(items.length % feedbacksPerPage === 0)    pageNumbers.pop()

    return(
        <div className={styles.content}>
            <div style={{marginBottom: '50px' , width:'100%'}}>
                <JobsList loading={loading} items = {currentFeedback} saveJobs={saveJobs} setSaveJobs={setSaveJobs}/>
            </div>
            <div>
                <PaginationComponent pageNumbers={pageNumbers} setCurrentPage={setCurrentPage} items={items}/>
            </div>
        </div>
    )
}