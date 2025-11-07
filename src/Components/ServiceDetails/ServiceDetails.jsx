import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import ContentLayout from "../../Container/ContentLayout";
import { ToastContainer, toast } from "react-toastify";

const ServiceDetails = () => {
  const [formData, setFormData] = useState({});
  const data = useLoaderData();
  const { id } = useParams();
  const filterData = data.filter((service) => service.serviceId === Number(id));
  const {
    category,
    description,
    image,
    price,
    providerEmail,
    serviceName,
    rating,
    slotsAvailable,
    providerName,
  } = filterData[0];

  const handleBookNow = (e) => {
    e.preventDefault();
    toast("Service Book Successfully!");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const data = { name: name, email: email };

    setFormData(data);
  };
  return (
    <ContentLayout>
      <div className="py-10 flex flex-col items-center">
        <ToastContainer />
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div>
            <img
              src={image}
              alt={serviceName}
              className="w-full shadow-md object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-3">{serviceName}</h1>

            <p className="text-gray-600 mb-5">{description}</p>

            <ul className="space-y-2 text-gray-700 mb-5">
              <li>
                <span className="font-semibold">Category:</span> {category}
              </li>
              <li>
                <span className="font-semibold">Provider:</span> {providerName}
              </li>
              <li>
                <span className="font-semibold">Provider Email:</span>{" "}
                {providerEmail}
              </li>
              <li className=" flex gap-2 items-center">
                <span className="font-semibold">Rating:</span> <FaStar />{" "}
                {rating}
              </li>
              <li>
                <span className="font-semibold">Slots Available:</span>{" "}
                {slotsAvailable}
              </li>
              <li>
                <span className="font-semibold">Price:</span> ${price}
              </li>
            </ul>

          </div>
        </div>
        <div className="bg-base-200 p-6 my-20 w-1/2">
          <h2 className="text-xl font-bold mb-4 text-center">Book Service</h2>

          <form onSubmit={handleBookNow} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border "
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border"
              required
            />

            <button
              type="submit"
              className="btn btn-primary hover:bg-secondary border-none mt-4 text-base-200 transition-colors w-full"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </ContentLayout>
  );
};

export default ServiceDetails;
