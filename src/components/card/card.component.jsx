import React from 'react';
import './card.styles.css'
export const Card = (props) => (
    <div className='card-container'>
        <img alt="img broken" src={`https://robohash.org/${props.amonster.id}?set=set2`} style={{width:180, height:180}}/>
        <h2>{props.amonster.name}</h2>
        <p>{props.amonster.email}</p>
    </div>
);