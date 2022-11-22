import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import styles from '../styles/Home.module.css'
import logo from '../public/images/logo_company.png'
import logoCredit from '../public/images/powered_by_ms_3_resized.png'

let companyName
let developerCompany
companyName = "ICS"
developerCompany = 'Masjid Solutions'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Signage</title>
        <meta name="description" content="Digital Signage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='ds-main v2 py-5'>
        <div className='ds-wrapper border-big'>
          {/*ds head*/}
          <div className="ds-head text-center py-3">
            <h3 className="title-big mb-0 font-oswald time-big" id="show-time">
              <span className="me-1">12</span>:<span className="mx-1">45</span> :<span className="ms-1">08</span>
            </h3>
            <div className="divider-holder pt-2 pb-3">
              <div className="divider"></div>
            </div>
            <h2 className="fs-2 ls-1 m-0" id="show-date">
              <span className="day text-uppercase"> Monday, </span>
              <span className="month">
                  21<sup>th</sup> <span className="text-uppercase">November
              </span>
              </span>
            </h2>
          </div>

          {/*ds body*/}
          <div className="ds-body bg-dark">
            <div className="">
              <div className="table-head text-center py-1 bg-white text-dark fw-bold fs-1">Today&apos;s Prayer Times</div>
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
                <tr>
                  <td>Fajr</td>
                  <td>6:15 AM</td>
                  <td>6:20 AM</td>
                </tr>

                <tr>
                  <td>Dhuhr</td>
                  <td>1:17 PM</td>
                  <td>1:45 PM</td>
                </tr>

                <tr className="next-time">
                  <td>Asr</td>
                  <td>4:39 PM</td>
                  <td>5:00 PM</td>
                </tr>

                <tr>
                  <td>Maghrib</td>
                  <td>7:11 PM</td>
                  <td>7:16 PM</td>
                </tr>

                <tr>
                  <td>Isha</td>
                  <td>8:18 PM</td>
                  <td>8:45 PM</td>
                </tr>

                <tr>
                  <td>Duhur</td>
                  <td>1:30 AM</td>
                  <td>1:45 AM</td>
                </tr>
                </tbody>

              </table>
            </div>

          </div>

          {/*ds foot*/}
          <div className="ds-foot ds-inner mt-4">
            <div className="jummah-holder">
              <table className="table table-borderless m-0">
                <tbody>
                <tr>
                  <th></th>
                  <th>Adhan</th>
                  <th>Iqama</th>
                </tr>
                <tr>
                  <td>Jummuah</td>
                  <td>1:45 PM</td>
                  <td>2:00 PM</td>
                </tr>
                </tbody>

              </table>
              <p className="fs-2 mt-4 pt-1 border-top mb-0 fw-bolder text-green"><span className="">Khateeb: </span> Dr.
                Omar Suleiman </p>
            </div>
          </div>

          <div className="ds-credit">
            <div className="ds-credit-inner d-flex justify-content-between align-items-center px-4 bg-white py-2">
              <div className="organization-logo logo-holder">
                <Image src={logo} alt={companyName} height={100} />
              </div>

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
