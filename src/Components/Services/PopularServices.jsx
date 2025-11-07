import React from "react";
import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router";

const Services = () => {
  const data= useLoaderData()
  console.log(data);
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mb-10">Popular Winter Care Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {
        data.map(service=><ServiceCard service={service} key={service.serviceId} />)
      }
      </div>
      
    </div>
  );
};

export default Services;
