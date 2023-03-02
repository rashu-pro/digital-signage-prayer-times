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
                  <p className="m-0 d-flex align-center justify-center ds-event-bottom-foot-credit">
                    <Image src="https://secure-api.net/Content/payment-method-update-assets/img/logo-masjid-main.png"
                           alt={developerCompany}
                           fill />
                    Powered By &nbsp;<a href="https://masjidsolutions.net">https://masjidsolutions.net</a></p>

                </div>
            </div>
        </div>
    )
}