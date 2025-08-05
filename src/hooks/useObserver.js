import {useState} from 'react';
import {useRef, useEffect} from 'react'

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();
    useEffect(()=>{
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const cb = (entries) => {
        if (entries[0].isIntersecting && canLoad) {
            callback()
        }
    } 
    
    observer.current = new IntersectionObserver(cb, {
        root: null, // относительно viewport
        rootMargin: '0px',
        threshold: 0.1 // срабатывает когда 10% элемента видно
    });
    observer.current.observe(ref.current);
    },[isLoading, canLoad, callback,ref])
}
