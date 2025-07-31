import React, { useState } from 'react';
import AwesomeButton from './UI/button/AwesomeButton';

const Items = ({item, number,remove}) => {
    let [amount, setAmount] = useState(item.amount)
    return (
        <div className='myitem'>
            <h1>{number}. {item.title}</h1>
            <div>
                <span>amount: {amount}</span>
                <AwesomeButton onClick={() => setAmount(amount+1)}>+1</AwesomeButton>
                <AwesomeButton onClick={() => setAmount(amount-1)}>-1</AwesomeButton>
                <AwesomeButton onClick={()=>remove(item)}>del</AwesomeButton>
            </div>
        </div>
    );
}

export default Items;
