import Clock from "react-live-clock";

export default function ScreenHead(){
    return (
      <div className="ds-head text-center py-3">

          <div className='ds-head-inner'>
              <h3 className="title-big mb-0 font-oswald time-big" id="show-time">
                  <Clock format={'hh : mm : ss A'} ticking={true} />
              </h3>
          </div>
      </div>
    )
}