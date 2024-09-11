import React from 'react';

const PricingBox = (props) => {
    return (
        <article>
                <header style={{border: `3px solid ${props.color}`}}>
                    <h2 color={props.color}>{props.header}</h2>
                    <p>{props.tagline}</p>
                    <div>
                        <p color={props.color}>US${props.price}</p>
                    </div>
                </header>
                {props.children}
                <button style={{backgroundColor: props.color}}>Start</button>
        </article>
    );
}

export default PricingBox;
