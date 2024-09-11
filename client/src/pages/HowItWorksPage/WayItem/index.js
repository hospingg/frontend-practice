import React, { useState } from 'react';
import styles from '../HowItWorksPage.module.sass'
import CONSTANTS from '../../../constants';

const Waylist = (props) => {
    return (
        <article className={styles.cardList}>
            {
                props.type === "WAYS" ? 
                props.data.map(way => <WayItem data={way}></WayItem>) :  props.data.map((step, i) => <StepItem data={step} number = {i+1} length = {props.data.length}></StepItem>)
            }
        </article>
        
    );
}


const WayItem = (props) => {
    const {title, iconScr, description, buttonTitle} = props.data
    return (
        <div className={styles.cardItem}>
            <div>
                <img className={styles.icon} src={iconScr} alt="Your SVG" />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <a className={styles.wayButton}>
                {buttonTitle}
                <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>Artboard-34</title><g id="Right-2" data-name="Right"><polygon points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999" /></g></svg>
            </a>
        </div>
    );
}

const StepItem = (props) => {
    return (
        <div className={styles.cardStepItem}>
            <div>
                <span className={styles.step}>Step {props.number}</span>
                <p>{props.data}</p>
            </div>
            {props.length !== props.number ? <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>Artboard-34</title><g id="Right-2" data-name="Right"><polygon points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999" /></g></svg>
             : null}
        </div>
    );
}


export default Waylist;
