import {useEffect, useState} from 'react'

export const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        fetch(url)
        .then((data)=>data.json())
        .then((res)=>{
            setIsLoading(false);
            setData(res);
        })
        .catch((err)=>{
            setError(true);
            console.log(err);
        });
    },[url])
    return ({data, isLoading, error});
};


