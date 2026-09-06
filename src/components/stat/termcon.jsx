"use client";
import React from "react";

const TermsAndConditions = () => {
  return ( 
    <div className="font-serif italic pt-30 md:pt-40 py-30 max-w-5xl mx-auto leading-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>

      <p className="mb-4">
        Welcome to Opal Morsel. These Terms & Conditions constitute a legally
        binding agreement between you (“User”) and Opal Morsel (“Company”, “We”,
        “Us”, or “Our”) regarding your access to and usage of our website,
        services, and homemade Indian snack products. By browsing, accessing, or
        making a purchase on our platform, you unequivocally acknowledge that
        you have read, understood, and agreed to comply with all rules, policies,
        and obligations outlined herein. If you do not agree, you must
        discontinue the use of this website immediately.
      </p>

      {/* Eligibility */}
      <h2 className="font-semibold text-xl mt-8 mb-2">1. User Eligibility & Authentication</h2>
      <p className="mb-4">
        You must be a legal adult (18+ years) to place orders on this website.
        When creating an account or placing an order, all details submitted must
        be accurate and complete. You shall be solely responsible for
        maintaining confidentiality and all activities that occur under your
        account, including unauthorized usage due to negligence.
      </p>

      {/* Intellectual Property */}
      <h2 className="font-semibold text-xl mt-8 mb-2">2. Intellectual Property Rights</h2>
      <p className="mb-4">
        All website content including logos, product images, designs, text,
        videos, and trademarks are the exclusive intellectual property of Opal
        Morsel. Reproduction, modification, or distribution of any material
        without our express written consent is strictly prohibited and may lead
        to legal consequences under applicable copyright laws.
      </p>

      {/* Product & Pricing */}
      <h2 className="font-semibold text-xl mt-8 mb-2">3. Product Listings, Pricing & Accuracy</h2>
      <p className="mb-4">
        Although we strive to maintain accurate representation of our homemade,
        healthy snack items such as ladoos with dry fruits, ragi chips,
        multigrain chips etc., product information, pricing, and availability
        may change without prior notice due to raw material variations or
        typographical errors. We retain absolute right to correct information or
        cancel any order affected by inaccuracies.
      </p>

      {/* Payments */}
      <h2 className="font-semibold text-xl mt-8 mb-2">4. Payments & Security</h2>
      <p className="mb-4">
        All payments must be made in Indian Rupees using available digital modes.
        We do not store sensitive payment details; however, transaction security
        is subject to third-party payment processor systems, and we shall not be
        held liable for any transaction failures or delays caused externally.
      </p>

      {/* Refunds / Returns / Cancellations */}
      <h2 className="font-semibold text-xl mt-8 mb-2">5. Refund, Return & Cancellation Policy</h2>
      <p className="mb-4">
        Since our food items are freshly prepared, perishable consumables,
        returns or refunds are only permitted if the received product is
        damaged, incorrect, or quality-defective. Any refund request must be
        reported within **24 hours of delivery** along with valid photo/video
        evidence. Refund mode will depend on the original payment method and may
        take **5–7 working days** for processing.
      </p>
      <p className="mb-4">
        We do not accept cancellations once an order has been packed or
        dispatched for delivery. However, pre-dispatch cancellation may be
        allowed only if our support team confirms feasibility. Forced refusal at
        delivery or incorrect address details may result in deduction of
        shipping/handling charges from the possible refund amount (if approved).
      </p>

      {/* Shipping & Delivery */}
      <h2 className="font-semibold text-xl mt-8 mb-2">6. Shipping, Delivery & Risk Transfer</h2>
      <p className="mb-4">
        Orders are shipped through approved courier partners. Estimated delivery
        timelines are shared at checkout but may vary due to external logistical
        factors. Upon dispatch, all risk of product loss or damage transfers to
        the User. You agree to provide accurate delivery details and accept the
        shipment on arrival.
      </p>

      {/* Prohibited Actions */}
      <h2 className="font-semibold text-xl mt-8 mb-2">7. Prohibited Conduct</h2>
      <p className="mb-4">
        You agree not to misuse the website by attempting actions that include
        but are not limited to hacking, data extraction, fake orders, harassment
        of customer support, spreading malware, or misrepresenting identity. Any
        violation may lead to immediate legal enforcement and termination of
        access.
      </p>

      {/* Liability */}
      <h2 className="font-semibold text-xl mt-8 mb-2">8. Limitation of Liability</h2>
      <p className="mb-4">
        Opal Morsel shall not be responsible for any indirect, incidental, or
        consequential damages arising from the use of products or website
        services, including allergies or misuse of food items. Users are advised
        to verify ingredients before consumption.
      </p>

      {/* Termination */}
      <h2 className="font-semibold text-xl mt-8 mb-2">9. Account Termination</h2>
      <p className="mb-4">
        We retain full authority to restrict access, suspend accounts, or cancel
        orders at our discretion if any suspicious or abusive activity is
        observed.
      </p>

      {/* Governing Law */}
      <h2 className="font-semibold text-xl mt-8 mb-2">10. Governing Laws & Jurisdiction</h2>
      <p className="mb-4">
        All policies and disputes shall be governed under the laws of India.
        Exclusive jurisdiction will be held by the courts located in Bengaluru,
        Karnataka.
      </p>

      {/* Contact */}
      <h2 className="font-semibold text-xl mt-8 mb-2">11. Contact Information</h2>
      <p className="mb-4">
        For queries related to Terms & Conditions, please reach out: <br />
        📧 Email: support@opalmorsel.com <br />
        📞 Phone: +91-XXXXXXXXXX
      </p>

      <p className="text-sm text-gray-500 mt-10">
        Last Updated: {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default TermsAndConditions;
