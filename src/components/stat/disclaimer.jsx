"use client";

export default function Disclaimer() {
  return (
    <div className="bg-white text-gray-800 font-serif italic pt-30 md:pt-40 py-30">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Disclaimer</h1>

        <p className="text-lg leading-relaxed mb-6">
          <strong>Effective Date:</strong> October 28, 2025
        </p>

        {/* GENERAL DISCLAIMER */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">General Disclaimer</h2>
          <p className="leading-relaxed">
            The information provided on the Opal Morsel website, product
            descriptions, and promotional materials is for general informational
            purposes only. While we strive for accuracy, Opal Morsel makes no
            representations or warranties of any kind, express or implied, about
            the completeness, accuracy, reliability, or suitability of the
            information provided.
          </p>
        </section>

        {/* PRODUCT QUALITY */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Product Quality and Safety
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Quality Assurance:</strong> While we maintain the highest
              standards, natural variations in handmade products may occur.
            </li>
            <li>
              <strong>Freshness:</strong> Shelf life may vary based on storage
              conditions after delivery.
            </li>
            <li>
              <strong>Hygiene:</strong> We ensure strict hygiene during
              preparation; customers must store properly to maintain quality.
            </li>
          </ul>
        </section>

        {/* HEALTH RESULTS */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Individual Health Results May Vary
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Health benefits may vary depending on personal dietary conditions.
            </li>
            <li>
              Nutrition information is not intended as medical advice.
            </li>
            <li>
              Consult a healthcare professional if you have dietary concerns.
            </li>
          </ul>
        </section>

        {/* ALLERGENS */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Allergen Information
          </h2>
          <p className="leading-relaxed mb-4">
            Our snacks may contain nuts, dairy, gluten, and other allergens.
            Cross-contamination cannot be fully prevented.
          </p>
          <p className="leading-relaxed">
            Customers are responsible for reviewing ingredients and confirming
            suitability before consumption. Opal Morsel is not liable for
            allergic reactions.
          </p>
        </section>

        {/* NUTRITION */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Nutritional Information
          </h2>
          <p className="leading-relaxed">
            Values are approximate and based on standard recipes. Actual values
            may vary due to natural ingredient differences and handmade methods.
          </p>
        </section>

        {/* PRODUCT DESCRIPTION & IMAGES */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Product Descriptions and Images
          </h2>
          <p className="leading-relaxed">
            Images and descriptions are for illustration only. Actual product
            color, size, and appearance may differ slightly.
          </p>
        </section>

        {/* MISUSE */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            No Liability for Misuse
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Improper storage or consumption after delivery</li>
            <li>Adverse reactions due to overconsumption</li>
            <li>Ignoring best-before dates and storage instructions</li>
            <li>
              Consumption by individuals with known allergies to ingredients
            </li>
          </ul>
        </section>

        {/* THIRD PARTY */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Third-Party Links</h2>
          <p className="leading-relaxed">
            We are not responsible for content, privacy practices, or services
            of third-party websites linked on our site.
          </p>
        </section>

        {/* UPDATES */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Changes and Updates</h2>
          <p className="leading-relaxed">
            Opal Morsel reserves the right to modify or update products, content
            or this disclaimer anytime without prior notice.
          </p>
        </section>

        {/* LIABILITY LIMITATION */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            We are not liable for direct, indirect, incidental, or consequential
            damages resulting from the use or misuse of our products or website.
          </p>
        </section>

        {/* ACCEPTANCE */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By using our website or placing an order, you acknowledge that you
            agree with all parts of this disclaimer.
          </p>
        </section>

        {/* CUSTOMER RESPONSIBILITY */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Customer Responsibility
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Providing correct delivery details</li>
            <li>Inspecting delivered products promptly</li>
            <li>Proper storage of food products</li>
            <li>Reviewing ingredients before eating</li>
          </ul>
        </section>

        {/* COMMITMENT */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Our Commitment</h2>
          <p className="leading-relaxed">
            We maintain transparency, quality and are always here to help with
            any concerns. Your trust matters to us.
          </p>
        </section>

        {/* CONTACT */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="leading-relaxed">
            Email: your-email@opalmorsel.com <br />
            Phone: Your Contact Number <br />
            Address: Your Business Address
          </p>
        </section>

        <p className="text-center mt-10 font-medium italic">
          Thank you for choosing Opal Morsel – where tradition meets health, one
          homemade snack at a time!
        </p>
      </div>
    </div>
  );
}
