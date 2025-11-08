import React from "react";
const features = [
  {
    id: 1,
    icon: "🐾",
    title: "Experienced Vets",
    description:
      "Our certified vets provide the best care for your pets all winter long.",
  },
  {
    id: 2,
    icon: "🧥",
    title: "Warm & Cozy Clothing",
    description:
      "Keep your pets comfortable with our winter clothing collection.",
  },
  {
    id: 3,
    icon: "💧",
    title: "Grooming Services",
    description:
      "Professional grooming to protect your pet’s skin and coat in cold weather.",
  },
  {
    id: 4,
    icon: "🛡️",
    title: "Safe Environment",
    description: "We maintain a hygienic and safe environment for all pets.",
  },
];

const WhyUs = () => {
  return (
    <section className="my-12 px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-base-200 shadow-md p-6 flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
            <p className="text-base-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
