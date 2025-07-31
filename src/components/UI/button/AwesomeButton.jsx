import React from 'react';
import classes from './AwesomeButton.module.css'
const AwesomeButton = ({ className, ...props }) => { //{children,...props}
    return (
        <button {...props}  className={`${classes.MyBtn} ${className || ''}`}>
            {props.children}
        </button>
    );
}

export default AwesomeButton;