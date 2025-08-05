import React from 'react';
import classes from './MySelect.module.css'
const MySelect = ({ options, defaultValue,onChange, ...props}) => {
    return (
        <div className={classes.MySlct}>
            <select value={defaultValue} onChange={e => {
                onChange(e.target.value);
                if(props.resetPage) props.resetPage(1); //обновление на первую страницу при смене лимита
            }}>
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
