// import dynamic from 'next/dynamic'
import Clock from 'react-live-clock'
/**
 * As an alternate solution, the issue can also be
 * circumvented by dynamically importing the React
 * component with next/dynamic using { ssr: false },
 * wherever the component is used.
 * This prevents the component from being included on the server,
 * and dynamically loads it on the client-side only.
 *
 * https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
 */
// const Clock = dynamic(() => import('react-live-clock'), {
//   ssr: false,
// })

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