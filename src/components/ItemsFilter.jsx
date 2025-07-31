import React from 'react';
import AwesomeInput from './UI/input/AwesomeInput';
import MySelect from './UI/select/MySelect';
const ItemsFilter = ({ filter, setFilter }) => {
    return (
        <div className="sortirovka">
            <span>Поиск:</span>
            <AwesomeInput 
                onChange={e => setFilter({...filter, query: e.target.value})} 
                value={filter.query} placeholder='find smth..'
            ></AwesomeInput>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={"Сортировать по:"}
                options={[{ value: 'id', name: 'default' },{ value: 'title', name: 'Названию' }, { value: 'amount', name: 'Количеству' }]}
            />
        </div >
    );
}

export default ItemsFilter;
