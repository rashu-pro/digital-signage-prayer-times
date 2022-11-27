import Clock from "react-live-clock";

export default function ScreenHead(){
    return (
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
    )
}