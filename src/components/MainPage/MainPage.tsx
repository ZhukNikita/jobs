import styles from "./MainPage.module.css"
import {JobsList} from "../JobsList/JobsList";
import {JobModel} from "../../models/JobModel";
import React from "react";

interface MainPageInt {
    items: JobModel[]
}

export const MainPage : React.FC<MainPageInt> = ({items})=>{
    return(
        <div className={styles.content}>
            <JobsList items = {items}/>
        </div>
    )
}