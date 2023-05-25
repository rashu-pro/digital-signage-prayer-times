import useSWR from 'swr'
import {useRouter} from "next/router";
import Marquee from "react-fast-marquee";
import Announcements from "./components/announcements";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function JummuahTimes(props) {
  const {asPath} = useRouter();
  let slug = asPath.split('=');
  slug = slug[slug.length - 1];

  let endpoint = '/company/prayer/daily/schedule';
  let queryParameter = '?slug=' + slug;

  const {data, error} = useSWR(props.dataBaseUrl + endpoint + queryParameter, fetcher, {refreshInterval: 21600000})
  if (error) return <p className='text-center'>Failed to load... </p>
  if (!data) return <p className='text-center'>loading...</p>

  let documentWidth = window.innerWidth;
  let documentHeight = window.innerHeight;
  let documentFontSize = '';
  let tickerSpeed = 40;
  if(documentWidth>1400){
      tickerSpeed = 60;
  }
  if (documentHeight > 3650 && documentWidth > 2050) {
    tickerSpeed = 120;
  }
  if (data.jummah.length < 2) {
    if (documentHeight > 1800 && documentWidth > 1040) {
      documentFontSize = '31px';
      document.querySelector('body').classList.add('padding-big');
    }

    if (documentHeight > 3650 && documentWidth > 2050) {
      documentFontSize = '63px';
      documentFontSize = '63px';
      document.querySelector('body').classList.add('padding-big');
    }
  }
  document.querySelector('body').style.fontSize = documentFontSize;
  document.querySelector('html').style.fontSize = documentFontSize;

  return (
    <div className="ds-foot ds-inner">

      <div className="ds-foot-inner">
        <div className="">
          <div className="">
            <Marquee className="py-4 text-yellow marquee-text"
                     gradient={false}
                     pauseOnClick={true} speed={tickerSpeed}>
              <Announcements dataBaseUrl={props.dataBaseUrl} />
            </Marquee>
          </div>
        </div>

        <style jsx>{
          `
          .table-striped > tbody > tr:nth-of-type(odd) > * {
            background: ${props.alternateColor};
          }
          `
        }</style>


        <table className="table table-borderless table-jummuah-times table-2tr table-striped m-0 border-0">
          <tbody>

          {data.jummah.map((data, index) => (
            <tr key={index} className={"row-" + index}>
              <td>
                <div className="d-flex justify-content-between jummah-row mb-2">
                  <span>{data.prayerName}</span>
                  <span>{data.adhan}</span>
                  <span>{data.prayer}</span>
                </div>
                <div className="text-left khateeb-name">
                  {data.khateeb && <p className="mb-1">Khateeb: <span className="fw-bold">{data.khateeb}</span> </p>}
                  {data.topic && <p className="mb-0 ">Topic: <span className="fw-bold">{data.topic}</span> </p>}
                </div>
              </td>

            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}