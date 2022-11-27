import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function PrayerTimes(){
    const { data, error } = useSWR('https://secure-api.net/beta/api/v1/company/prayer/daily/schedule?slug=secure-api', fetcher, { refreshInterval: 21600000 })
    // const { data, error } = useSWR('https://637de0ebcfdbfd9a639f90a6.mockapi.io/app/prayer-times/1', fetcher, { refreshInterval: 21600000 })
    if(error) return <p> Failed to load!</p>
    if(!data) return <p className='text-center'>loading...</p>

    // console.log('data:',data)
    // data.prayers.map((data, index)=>{
    //     console.log(data.prayerName)
    // })
    // return

    // let prayerTimesKeys = Object.keys(data.prayerTimes)
    // let prayerTimesValues = Object.values(data.prayerTimes)
    // let nextClassArray = []
    //
    // let today = new Date();
    // let timeFormat = today.getHours()>12?'PM':'AM';
    // let hours = today.getHours()>12?today.getHours()-12:today.getHours();
    // let minutes = today.getMinutes().toString();
    // minutes = minutes.length<2?'0'+minutes:minutes;
    // let currentTime = hours + ":" + minutes + " " + timeFormat;
    //
    // if(today.getHours()<12){
    //     prayerTimesValues.map((data, index) => {
    //         nextClassArray[0]='next-time1'
    //     })
    // }else{
    //     let count = 0;
    //     for(let i = 1; i<prayerTimesValues.length; i++){
    //         nextClassArray[i]='not-next-time'
    //         console.log(currentTime);
    //         let prayerHours = parseInt(prayerTimesValues[i].adhan.substr(0,1));
    //         let currentHours = parseInt(today.getHours());
    //         if(currentHours<prayerHours){
    //             count++;
    //             nextClassArray[i]='next-time next-time'+count
    //         }
    //
    //     }
    // }

    return (
        <div className="ds-body bg-dark">
            <div className="">
                <div className="table-head d-flex justify-content-center align-items-center text-center py-1 bg-white text-dark fw-bold fs-1">Today&apos;s Prayer Times</div>
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

                    {data.prayers.map((data, index)=>(
                        <tr key={index}>
                        <td>{data.prayerName}</td>
                        <td>{data.adhan}</td>
                        <td>{data.prayer}</td>
                        </tr>
                    ))}

                    {/*{ prayerTimesKeys.map( (data, index) => (*/}
                    {/*    <tr key={index} className={nextClassArray[index]}>*/}
                    {/*        <td>{data}</td>*/}
                    {/*        <td>{prayerTimesValues[index].adhan}</td>*/}
                    {/*        <td>{prayerTimesValues[index].prayer}</td>*/}
                    {/*    </tr>*/}
                    {/*)) }*/}
                    </tbody>

                </table>
            </div>

        </div>
    )
}