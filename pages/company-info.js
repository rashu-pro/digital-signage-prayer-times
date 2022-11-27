import useSWR from 'swr'
import styleUtility from "../styles/Utility.module.css";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function CompanyLogo(){
    const { data, error } = useSWR('https://637de0ebcfdbfd9a639f90a6.mockapi.io/app/companyInfo/1', fetcher)
    if(error) return <p> Failed to load... </p>
    if(!data) return <p className={styleUtility.textDanger}>loading...</p>

    return (
        <div className="organization-logo logo-holder">
            <Image src={data.companyLogoUrl} alt={data.companyName} width={80} height={80} />
        </div>
    )
}