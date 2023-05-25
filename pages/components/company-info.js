import useSWR from 'swr';
import getSlug from "./slug";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function CompanyLogo(props) {
  const endpoint ='/company-prayer';
  const queryParameter = '?slug='+getSlug();

  const {data, error} = useSWR(props.dataBaseUrl+endpoint+queryParameter, fetcher)
  if (error) return <p className='text-center'> Failed to load... </p>
  if (!data) return <p className='text-center'>loading...</p>

  let companyLogo = data.logoURL;

  return (
    <div className="organization-logo logo-holder">
      <Image src={companyLogo}
             alt={data.name}
             fill/>
    </div>
  )

}