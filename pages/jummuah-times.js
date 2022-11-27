import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function JummuahTimes(){
    const { data, error } = useSWR('https://secure-api.net/beta/api/v1/company/prayer/daily/schedule?slug=secure-api', fetcher, { refreshInterval: 21600000 })
    if(error) return <p> Failed to load... </p>
    if(!data) return <p className='text-center'>loading...</p>

    // let jummuahTimesKeys = Object.keys(data.jummuahTimes)
    // let jummuahTimesValues = Object.values(data.jummuahTimes)

    return (
        <div className="ds-foot ds-inner pb-5">
            <div className="bg-white mb-4 ds-foot-inner">
                <div className="bg-white py-2 d-flex justify-content-center align-items-center text-center py-1 bg-white text-dark fw-bold fs-2">Jummuah Times</div>
                <div className='text-center'>
                    <p className="jummah-date bg-success">{data.jummah[0].date}</p>
                </div>

                <table
                    className="table table-striped table-borderless table-prayer-times m-0 border-0 text-center table-bordered">
                    <tbody>
                    <tr>
                        <th>Salah</th>
                        <th>Adhan</th>
                        <th>Iqama</th>
                        <th>Khateeb</th>
                    </tr>

                    { data.jummah.map( (data, index) => (
                        <>
                            <tr key={index}>
                                <td>{data.prayerName}</td>
                                <td>{data.adhan}</td>
                                <td>{data.prayer}</td>
                                <td>{data.khateeb}</td>
                            </tr>

                            {/*<tr key={index}>*/}
                            {/*    <td colSpan="3" className="bg-dark text-white">*/}
                            {/*        <p className="m-0 lh-1">Khateeb: {data.khateeb}</p>*/}
                            {/*    </td>*/}
                            {/*</tr>*/}
                        </>
                    ) )}
                    </tbody>
                    <tr>
                    </tr>
                </table>
            </div>
        </div>
    )
}