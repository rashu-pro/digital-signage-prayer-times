import useSWR from 'swr'
import { useRouter } from "next/router";
import Script from "next/script";
import JummuahTimes from "./jummuah-times";
import Image from "next/image";

const alternateTdColor = 'rgba(255, 255, 255, 0.4)';

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function PrayerTimes(props) {
    const { asPath } = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    let slug = asPath.split('=');
    slug = slug[slug.length - 1];
    let refreshInterval = 120 * 3600 * 1000;

    let endpoint = '/company/prayer/daily/schedule';
    let queryParameter = '?slug=' + slug;

    const { data, error } = useSWR(props.dataBaseUrl + endpoint + queryParameter, fetcher, { refreshInterval: refreshInterval })
    if (error) return <p className='text-center'> Failed to load!</p>
    if (!data) return <p className='text-center'>loading...</p>
    if (!data.prayers) return

    return (
        <div className="ds-body">
            <style jsx>{
                `
                .ds-body .table-striped > tbody > tr:nth-of-type(odd) > * {
                    background: ${alternateTdColor};
                }
        `
            }</style>
            <Script id="current-date" strategy="lazyOnload">
                {
                    `
                    let options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
let today  = new Date();
document.getElementById('show-date').innerText = today.toLocaleDateString("en-US", options);
                    `
                }
            </Script>
            <div className="">
                <div className="table-head text-yellow d-flex justify-content-center align-items-center text-center"
                    id="show-date">

                    Today&apos;s Prayer Times
                </div>
                <table className="table table-borderless table-prayer-times table-striped m-0 border-0">
                    <thead>
                        <tr>
                            <th>Salah</th>
                            <th>Azaan</th>
                            <th>Iqama</th>
                        </tr>
                    </thead>

                    <tbody>

                        {data.prayers.map((data, index) => (
                            <tr key={index} className="table-prayer-times-row">
                                <td>
                                    <div className='d-flex align-center justify-content-between'>
                                        {data.prayerName}
                                        {data.icon ? (
                                            <div className='prayer-icon'>
                                                <Image src={data.icon}
                                                    alt={data.prayerName}
                                                    fill />
                                            </div>
                                        ) : (
                                            <></>
                                        )}

                                    </div>


                                </td>
                                <td>{data.adhan}</td>
                                <td>{data.prayer}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            <JummuahTimes dataBaseUrl={props.dataBaseUrl} alternateColor={alternateTdColor} />
        </div>
    )
}