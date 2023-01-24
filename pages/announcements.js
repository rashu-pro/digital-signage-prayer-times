import 'swiper/css';
import useSWR from "swr";
import getSlug from "./slug";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function Announcements(){
  const { data, error } = useSWR('https://secure-api.net/api/v1/company-prayer?slug='+getSlug(), fetcher)
  if(error) return <p className='text-center'> Failed to load... </p>
  if(!data) return <p className='text-center'>loading...</p>

    return (
      <>
        {data.events.map((data, index)=>(
          <div key={index} className="me-2">
            <p className="m-0">{data.description} </p>
          </div>
        ))}
      </>
    )
}