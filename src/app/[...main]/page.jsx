"use client";

import TermsAndConditions from "@/components/stat/termcon";
import { useParams } from "next/navigation";
import ShippingAndDeliveryPolicy from "@/components/stat/delship";
import Disclaimer from "@/components/stat/disclaimer";
import Privacy from "@/components/stat/privacy";

export default function OpalMorsel() {
    const params = useParams();
    const path = (params.main && params.main[0]) || "";
    console.log("Current path:", path);

    const opalhomeCompo = {
        term :<TermsAndConditions/>,
        ship: <ShippingAndDeliveryPolicy/>,
        disclaimer:<Disclaimer/>,
        privacy:<Privacy/>,
    };

    const Componentrender = opalhomeCompo[path.toLowerCase()] || null;

    return (
        <>
            {Componentrender ? (
                Componentrender
            ) : (
                <div className="text-orange-700">
                    Page not found
                </div>
            )}
        </>
    );
}
