import React from 'react';
import classes from './MySelect.module.css'
const MySelect = ({ options, defaultValue,onChange}) => {
    return (
        <div className={classes.MySlct}>
            <select value={defaultValue} onChange={e => onChange(e.target.value)}>
                <option disabled>{defaultValue}</option>
                {
                    options.map((option) =>
                        <option key={option.value} value={option.value}>{option.name}</option>
                    )
                }
            </select>
        </div>
    );
}

export default MySelect;
