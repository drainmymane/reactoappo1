import React from 'react';
import classes from './AwesomeButton.module.css'
const AwesomeButton = (props) => { //{children,...props}
    return (
        <button {...props} className={classes.MyBtn}>
            {props.children}
        </button>
    );
}

export default AwesomeButton;