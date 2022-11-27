import Head from 'next/head'
import styleUtility from '../styles/Utility.module.css'
import { useState, useEffect } from "react"

export default function FetchData(){
    const [ data, setData ] = useState(null)
    const [ isLoading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    },[])

    if(isLoading) return <p>loading...</p>
    if(!data) return <p className={styleUtility.textDanger}>no data found</p>

    return (
        <div className={styleUtility.py2}>
            <div className={styleUtility.px5}>
                <h2 className={styleUtility.textSuccess}>Data</h2>
            </div>

            {data.map((data, index) => (
                <div key={index}>
                    <p className={styleUtility.px5}> {data.title} </p>
                    <hr />
                </div>
            ))}
        </div>
    )
}