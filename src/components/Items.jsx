import React, { useState } from 'react';
import AwesomeButton from './UI/button/AwesomeButton';
import {useNavigate} from 'react-router'

const Items = ({item, number,remove}) => {
    let [amount, setAmount] = useState(item.amount);
    const router = useNavigate();
    return (
        <div className='myitem'>
            <h1>{number}. {item.title}</h1>
            <div className='item_buttons'>
                <span>amount: {amount}</span>
                <AwesomeButton onClick={() => router(`/items/${1 + +item.id}`)}>Open</AwesomeButton>
                <AwesomeButton onClick={() => setAmount(amount+1)}>+1</AwesomeButton>
                <AwesomeButton onClick={() => setAmount(amount-1)}>-1</AwesomeButton>
                <AwesomeButton onClick={()=>remove(item)}>del</AwesomeButton>
            </div>
        </div>
    );
}

export default Items;
