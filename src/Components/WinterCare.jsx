import React from "react";
import petImg from "../assets/flouffy.jpg";
const WinterCare = () => {
  return (
    <div className="md:p-16 flex flex-col items-center w-full mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Winter Care Tips for Pets
      </h2>
      <p className="text-base-300 mb-12 text-center w-xl">
        The cold season can be tough on our furry companions. Follow these
        simple tips to keep them warm, comfortable, and healthy all winter long:
      </p>
      <div>
        <div className="px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src={petImg}
              alt="Cozy pet in winter"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>

          <div className="md:w-1/2 text-base-300">
            <ul className="space-y-3 text-base-300 list-disc list-inside">
              <li>Keep pets indoors during freezing weather.</li>
              <li>Provide cozy blankets and warm bedding.</li>
              <li>Use pet-safe moisturizers for paws and noses.</li>
              <li>Check water bowls — make sure they’re not frozen.</li>
              <li>Feed balanced meals to maintain body warmth.</li>
            </ul>

            <button className="mt-8 btn btn-primary text-base-200 px-6 py-2 font-medium hover:bg-secondary transition border-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterCare;
