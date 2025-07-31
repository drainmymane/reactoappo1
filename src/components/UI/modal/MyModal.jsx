import React from 'react';
import classes from './MyModal.module.css'
const MyModal = ({children,visible,setVisibility}) => {

    let rootClass = [classes.MyModal];

    if (visible){
        rootClass.push(classes.active)
    }

    return (
        <div className={rootClass.join(' ')} onClick={()=>setVisibility(false)}>
            <div className={classes.modalContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;
