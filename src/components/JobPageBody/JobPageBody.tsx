//@ts-ignore
import styles from './JobPageBody.module.css'
import React from 'react'
interface BodyInt{
    title: string
    description : string
    salary : string,
    createdAt: string
}

export const JobPageBody: React.FC<BodyInt> =({title ,description,salary , createdAt})=>{
    let date1 = new Date(createdAt);
    let date2 = new Date();
    let daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    let year = (daysLag - (daysLag % 365)) / 365
    let days = daysLag % 365 % 31
    let indexRespons = description.indexOf('Responsopilities')
    let indexBenef = description.indexOf('Compensation & Benefits:')
    let descriptionText = description.slice(0 , indexRespons)
    let responsopilitiesText = description.slice(indexRespons+17 , indexBenef)
    let benefitsText = description.slice(indexBenef+24 , description.length)
    let benefitsList = benefitsText.replace(/\n\t?/ , '').replace(/\n\n?/ , '').split(".").map(i=>i.replace(/\./,"."))
    let filterList = benefitsList.filter(text=> text.length > 1)

    return(
            <div className={styles.body}>
                <div className={styles.apply}>
                    <button>APPLY NOW</button>
                </div>
                <div className={styles.title}><h2>{title}</h2></div>
                <div className={styles.salary}>
                    <p>Brutto, per year</p>
                    <h2>€{salary}</h2>
                    <p>Brutto, per year</p>
                </div>
                <div className={styles.posted}>
                    <span>
                        Posted {`${year} years  and ${days} days ago`}
                    </span>
                </div>
                <div className={styles.description}>
                    <h3 style={{marginTop: '7px'}}>
                        {descriptionText}
                    </h3>
                    <h2 style={{marginTop:'35px'}}>{description.slice(indexRespons, indexRespons+17)}</h2>
                    <h3>
                        {responsopilitiesText}
                    </h3>
                    <h2 style={{marginTop:'35px'}}>{description.slice(indexBenef, indexBenef+24)}</h2>
                    <h3>
                        {filterList.map(li => <li key={li}>{li}</li>)}
                    </h3>
                </div>
                <div className={styles.second_apply}>
                    <button>APPLY NOW</button>
                </div>
            </div>
        )
}