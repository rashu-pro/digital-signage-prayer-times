import Head from 'next/head'
import Clock from 'react-live-clock'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logoCredit from '../public/images/powered_by_ms_3_resized.png'
import PrayerTimes from "./prayer-times";
import CompanyLogo from "./company-info";

let companyName
let developerCompany
companyName = "ICS"
developerCompany = 'Masjid Solutions'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Digital Signage</title>
        <meta name="description" content="Digital Signage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='ds-main v2'>
        <div className='ds-wrapper'>
          {/*ds head*/}
          <div className="ds-head text-center py-3">
            <div className='ds-head-inner'>
              <h3 className="title-big mb-0 font-oswald time-big" id="show-time">
                <Clock format={'hh : mm : ss A'} ticking={true} />
              </h3>
              <div className="divider-holder pt-2 pb-3">
                <div className="divider"></div>
              </div>
              <h2 className="fs-1 ls-1 m-0" id="show-date">
                <Clock format={'dddd, Qo MMMM'} ticking={true} />
              </h2>
            </div>
          </div>

          <PrayerTimes />

          <div className="ds-credit">
            <div className="ds-credit-inner d-flex justify-content-between align-items-center px-4 bg-white py-2">
              <CompanyLogo />

              <div className="credit-logo logo-holder">
                <Image src={logoCredit} alt={developerCompany} height={48}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
