import React from 'react';
import classes from './Logo.css';
import image from '../../assets/images/burger-logo.png'

const logo = (props) => {
    return(
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={image} alt="My Burger"></img>
        </div>
    )
}

export default logo;