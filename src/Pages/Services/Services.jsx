import React from "react";
import ServiceCard from "../../Components/Services/ServiceCard";
import { useLoaderData } from "react-router";
import ContentLayout from "../../Container/ContentLayout";
const Services = () => {
  const data = useLoaderData();
  return (
    <section>
      <ContentLayout>
        <h1 className="text-4xl font-bold my-12 text-center">
          All of Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {data.map((service) => (
            <ServiceCard service={service} key={service.serviceId} />
          ))}
        </div>
      </ContentLayout>
    </section>
  );
};

export default Services;
