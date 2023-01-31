import CompanyLogo from "./company-info";
import Image from "next/image";

let developerCompany
developerCompany = 'Masjid Solutions'

export default function ScreenFoot(){
    return (
        <div className="ds-credit">
            <div className="ds-credit-inner d-flex justify-content-between align-items-center px-4 bg-white py-2">
              <CompanyLogo />

                <div className="credit-logo logo-holder">
                    <Image src="https://res.cloudinary.com/secure-api/image/upload/v1675168899/secure-api/Secure-api/images/byu2ndwvjtwfczpkz87d.png" alt={developerCompany} fill />
                </div>
            </div>
        </div>
    )
}