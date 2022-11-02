import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {JobModel} from "../../models/JobModel";
//@ts-ignore
import styles from './JobPage.module.css'
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ShareIcon from '@mui/icons-material/Share';
import {useParams} from "react-router";
import {JobPageBody} from "../JobPageBody/JobPageBody";
import {SavedJobs} from "../../models/SavedJobs";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import {EmploymentsBenefits} from "./EmploymentsBenefits";
import {JobMap} from "./JobMap";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link} from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {DetailPageSkeleton} from "../DetailPageSkeleton/DetailPageSkeleton";
interface JobPageInt {
    items: JobModel[]
    saveJobs: SavedJobs[],
    setSaveJobs: Dispatch<SetStateAction<SavedJobs[]>>,
    loading: boolean
}

export const JobPage: React.FC<JobPageInt> = ({items, saveJobs, setSaveJobs}) => {
    const [isSaved, setSaved] = useState<boolean>(false)
    const {id} = useParams()
    let item: Array<JobModel>
    let job: JobModel
    let location
    useEffect(() => {
        window.localStorage.setItem('save', JSON.stringify(saveJobs))
    }, [isSaved])
    if (!items) return <div>Loading...</div>
    else {
        item = items?.filter(el => el.id === id)
        job = item[0]
        if (!job) {
            return <DetailPageSkeleton/>
        } else location = `${job?.location.lat} , ${job.location?.long}` // Можно поставить нормальные координаты что бы карта работала на все 100%

    }

    function SaveJob() {
        setSaved(!isSaved)
        const newSave = [{id: job.id}, ...saveJobs]
        setSaveJobs(newSave)
        if (saveJobs.some(o => o.id === job.id)) setSaveJobs(saveJobs.filter(el => el.id !== job.id))
    }
    return (
        <div className={styles.body}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>Job Detail</h2>
                    <hr/>
                    <div>
                        <span>
                            <div className={styles.mobileIcon} onClick={SaveJob}>
                                {saveJobs.some(el => el.id === job.id) ? <StarIcon/> : <StarBorderIcon/>}
                            </div>
                            <div className={styles.icon} onClick={SaveJob}>
                                {saveJobs.some(el => el.id === job.id) ? <TurnedInIcon/> : <TurnedInNotIcon/>}
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
                <div className={styles.picturesMobileTitle}>
                    <h1>Attached images</h1>
                    <hr/>
                    <div className={styles.picturesMobile}>
                        {
                            job.pictures.map(pic =>
                                <img key={Math.random()} src={`${pic}`} alt="picture"/>)
                        }
                    </div>
                </div>
                <h1>Additional info</h1>
                <EmploymentsBenefits benefits={job.benefits} employmets={job.employment_type}/>
                <h1 className={styles.picturesTitle}>Attached images</h1>
                <hr/>
                <div className={styles.pictures}>
                    {
                        job.pictures.map(pic =>
                            <img key={Math.random()} src={`${pic}`} alt="picture"/>)
                    }
                </div>
                <button className={styles.returnToHome}><Link to='/'><ArrowBackIosIcon/>RETURN TO JOB BOARD</Link></button>
            </div>
            <div className={styles.mobileContacts}>
                <h1>Contacts</h1>
                <hr/>
            </div>

            <JobMap title={job.title} phone={job.phone} email={job.email} address={job.address} location = {location}/>
        </div>
    )
}
