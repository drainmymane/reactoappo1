import React from 'react';
import { useState } from 'react';
import AwesomeButton from './UI/button/AwesomeButton';
import AwesomeInput from './UI/input/AwesomeInput';
const ItemsForm = ({create}) => {
    let [item, setItem] = useState({ title: '', amount: 0})

    const addNewItem = (e) =>{
        e.preventDefault();
        const newItem = {
        ...item, id: Date.now(),
        }
        create(newItem);
        
        setItem({ title: '', amount: 0})
    }

    return (
        <form className="ItemsForm">
            <h1>{item.title} amount: {item.amount}</h1>
            <AwesomeInput type="text" value={item.title} maxLength={10} placeholder="Name Item" onChange={e => setItem({...item, title: e.target.value })}/>
            <div>
                <AwesomeButton onClick={(e) => setItem({ ...item, amount: item.amount - 1 },e.preventDefault())}>-1</AwesomeButton>
                <AwesomeButton onClick={addNewItem}>submit</AwesomeButton>
                <AwesomeButton onClick={(e) => setItem({ ...item, amount: item.amount + 1 },e.preventDefault())}>+1</AwesomeButton>
            </div>
        </form>
    );
}

export default ItemsForm;
