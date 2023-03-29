import Head from 'next/head'
import PrayerTimes from "./prayer-times";
import ScreenHead from "./components/head";
import ScreenFoot from "./components/foot";

const bgColor = '#2e7346';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prayer Times</title>
        <meta name="description" content="Digital Signage" />
        <link rel="icon" href="/favicon-digital-signage.png" />
      </Head>

      <style jsx>{
        `
        .bg-color{
          background-color: ${bgColor}
        }
        `
      }</style>
      <div className='ds-main bg-color v2'>
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
