import useSWR from 'swr'
import styleUtility from "../styles/Utility.module.css";
import Image from 'next/image'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function FetchDataSWR(){
    const { data, error } = useSWR('https://637de0ebcfdbfd9a639f90a6.mockapi.io/app/prayer-times/1', fetcher, { refreshInterval: 0 })
    if(error) return <p> Failed to load... </p>
    if(!data) return <p className={styleUtility.textDanger}>loading</p>

    let prayerTimesKeys = Object.keys(data.prayerTimes)
    let prayerTimesValues = Object.values(data.prayerTimes)

    return (
        <div className={styleUtility.py2}>
            <div className={styleUtility.px5}>
                <h2 className={styleUtility.textSuccess}>Data</h2>
            </div>

            <p className={styleUtility.px5}> Array length: {Object.keys(data.prayerTimes).length} </p>

            { prayerTimesKeys.map( (data, index) => (
                <div key={index}>
                    <p className={styleUtility.px5}>{data} - {prayerTimesValues[index].adhan} - {prayerTimesValues[index].prayer}</p>
                </div>
            )) }
            {/*{data.map((data, index) => (*/}
            {/*    <div key={index}>*/}
            {/*        <p className={styleUtility.px5}> {Object.keys(data)} - {data[Object.keys(data)]} </p>*/}
            {/*        /!*<Image src={data.url} alt={data.title} width={500} height={300} />*!/*/}
            {/*        <hr />*/}
            {/*    </div>*/}
            {/*))}*/}

        </div>
    )
}