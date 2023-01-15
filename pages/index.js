import Head from 'next/head'
import PrayerTimes from "./prayer-times";
import AnnouncementsSlides from "./announcements";
import JummuahTimes from "./jummuah-times";
import ScreenHead from "./head";
import ScreenFoot from "./foot";

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
          <ScreenHead />

          <div className='ds-body-wrapper'>
            {/*ds body*/}
            <PrayerTimes />

              <div className='ds-body-wrapper-foot py-3'>
                {/*jummuah times*/}
                <JummuahTimes />
              </div>

          </div>

          <ScreenFoot />
        </div>
      </div>

    </div>
  )
}
