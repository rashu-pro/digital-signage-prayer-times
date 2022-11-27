import useSWR from 'swr'
import styleUtility from "../styles/Utility.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function PrayerTimes(){
    const { data, error } = useSWR('https://637de0ebcfdbfd9a639f90a6.mockapi.io/app/prayer-times/1', fetcher, { refreshInterval: 21600000 })
    if(error) return <p> Failed to load... </p>
    if(!data) return <p className='text-center'>loading...</p>

    let prayerTimesKeys = Object.keys(data.prayerTimes)
    let prayerTimesValues = Object.values(data.prayerTimes)
    let jummuahTimesKeys = Object.keys(data.jummuahTimes)
    let jummuahTimesValues = Object.values(data.jummuahTimes)

    return (
        <div className='ds-body-wrapper'>
            {/*ds body*/}
            <div className="ds-body bg-dark">
                <div className="">
                    <div className="table-head d-flex justify-content-center align-items-center text-center py-1 bg-white text-dark fw-bold fs-1">Today&apos;s Prayer Times</div>
                    <table
                        className="table table-borderless table-prayer-times table-border-custom table-striped m-0 border-0">
                        <thead>
                        <tr>
                            <th>Salah</th>
                            <th>Adhan</th>
                            <th>Iqama</th>
                        </tr>
                        </thead>

                        <tbody>
                        { prayerTimesKeys.map( (data, index) => (
                            <tr key={index}>
                                <td>{data}</td>
                                <td>{prayerTimesValues[index].adhan}</td>
                                <td>{prayerTimesValues[index].prayer}</td>
                            </tr>
                        )) }
                        </tbody>

                    </table>
                </div>

            </div>

            {/*announcement*/}
            <div className="text-center py-4">
                <div className="ds-info ds-announcement bg-white text-dark">
                    <div className="ds-info-head py-1 px-3">
                        <p className="text-dark text-center text-uppercase fs-3 fw-bold m-0">The Prayer For Eid Al Adha</p>
                    </div>
                    <hr className="m-0" />
                        <div className="ds-info-body fs-3 py-4">
                            <p className="m-0 mb-2 px-3 fw-semibold text-center">28<sup>th</sup> June (<span className="fw-bold">7:30 AM)</span> </p>
                        </div>
                </div>
            </div>

            {/*ds foot*/}

            <div className="ds-foot ds-inner">
                <div className="bg-white mb-4 ds-foot-inner">
                    <div className="bg-white py-2 d-flex justify-content-center align-items-center text-center py-1 bg-white text-dark fw-bold fs-2">Jummuah Times</div>
                    <table
                        className="table table-striped table-borderless table-prayer-times m-0 border-0 text-center table-bordered">
                        <tbody>
                        <tr>
                            <th>Salah</th>
                            <th>Adhan</th>
                            <th>Iqama</th>
                        </tr>

                        { jummuahTimesKeys.map( (data, index) => (
                            <>
                            <tr key={index}>
                                <td>{data}</td>
                                <td>{jummuahTimesValues[index].adhan}</td>
                                <td>{jummuahTimesValues[index].prayer}</td>
                            </tr>

                            <tr key={index}>
                                <td colSpan="3" className=" bg-dark text-white">
                                    <p className="mb-2 lh-1 text-white fs-6">{jummuahTimesValues[index].date}</p>
                                    <p className="m-0 lh-1">Khateeb: {jummuahTimesValues[index].khateeb}</p>
                                </td>
                            </tr>
                            </>
                            ) )}
                        </tbody>
                        <tr>
                        </tr>
                    </table>
                </div>
            </div>

            {/*<div className="ds-foot ds-inner py-4">*/}
            {/*    <div className="jummah-holder">*/}
            {/*        <table className="table table-borderless m-0">*/}
            {/*            <tbody>*/}
            {/*            <tr>*/}
            {/*                <th></th>*/}
            {/*                <th>Adhan</th>*/}
            {/*                <th>Iqama</th>*/}
            {/*            </tr>*/}
            {/*            { jummuahTimesKeys.map( (data, index) => (*/}
            {/*                <tr key={index}>*/}
            {/*                    <td>{data}</td>*/}
            {/*                    <td>{jummuahTimesValues[index].adhan}</td>*/}
            {/*                    <td>{jummuahTimesValues[index].prayer}</td>*/}
            {/*                </tr>*/}
            {/*            ) )}*/}
            {/*            </tbody>*/}

            {/*        </table>*/}
            {/*        <p className="fs-2 mt-4 pt-1 border-top mb-0 fw-bolder text-green"><span className="">Khateeb: </span> {data.khateeb} </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}