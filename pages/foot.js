import CompanyLogo from "./company-info";
import Image from "next/image";
import logoCredit from "../public/images/powered_by_ms_3_resized.png";

let developerCompany
developerCompany = 'Masjid Solutions'

export default function ScreenFoot(){
    return (
        <div className="ds-credit">
            <div className="ds-credit-inner d-flex justify-content-between align-items-center px-4 bg-white py-2">
              <CompanyLogo />

                <div className="credit-logo logo-holder">
                    <Image src={logoCredit} alt={developerCompany} height={48}/>
                </div>
            </div>
        </div>
    )
}