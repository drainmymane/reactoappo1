import React from "react";

function compare(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

export const useSortedItems = (items, sort)=>{
    const sortedItems = React.useMemo(() =>{
        if(sort){
          return (([...items].sort((a, b) => compare(a[sort],b[sort]))));
        }
        return items;
    },[sort, items])

    return sortedItems;
}

export const useItems = (items, sort, query) =>{
    const sortedItems = useSortedItems(items,sort)

    const sortedAndSearchedItems = React.useMemo(() =>{
        return sortedItems.filter(i => i.title.toLowerCase().includes(query.toLowerCase()));
    },[query,sortedItems])

    return sortedAndSearchedItems;
}
    