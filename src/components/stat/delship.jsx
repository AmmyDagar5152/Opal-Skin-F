import React from "react";
import Head from "next/head";

const ShippingAndDeliveryPolicy = () => {
  return (
    <div className="pt-30 md:pt-40 py-30">
      <Head>
        <title>Shipping & Delivery Policy - Opal Morsel</title>
        <meta
          name="description"
          content="Opal Morsel Shipping & Delivery Policy - Learn how we fulfill and deliver our fresh homemade snacks across India."
        />
      </Head>

      <div className="max-w-5xl mx-auto px-4 font-serif italic py-10 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Shipping & Delivery Policy</h1>
        <p><strong>Effective Date:</strong> October 28, 2025</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Serviceable Locations
        </h2>
        <p>
          Opal Morsel currently delivers products across India through trusted
          courier partners such as Delhivery and others to ensure timely and safe
          delivery. Service availability may vary based on your PIN code.
        </p>
        <p className="mt-2">
          If your location is not serviceable, you may request a manual check and
          we will try to arrange an alternate delivery option. Additional charges
          may apply in such cases.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Tracking Your Order
        </h2>
        <p>
          Once your order is dispatched, you will receive an SMS or email with the
          tracking ID and the tracking link to monitor the real-time status of
          your shipment.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Shipping Charges
        </h2>
        <p>
          We currently offer <strong>free shipping</strong> on all valid orders.
          However, shipping charges may apply for:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Non-serviceable or remote locations</li>
          <li>Special delivery requests made by the customer</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Delivery Timelines
        </h2>
        <p>
          Orders are usually delivered within <strong>3–7 business days</strong>,
          depending on your location:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Metro cities: 3–4 days</li>
          <li>Major towns: 4–6 days</li>
          <li>Remote areas: 6–8 days</li>
        </ul>
        <p className="mt-2">
          We strive for faster deliveries, especially for nearby regions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Cash on Delivery (COD)
        </h2>
        <p>
          COD availability depends on courier partner capability and cash limit
          allowable for your delivery area. If COD is not available at your
          location, prepaid payment will be required.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Delayed or Failed Delivery
        </h2>
        <p>
          Though rare, delivery delays may occur due to weather, operational
          issues, or incorrect address details. If your shipment is delayed, our
          support team will assist in tracking and resolution.
        </p>
        <p className="mt-2">
          In case of delivery failure caused by incorrect or incomplete delivery
          information from the customer, re-delivery charges may apply.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Damaged or Missing Items
        </h2>
        <p>
          If your order is received in damaged condition or with missing items,
          please notify us within <strong>24 hours</strong> of delivery with
          photos as proof. We will arrange a resolution as per our Return Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Return Pickup Assistance
        </h2>
        <p>
          For approved returns or replacements, our logistics partners will
          arrange product pickup. You will be guided through the complete process
          by our support team.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
        <p>
          For delivery concerns or tracking help:<br />
          Email: [your-email@opalmorsel.com] <br />
          Phone: [Your Contact Number]
        </p>
      </div>
    </div>
  );
};

export default ShippingAndDeliveryPolicy;
