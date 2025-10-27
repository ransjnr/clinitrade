import React from "react";
import { FaCheck } from "react-icons/fa6";

function Features({ features }) {
  return (
    <div className="p-4 md:p-6 lg:p-10 border shadow-md rounded-xl my-4 md:my-7">
      <h2 className="font-medium text-lg md:text-xl lg:text-2xl">Features</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 md:mt-5 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-7">
        {features &&
          Object.entries(features).map(([features, value]) => (
            <div className="flex gap-2 items-center">
              <FaCheck className="text-base md:text-lg p-1 rounded-full bg-blue-100 text-primary" />
              <h2 className="text-sm md:text-base">{features}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Features;
