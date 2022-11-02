//@ts-ignore
import styles from './Pagination.module.css'
import {JobModel} from "../../models/JobModel";
import React, {Dispatch, SetStateAction} from "react";
import Pagination from '@mui/material/Pagination';
interface PaginationInt {
    items: JobModel[]
    pageNumbers : number[]
    setCurrentPage:  Dispatch<SetStateAction<number>>
}
export const PaginationComponent: React.FC<PaginationInt> =({items, pageNumbers , setCurrentPage})=>{
    return(
        <div className={styles.pagination}>
            <Pagination
                count={pageNumbers.length}
                shape="rounded"
                color={"primary"}
                classes={{ root: styles.bar }}
                onChange={(event , page)=> setCurrentPage(page)}
            />
        </div>
    )
}