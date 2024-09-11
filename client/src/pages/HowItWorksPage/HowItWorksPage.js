import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CONSTANTS from '../../constants';
import styles from './HowItWorksPage.module.sass'
import { connect } from 'react-redux';
import {useState} from 'react';
import Cardlist from './WayItem';

const HowItWorksPage = (props) => {
    const stepItemList = [
        'Fill out your Naming Brief and begin receiving name ideas in minutes',
        'Rate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback.',
        'Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.',
        'Pick a Winner. The winner gets paid for their submission.'
    ]
    const waysDataList = [
        {
            title: 'Launch a Contest',
            iconScr: `${CONSTANTS.WAYS_ICONS_PATH}way1.svg`,
            description: 'Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.',
            buttonTitle: 'Launch a Contest',
        },
        {
            title: 'Explore Names For Sale',
            iconScr: `${CONSTANTS.WAYS_ICONS_PATH}way2.svg`,
            description: 'Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design.',
            buttonTitle: 'Explore Names For Sale',
        },
        {
            title: 'Agency-level Managed Contests',
            iconScr:`${CONSTANTS.WAYS_ICONS_PATH}way3.svg`,
            description: 'Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs.',
            buttonTitle: 'Learn More',
        }
    ]

    return (
        <>
        <Header/>
        <div className={styles.mainContainer}>
            <section className={styles.slide__HowItWork}>
                <div className={styles.content__HowItWork}>
                    <div className={styles.textContainer}>
                        <h4 className={styles['hb-caption']}>World's #1 Naming Platform</h4>
                    <h1>How Does Atom Work?</h1>
                    <p>Atom helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.</p>
                    </div>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}video-img.png`} alt="video" />
                </div>
            </section>
            <section className={styles.slide__OurServices}>
                <div className={styles.content__OurServices}>
                    <h4 className={styles['hb-caption']}>Our services</h4>
                    <h2>3 Ways To Use Atom</h2>
                    <p>Atom offers 3 ways to get you a perfect name for your business.</p>
                    <Cardlist data = {waysDataList} type='WAYS'></Cardlist>
                </div>
            </section>
            <section className={styles.slide__OurServices}>
            <div className={styles.content__OurServices}>
                <img className={styles.trophey} src={`${CONSTANTS.WAYS_ICONS_PATH}trophey.svg`}/>
                <h2 className={styles.steps}>How Do Naming Contests Work?</h2>
                <Cardlist data = {stepItemList} type='STEPS'></Cardlist>
            </div>
                
            </section>
        </div>
        
        <Footer/>
        </>
    );
}


  export default HowItWorksPage;
