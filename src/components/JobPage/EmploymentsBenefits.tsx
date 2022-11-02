import React from "react";
import styles from './JobPage.module.css'
interface EmploymentsBenefitsInt{
    employmets: []
    benefits: []
}
export const EmploymentsBenefits:React.FC<EmploymentsBenefitsInt> =({employmets , benefits})=>{
    return(
        <div>
            <h2 className={styles.employments}>Employment type</h2>
            <div className={styles.employmentsFlex}>
                {
                    employmets.map(e =>
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