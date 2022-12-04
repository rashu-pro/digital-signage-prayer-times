import {useRouter} from "next/router";

export default function GetSlug(){
  const { asPath } = useRouter();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  let slug = asPath.split('=');
  slug = slug[slug.length - 1];
  return slug;
}

