import useSWR from 'swr'
import {useRouter} from "next/router";
import Marquee from "react-fast-marquee";
import Announcements from "./announcements";

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
    console.log('jummah length: ', data.jummah.length);
    if(data.jummah.length<2){
        let documentWidth = window.innerWidth;
        let documentHeight = window.innerHeight;
        console.log(documentWidth);
        if(documentHeight>1800 && documentWidth>1040){
            document.querySelector('body').style.fontSize = "26.5px";
            document.querySelector('html').style.fontSize = "26.5px";
            document.querySelector('body').classList.add('padding-big');
        }

        if(documentHeight>3650 && documentWidth>2050){
            document.querySelector('body').style.fontSize = "53px";
            document.querySelector('html').style.fontSize = "53px";
        }
    }

    return (
        <div className="ds-foot ds-inner">

            <div className="ds-foot-inner">
                <div className="">
                    <div className="">
                        <Marquee className="py-4 text-yellow marquee-text"
                                 gradient={false}
                                 pauseOnClick={true} speed={180}>
                            <Announcements />
                        </Marquee>
                    </div>
                    <div className='text-center'>
                        {/*<p className="jummah-date bg-success">{data.jummah[0].date}</p>*/}
                    </div>
                </div>


                <table className="table table-borderless table-jummuah-times table-2tr table-striped m-0 border-0">
                    <tbody>

                    { data.jummah.map( (data, index) => (
                      <>
                          <tr key={index} className={"row-"+index}>
                              <td>
                                  <div className="d-flex justify-content-between jummah-row">
                                      <span>{data.prayerName}</span>
                                      <span>{data.adhan}</span>
                                      <span>{data.prayer}</span>
                                  </div>
                                  <div className="text-left khateeb-name">
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