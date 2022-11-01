import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {JobModel} from "../../models/JobModel";
import styles from './JobPage.module.css'
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {useParams} from "react-router";
import {JobPageBody} from "../JobPageBody/JobPageBody";
import {SavedJobs} from "../../models/SavedJobs";
import TurnedInIcon from "@mui/icons-material/TurnedIn";


interface JobPageInt{
    items: JobModel[]
    saveJobs : [],
    setSaveJobs : Dispatch<SetStateAction<SavedJobs[]>>
}

export const JobPage: React.FC<JobPageInt>=({items, saveJobs , setSaveJobs})=>{
    const [isSaved , setSaved] = useState<boolean>(false)
    const {id} = useParams()
    let item: JobModel[]
    let job : JobModel
    let location
    useEffect(()=>{
        window.localStorage.setItem('save' , JSON.stringify(saveJobs))
    },[isSaved])
    if(!items) return <div>Loading...</div>
    else {
        item = items?.filter(el => el.id === id) || undefined
        job = item[0]
        if(!job){
            return <div>Loading...</div>
        }else location = `${job?.location.lat} , ${job.location?.long}` // Можно поставить нормальные координаты что бы карта работала на все 100%

    }
    function SaveJob() {
        setSaved(!isSaved)
        const newSave = [ {id: job.id} , ...saveJobs ]
        setSaveJobs(newSave)
        if(saveJobs.some(o => o.id === job.id))setSaveJobs(saveJobs.filter(el => el.id !== job.id))
    }

    return(
        <div className={styles.body}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>Job Detail</h2>
                    <div>
                        <span>
                            <div onClick={SaveJob}>
                                {saveJobs.some(el => el.id === job.id)? <TurnedInIcon/> :<TurnedInNotIcon/>}
                            </div>
                            Save to my list</span>
                        <span><ShareIcon/>Share</span>
                    </div>
                </div>
                <hr/>
                <JobPageBody
                    title={job.title}
                    description={job.description}
                    salary={job.salary}
                    createdAt={job.createdAt}
                />
                <h1>Additional info</h1>
                <h2 className={styles.employments}>Employment type</h2>
                <div className={styles.employmentsFlex}>
                    {
                        job.employment_type.map(e =>
                            <div key={e} className={styles.employmentItem}>
                                {e}
                            </div>

                        )
                    }
                </div>
                <h2 className={styles.benefits}>Benefits</h2>
                <div className={styles.employmentsFlex}>
                    {
                        job.benefits.map(e =>
                            <div key={e} className={styles.benefitsItem}>
                                {e}
                            </div>

                        )
                    }
                </div>
            </div>
            <div className={styles.map}>
                <div className={styles.locationInfo}>
                    <div className={styles.circle}>
                    </div>
                    <div className={styles.locationText}>
                        {job.title.length > 20 ? <h2>{job.title.slice(0, 30)}...</h2>: job.title }
                        <div className={styles.location}>
                            <LocationOnIcon style={{color:'#D8D8D8'}}/><h4>{job.address}</h4>
                        </div>
                        <p>{job.phone}</p>
                        <span>{job.email}</span>
                    </div>

                </div>
                <img width='400px' height='200px' src={`https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAW6QAsn30uiU-JF6PPm1QugAgFuU-K0cI&markers=color:white%7C${location}&center=${location}&zoom=11&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x1d2c4d&style=element:labels.text.fill%7Ccolor:0x8ec3b9&style=element:labels.text.stroke%7Ccolor:0x1a3646&style=feature:administrative%7Celement:labels.text%7Ccolor:0x969daf&style=feature:administrative%7Celement:labels.text.fill%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x4b6878%7Cvisibility:off&style=feature:landscape.man_made%7Ccolor:0x323a52&style=feature:landscape.man_made%7Celement:geometry.fill%7Ccolor:0x323a52&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0x023e58&style=feature:landscape.natural%7Celement:geometry.fill%7Ccolor:0x323a52&style=feature:landscape.natural.landcover%7Celement:labels.text%7Ccolor:0xb21f1f&style=feature:poi%7Celement:geometry%7Ccolor:0x3b445c&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x6f9ba5&style=feature:poi%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x3b445c&style=feature:poi.park%7Celement:labels.text.fill%7Cvisibility:off&style=feature:poi.sports_complex%7Cvisibility:off&style=feature:road%7Celement:geometry%7Ccolor:0x304a7d&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675&style=feature:road.highway%7Celement:geometry.fill%7Ccolor:0x20283e&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x20283e&style=feature:road.highway%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:transit%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:transit.line%7Celement:geometry.fill%7Cvisibility:off&style=feature:transit.station%7Celement:geometry%7Ccolor:0x3a4762%7Cvisibility:off&style=feature:transit.station%7Celement:geometry.stroke%7Cvisibility:off&style=feature:transit.station%7Celement:labels%7Cvisibility:off&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626&style=feature:water%7Celement:geometry.fill%7Ccolor:0x343e52&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x4e6d70&size=400x200`} alt=""/>
            </div>
        </div>
    )
}
