//@ts-ignore
import styles from "./Skeleton.module.css";
import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";

export const MainPageSkeleton = () => {
    return (
        <div className={styles.skeleton}>
            <Stack spacing={1}>
                <div className={styles.skeletonContent}>
                    <div className={styles.skeletonUser}>
                        <Skeleton
                            variant="circular"
                            style={{ marginRight: 10 }}
                        />
                    </div>
                    <div className={styles.skeletonInfo}>
                        <Skeleton variant="text" />
                        <div className={styles.skeletonTags}>
                            <Skeleton variant="text"width={200} height={15} />
                            <br/>
                            <Skeleton variant="text" width={120} height={20} />
                        </div>
                    </div>
                    <div className={styles.rating} style={{marginLeft: '30px'}}>
                        <Rating icon={
                            <svg  width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.69871 4.58966C7.42979 2.93116 8.82013 0.000488281 9.51634 0.000488281C10.5274 -0.000511719 12.7421 5.68649 12.7421 5.68649C12.7421 5.68649 14.7923 5.86549 16.4493 6.04849C17.3289 6.14549 18.8997 6.29349 18.998 6.77849C19.019 6.88349 18.8927 7.31249 18.663 7.61149C17.69 8.88149 15.1654 11.6025 15.1654 11.6025C15.1654 11.6025 15.3038 12.9025 15.4272 14.3245C15.5064 15.2445 15.7201 17.1085 15.6428 17.4415C15.5586 17.8085 15.4071 17.9085 15.2497 17.9665C14.8384 18.1165 13.8835 17.5335 12.7682 16.9995C11.2486 16.2705 9.54141 15.4915 9.54141 15.4915C9.54141 15.4915 8.41501 16.0805 7.07998 16.6555C5.65367 17.2695 4.20931 18.2815 3.60649 17.9255C3.23035 17.7025 3.50919 15.9645 3.65363 14.4175C3.78904 12.9585 3.90639 11.6255 3.90639 11.6255C3.90639 11.6255 3.06987 10.6435 2.09592 9.59349C1.04375 8.45849 -0.239128 7.23349 0.0387113 6.78349C0.248344 6.44349 1.20523 6.26149 2.81209 6.06249C4.51924 5.85049 6.22439 5.70049 6.22439 5.70049C6.22439 5.70049 6.41022 5.24412 6.69871 4.58966Z" fill="#d3d3d3"/>
                            </svg>} name="half-rating-read" defaultValue={5} readOnly />
                    </div>

                </div>
            </Stack>
        </div>
    );
};
