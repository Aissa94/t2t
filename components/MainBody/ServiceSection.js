import React from 'react';
import styles from '../../sass/ServiceSection.module.scss';
import ServiceCard from './ServiceCard';
import {FaCarSide} from 'react-icons/fa';
import { RiHotelFill ,RiAncientGateFill} from "react-icons/ri";
import { TbBusinessplan } from "react-icons/tb";
import { GiAirplaneDeparture } from "react-icons/gi";

const ServiceSection = () => {
    return (
        <div className={styles.conatiner}>
            <div className={styles.borderService}>
                <p className={styles.text}>
                    Time2Travel, the travel arm sponsored by Innovation Factory, allows you to pay for all your travel needs with crypto.<br/>
                   Luxury travel is personified as you take on the world with next-gen tech.
                </p>
            </div>
            <h1 className={styles.title} >Our Services</h1>
            <div className={styles.CardGroup}>
            <ServiceCard logoContent={<GiAirplaneDeparture color="#ffffff" size={60}/> } contents={"FLIGHT"}/>
            <ServiceCard logoContent={<RiHotelFill color="#ffffff" size={60}/>} contents={"HOTELS"}/>
            <ServiceCard logoContent={<RiAncientGateFill color="#ffffff" size={60}/>} contents={"HOMESTAY"}/>
            <ServiceCard logoContent={<FaCarSide color="#ffffff" size={60}/>} contents={"CAR RENTAL"}/>
            <ServiceCard logoContent={<TbBusinessplan color="#ffffff" size={60}/>}contents={"BUSINESS"}/>
            </div>
           
        </div>

    )
}

export default ServiceSection
