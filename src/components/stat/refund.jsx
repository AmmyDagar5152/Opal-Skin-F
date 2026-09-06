"use client";

export default function Refund() {
  return (
    <div className="bg-white text-gray-800 px-4 sm:px-8 lg:px-24 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Refund Policy</h1>

        <p className="text-lg leading-relaxed mb-6">
          <strong>Effective Date:</strong> October 28, 2025
        </p>

        <p className="leading-relaxed mb-6">
          At <strong>Opal Morsel</strong>, customer satisfaction is our top
          priority. We are committed to processing refunds fairly,
          transparently, and promptly when you are eligible for one.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">When Refunds Are Issued</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Your order was cancelled before dispatch</li>
            <li>You received wrong, damaged, expired, or defective products</li>
            <li>Items were missing from your delivered order</li>
            <li>
              Payment was charged but the order was not processed or delivered
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Refund Eligibility</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Requests must be made within the specified time frames</li>
            <li>Valid proof must be provided (photos/order details)</li>
            <li>
              Products must meet conditions outlined in our Return Policy
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Non-Refundable Cases</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Products that have been opened, consumed, or used</li>
            <li>Orders cancelled after dispatch</li>
            <li>Complaints after 24 hours of delivery</li>
            <li>Returns without valid proof or reason</li>
            <li>Change of mind after delivery</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Refund Processing Time
          </h2>
          <p className="leading-relaxed mb-4">
            Once your refund request is approved:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Refund initiated within 2–3 business days</li>
            <li>
              Amount credited within 5–7 business days depending on payment
              provider
            </li>
            <li>For COD — refund via bank transfer</li>
          </ul>

          <p className="leading-relaxed mt-3 italic">
            *Timelines may vary based on your bank or payment institution.*
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Refund Methods</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Card Payments → Refunded to original card</li>
            <li>UPI/Net Banking → Returned to linked bank account</li>
            <li>Wallets → Credited back to same wallet</li>
            <li>COD → Refunded via bank transfer</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Partial Refunds</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>If only some items are eligible for refund</li>
            <li>If discount applied to original order</li>
            <li>For partial order cancellations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Refund Confirmation</h2>
          <p className="leading-relaxed">
            Once processed, a confirmation message will be sent. If refund does
            not appear within the expected time, please check with your bank or
            payment provider first before contacting us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Exceptions for Perishable Products
          </h2>
          <p className="leading-relaxed">
            As we sell fresh, homemade food products, opened or partially
            consumed items cannot be refunded due to hygiene & safety reasons.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">
            Our Commitment to Transparency
          </h2>
          <p className="leading-relaxed">
            If your refund request is denied, we will clearly explain the reason.
            Our support team is always here to help and find fair solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="leading-relaxed">
            For refund-related assistance, reach us at:<br />
            <strong>Email:</strong> your-email@opalmorsel.com <br />
            <strong>Phone:</strong> Your Contact Number
          </p>
        </section>
      </div>
    </div>
  );
}
