import Head from 'next/head'
import PrayerTimes from "./prayer-times";
import ScreenHead from "./components/head";
import ScreenFoot from "./components/foot";
import {useRouter} from "next/router";


export default function Home() {
  const { asPath } = useRouter();

  const bgColor = '#2e7346';
  const mainUrl = 'https://secure-api.net/';
  const apiUrl = 'api/v1';
  const betaKeyWord = '/beta/';
  const betaKey = asPath.includes(betaKeyWord) ? 'beta/':'';

  const baseUrl = mainUrl+betaKey+apiUrl;

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
          {betaKey?(
            <p style={{margin:0, padding:'4px 10px', position:'fixed', top:'0.5rem',right:'0.5rem',background:'#000000',lineHeight:1,fontSize:'1.2rem',borderRadius:'0.4rem'}}>
              beta
            </p>
          ):(
            <></>
          )}
          {/*ds head*/}
          <ScreenHead />

          <div className='ds-body-wrapper'>
            {/*ds body*/}
            <PrayerTimes dataBaseUrl={baseUrl} />

          </div>

          <ScreenFoot dataBaseUrl={baseUrl} />
        </div>
      </div>

    </div>
  )
}
