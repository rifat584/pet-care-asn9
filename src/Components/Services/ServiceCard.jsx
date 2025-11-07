import React, { use } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate, useParams } from "react-router";

const ServiceCard = ({ service }) => {
  const { serviceName, rating, price, image, serviceId } = service;
  const {id}= useParams();
  const navigate = useNavigate()
  const {user}= use(AuthContext);
  const handleViewDetails= ()=>{
    user? navigate('/'): ''
  }
  console.log(id);
  return (
    <div className="bg-base-200 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative">
      <div className="relative">
        <img
          src={image}
          alt={serviceName}
          className="w-full aspect-3/2 object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-neutral text-white text-xs px-2 py-1 rounded-full shadow flex items-center gap-1">
          <FaStar style={{color:'#EFAE64'}}/> {rating}
        </span>
      </div>

      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-2">{serviceName}</h2>
        <p className="text-lg font-bold text-gray-700">${price}</p>
        <Link className="btn btn-primary hover:bg-secondary border-none mt-4 text-white transition-colors" onClick={handleViewDetails} to={`/service/${serviceId}`}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
