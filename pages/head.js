import Clock from "react-live-clock";
import Script from "next/script";

export default function ScreenHead(){
    return (
      <div className="ds-head text-center py-3">
          <Script id="current-date" strategy="lazyOnload">
              {
                  `
                    let options = { weekday: 'long', month: 'long', day: 'numeric' };
let today  = new Date();
document.getElementById('show-date').innerText = today.toLocaleDateString("en-US", options);
                    `
              }
          </Script>
          <div className='ds-head-inner'>
              <h3 className="title-big mb-0 font-oswald time-big" id="show-time">
                  <Clock format={'hh : mm : ss A'} ticking={true} />
              </h3>
              <div className="divider-holder pt-2 pb-3">
                  <div className="divider"></div>
              </div>
              <h2 className="fs-1 ls-1 m-0" id="show-date">
                  {/*<Clock format={'dddd, Mo MMMM'} />*/}
              </h2>
          </div>
      </div>
    )
}