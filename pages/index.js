import Head from 'next/head'
import PrayerTimes from "./prayer-times";
import ScreenHead from "./components/head";
import ScreenFoot from "./components/foot";

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

          </div>

          <ScreenFoot />
        </div>
      </div>

    </div>
  )
}
