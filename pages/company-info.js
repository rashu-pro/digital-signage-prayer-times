import useSWR from 'swr'
import getSlug from "./slug";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function CompanyLogo(){
    const { data, error } = useSWR('https://secure-api.net/api/v1/company-prayer?slug='+getSlug(), fetcher)
    if(error) return <p className='text-center'> Failed to load... </p>
    if(!data) return <p className='text-center'>loading...</p>

    return (
        <div className="organization-logo logo-holder">
            <Image src={data.logoURL}
                   alt={data.name}
                   fill />
        </div>
    )
}