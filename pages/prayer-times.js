import useSWR from 'swr'
import {useRouter} from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function PrayerTimes(){
    const { asPath } = useRouter();
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';

    let slug = asPath.split('=');
    slug = slug[slug.length - 1];

    const { data, error } = useSWR('https://secure-api.net/api/v1/company/prayer/daily/schedule?slug='+slug, fetcher, { refreshInterval: 21600000 })
    if(error) return <p className='text-center'> Failed to load!</p>
    if(!data) return <p className='text-center'>loading...</p>

    return (
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

                    {data.prayers.map((data, index)=>(
                        <tr key={index}>
                        <td>{data.prayerName}</td>
                        <td>{data.adhan}</td>
                        <td>{data.prayer}</td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}