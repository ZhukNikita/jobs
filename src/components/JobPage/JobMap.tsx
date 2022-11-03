//@ts-ignore
import styles from './JobPage.module.css'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

interface JobMapInt{
    title: string,
    phone: string,
    email: string,
    address : string,
    location: string,
}
export const JobMap: React.FC<JobMapInt> = ({title , phone , email ,address , location}) =>{
    return(
        <div className={styles.map}>
            <div className={styles.locationInfo}>
                <div className={styles.circle}>
                </div>
                <div className={styles.locationText}>
                    {title.length > 20 ? <h2>{title.slice(0, 30)}...</h2> : title}
                    <div className={styles.location}>
                        <LocationOnIcon style={{color: '#D8D8D8'}}/><h4>{address}</h4>
                    </div>
                    <p>{phone}</p>
                    <span>{email}</span>
                </div>

            </div>
            <img width='400px' height='200px'
                 src={`https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAW6QAsn30uiU-JF6PPm1QugAgFuU-K0cI&markers=color:white%7C${location}&center=${location}&zoom=11&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x1d2c4d&style=element:labels.text.fill%7Ccolor:0x8ec3b9&style=element:labels.text.stroke%7Ccolor:0x1a3646&style=feature:administrative%7Celement:labels.text%7Ccolor:0x969daf&style=feature:administrative%7Celement:labels.text.fill%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x4b6878%7Cvisibility:off&style=feature:landscape.man_made%7Ccolor:0x323a52&style=feature:landscape.man_made%7Celement:geometry.fill%7Ccolor:0x323a52&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0x023e58&style=feature:landscape.natural%7Celement:geometry.fill%7Ccolor:0x323a52&style=feature:landscape.natural.landcover%7Celement:labels.text%7Ccolor:0xb21f1f&style=feature:poi%7Celement:geometry%7Ccolor:0x3b445c&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x6f9ba5&style=feature:poi%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x3b445c&style=feature:poi.park%7Celement:labels.text.fill%7Cvisibility:off&style=feature:poi.sports_complex%7Cvisibility:off&style=feature:road%7Celement:geometry%7Ccolor:0x304a7d&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675&style=feature:road.highway%7Celement:geometry.fill%7Ccolor:0x20283e&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x20283e&style=feature:road.highway%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:transit%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:transit.line%7Celement:geometry.fill%7Cvisibility:off&style=feature:transit.station%7Celement:geometry%7Ccolor:0x3a4762%7Cvisibility:off&style=feature:transit.station%7Celement:geometry.stroke%7Cvisibility:off&style=feature:transit.station%7Celement:labels%7Cvisibility:off&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626&style=feature:water%7Celement:geometry.fill%7Ccolor:0x343e52&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x4e6d70&size=400x200`}
                 alt=""/>
        </div>
    )
}