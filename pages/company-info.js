import useSWR from 'swr';
import getSlug from "./slug";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function CompanyLogo() {
  const {data, error} = useSWR('https://secure-api.net/api/v1/company-prayer?slug=' + getSlug(), fetcher)
  if (error) return <p className='text-center'> Failed to load... </p>
  if (!data) return <p className='text-center'>loading...</p>
  let url = window.location.href;
  let slug = url.split('=');
  slug = slug[slug.length-1];
  let companyLogo = data.logoURL;
  // if(slug ==='ics'){
  //   companyLogo = 'https://res.cloudinary.com/secure-api/image/upload/v1675159812/secure-api/ics/images/obw2vgner7zjapdvdo6e.png';
  // }

  return (
    <div className="organization-logo logo-holder">
      <Image src={companyLogo}
             alt={data.name}
             fill/>
    </div>
  )

}