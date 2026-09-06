import React from "react";
import Head from "next/head";

const ReturnAndCancellationPolicy = () => {
  return (
    <div className="pt-30 md:pt-40 py-30">
      <Head>
        <title>Return & Cancellation Policy - Opal Morsel</title>
        <meta
          name="description"
          content="Opal Morsel Return & Cancellation Policy - Learn how we handle product returns, replacements, and cancellations."
        />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Return Policy</h1>
        <p><strong>Effective Date:</strong> October 28, 2025</p>
        <p className="mt-4">
          At Opal Morsel, we take pride in delivering fresh, homemade, and healthy Indian snacks made
          with love and care. Due to the perishable nature of our food products, we have established a
          fair and transparent return policy to ensure customer satisfaction while maintaining the
          highest hygiene standards.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Return Eligibility</h2>
        <ul className="list-disc pl-6">
          <li>Wrong product delivered</li>
          <li>Damaged products during delivery</li>
          <li>Expired or near-expiry product delivered</li>
          <li>Spoiled or contaminated products</li>
          <li>Missing items in order</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Non-Returnable Items</h2>
        <ul className="list-disc pl-6">
          <li>Opened, used, or tampered items</li>
          <li>Returns after the specified 24-hour reporting window</li>
          <li>Products damaged due to customer mishandling</li>
          <li>Returns without valid proof like photos or documentation</li>
          <li>“Change of mind” returns</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Return Time Frame</h2>
        <p>All return requests must be reported within <strong>24 hours of delivery</strong>.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">How to Initiate a Return</h2>
        <p>To request a return or replacement:</p>
        <ul className="list-disc pl-6">
          <li>Email: [your-email@opalmorsel.com]</li>
          <li>Phone: [Your Contact Number]</li>
          <li>Share order number + images showing the issue</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Packaging & Hygiene</h2>
        <p>Returns must be in original sealed packaging with labels intact.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Return Process</h2>
        <p>
          If approved, we will arrange pickup or return instructions and provide refund/replacement as
          eligible.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Replacement Products</h2>
        <p>Replacement depends on stock availability.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Our Commitment</h2>
        <p>We ensure fast and fair resolutions.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
        <p>Email: [your-email@opalmorsel.com] <br />Phone: [Your Contact Number]</p>

        {/* Cancellation Policy */}
        <h1 className="text-3xl font-bold mt-12 mb-6">Cancellation Policy</h1>
        <p><strong>Effective Date:</strong> October 28, 2025</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">When You Can Cancel</h2>
        <ul className="list-disc pl-6">
          <li>Before order confirmation</li>
          <li>Before dispatch</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">How to Cancel</h2>
        <p>
          Contact support via Email or Phone with order number and registered details.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Cancellation Time Frame</h2>
        <p>
          Orders are processed within 24-48 hours. Once dispatched, cancellation is not possible.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Orders That Cannot Be Cancelled</h2>
        <ul className="list-disc pl-6">
          <li>Dispatched or shipped orders</li>
          <li>Orders out for delivery</li>
          <li>Delivered orders</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Refunds for Cancelled Orders</h2>
        <p>
          Full refund for prepaid orders. No charge for COD orders.
          Refund timeline as per Refund Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Partial Cancellations</h2>
        <p>Possible only if packing has not started.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
        <p>Email: [your-email@opalmorsel.com] <br />Phone: [Your Contact Number]</p>
      </div>
    </div>
  );
};

export default ReturnAndCancellationPolicy;
