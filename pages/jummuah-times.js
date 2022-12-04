import useSWR from 'swr'
import {useRouter} from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function JummuahTimes(){
    const { asPath } = useRouter();
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';

    let slug = asPath.split('=');
    slug = slug[slug.length - 1];

    const { data, error } = useSWR('https://secure-api.net/api/v1/company/prayer/daily/schedule?slug='+slug, fetcher, { refreshInterval: 21600000 })
    if(error) return <p className='text-center'> Failed to load... </p>
    if(!data) return <p className='text-center'>loading...</p>

    return (
        <div className="ds-foot ds-inner">
            <div className="bg-white ds-foot-inner">
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
                      <tr key={index}>
                          <td>{data.prayerName}</td>
                          <td>{data.adhan}</td>
                          <td>{data.prayer}</td>
                          <td>{data.khateeb}</td>
                      </tr>
                    ) )}
                    </tbody>
                    <tr>
                    </tr>
                </table>
            </div>
        </div>
    )
}