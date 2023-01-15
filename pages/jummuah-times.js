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
            <div className="ds-foot-inner">
                <div className="bg-white bg-white-off">
                    <div className="py-2 d-flex justify-content-center text-uppercase align-items-center text-center py-1 fw-bold fs-2">Jummuah Times</div>
                    <div className='text-center'>
                        <p className="jummah-date bg-success">{data.jummah[0].date}</p>
                    </div>
                </div>


                <table className="table table-borderless table-prayer-times table-2tr table-border-custom table-striped m-0 border-0">
                    <tbody>

                    { data.jummah.map( (data, index) => (
                      <>
                          <tr key={index} className={"row-"+index}>
                              <td>
                                  <div className="d-flex justify-content-between">
                                      <span>{data.prayerName}</span>
                                      <span>{data.adhan}</span>
                                      <span>{data.prayer}</span>
                                  </div>
                                  <div className="text-left mt-2 khateeb-name">
                                      Khateeb: {data.khateeb}
                                  </div>
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
    )
}