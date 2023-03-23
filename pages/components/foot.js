import CompanyLogo from "./company-info";
import Image from "next/image";

let developerCompany
developerCompany = 'Masjid Solutions'

export default function ScreenFoot(){
    return (
        <div className="ds-credit">
            <div className="ds-credit-inner d-flex justify-content-between align-items-center px-4 bg-white">
              <CompanyLogo />

                <div className="credit-logo logo-holder">
                  <p className="m-0 d-flex align-center justify-center ds-event-bottom-foot-credit">
                    <a href="https://masjidsolutions.net">
                      <Image src="https://res.cloudinary.com/secure-api/image/upload/v1665995024/secure-api/Secure-api/content/images/bsyzbmzysh1fjgieix2v.png"
                             alt={developerCompany}
                             fill />
                    </a>
                  </p>

                </div>
            </div>
        </div>
    )
}