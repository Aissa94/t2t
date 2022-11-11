import React from 'react'

import styles from '../../sass/servicecard.module.scss';

const ServiceCard = ({ logoContent, contents }) => {
    return (
        <div className={styles.CardService}>

            <div className={styles.logo}>
                <div className={styles.logodiv}>
                    {logoContent}
                </div>


            </div>
            <div className={styles.content}>
                {contents}
            </div>


        </div>
    )
}

export default ServiceCard
