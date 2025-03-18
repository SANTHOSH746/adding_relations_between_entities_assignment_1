import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-80">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{destination.name}</h2>
        <p className="text-gray-600">{destination.location}</p>
        <p className="mt-2">{destination.description}</p>
        <p className="mt-2 font-bold text-green-600">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
