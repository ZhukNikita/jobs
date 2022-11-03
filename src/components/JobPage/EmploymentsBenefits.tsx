//@ts-ignore
import styles from './JobPage.module.css'
import React from "react";
interface EmploymentsBenefitsInt{
    employments: []
    benefits: []
}
export const EmploymentsBenefits:React.FC<EmploymentsBenefitsInt> =({employments , benefits})=>{
    return(
        <div>
            <h2 className={styles.employments}>Employment type</h2>
            <div className={styles.employmentsFlex}>
                {
                    employments.map(e =>
                        <div key={e} className={styles.employmentItem}>
                            {e}
                        </div>

                    )
                }
            </div>
            <h2 className={styles.benefits}>Benefits</h2>
            <div className={styles.employmentsFlex}>
                {
                    benefits.map(e =>
                        <div key={e} className={styles.benefitsItem}>
                            {e}
                        </div>

                    )
                }
            </div>
        </div>
    )
}