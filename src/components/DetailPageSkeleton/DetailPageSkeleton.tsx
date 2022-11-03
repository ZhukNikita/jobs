//@ts-ignore
import styles from "./DetailPageSkeleton.module.css";
import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

export const DetailPageSkeleton = () => {
    return (
        <div className={styles.skeleton}>
            <Stack spacing={1}>
                <div>
                    <div className={styles.skeletonHeader}>
                        <div className={styles.skeletonText}>
                            <Skeleton
                                variant="text"
                                width={146}
                                height={34}
                            />
                        </div>
                        <div className={styles.skeletonSave}>
                            <div className={styles.skeletonSaveList}>
                                <Skeleton
                                    variant="text"

                                />
                            </div>
                            <div className={styles.skeletonShare}>
                                <Skeleton
                                    variant="text"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.skeletonApply}>
                        <Skeleton
                            variant="text"
                        />
                    </div>
                    <div className={styles.skeletonTitle}>
                        <div className={styles.skeletonName}>
                            <Skeleton variant="text" />
                        </div>
                        <div className={styles.skeletonSalary}>
                            <Skeleton variant="text" />
                        </div>
                    </div>
                    <Skeleton variant="text"width={200} height={15} />
                    <Skeleton variant="text" height={120} />

                    <Skeleton variant="text" width={200}  height={60} />

                    <Skeleton variant="text" height={120} />
                    <Skeleton variant="text" height={120} />
                    <Skeleton variant="text" width={200}  height={60} />
                    <div className={styles.skeletonBenefits}>
                        <div><Skeleton variant="text"width={10} height={10} /><Skeleton variant="text"width={200} height={15} /></div>
                        <div><Skeleton variant="text"width={10} height={10} /><Skeleton variant="text"width={200} height={15} /></div>
                        <div><Skeleton variant="text"width={10} height={10} /><Skeleton variant="text"width={200} height={15} /></div>
                    </div>

                </div>
            </Stack>
        </div>
    );
};
