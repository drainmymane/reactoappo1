import React, { useEffect, useState } from 'react';
import { useParams,Navigate } from 'react-router';
import { motion } from "framer-motion";
import RotatingSquare from '../components/rotatingSquare';
import { useFetch } from '../hooks/useFetch';
import ApiService from '../API/api';

function PostIdPage(){
    const params = useParams();
    if (!/^\d+$/.test(params.id)) {
        return <Navigate to="/error" replace />;
    }
    const[item,setItem]=useState(0);
    const [fetchItemById, isLoading, ItemsError] = useFetch(async (id) => {
        setItem(await ApiService.getItemById(id));
    })

    useEffect(()=>{
        fetchItemById(params.id);
    }, [])

    console.log(item);
    return (
        <div>
            {
                isLoading
                ? <RotatingSquare />
                : <div>
                    <h1> Item no. {item.id+1}.<br/> Title: {item.title}.</h1>
                    <h2> Amount: {item.amount}.</h2>
                </div>
            }
        </div>
    )
}

export default PostIdPage
