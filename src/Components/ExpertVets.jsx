import React from "react";

const vets = [
  {
    id: 1,
    name: "Dr. Sarah Bennett",
    specialty: "Canine Health Specialist",
    bio: "10+ years of experience helping dogs stay healthy during all seasons.",
    image: "https://i.ibb.co.com/wFthqy14/image.png",
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    specialty: "Feline Wellness Expert",
    bio: "Passionate about keeping cats cozy and well-groomed in winter.",
    image: "https://i.ibb.co.com/My3SzFcy/image.png",
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    specialty: "Nutrition & Winter Care",
    bio: "Focuses on dietary plans to maintain pets' immunity in cold months.",
    image: "https://i.ibb.co.com/xSjPMY13/image.png",
  },
  {
    id: 4,
    name: "Dr. James Wong",
    specialty: "Veterinary Surgery",
    bio: "Expert in safe procedures and winter health checkups for pets.",
    image: "https://i.ibb.co.com/21s8NLf9/image.png",
  },
];

export default function ExpertVets() {
  return (
    <div className="px-6 text-center">
      <h2 className="text-4xl font-bold mb-3 text-black">
        Meet Our Expert Vets
      </h2>
      <p className="text-base-300 mb-10">
        Our team of professional veterinarians is dedicated to keeping your pets
        healthy, happy, and cozy all winter long.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-md:gap-8 gap-4">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="bg-base-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center px-2 py-6"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{vet.name}</h3>
            <p className="text-sm text-base-300 italic mb-2">{vet.specialty}</p>
            <p className="text-base-300 text-sm">{vet.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
