import React from 'react';
import classes from './AwesomeInput.module.css'
const AwesomeInput = (props) => {
    return (
        <input {...props} className={classes.MyInput}></input>
    );
}

export default AwesomeInput;
