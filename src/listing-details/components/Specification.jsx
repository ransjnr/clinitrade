import CarSpecification from "@/Shared/CarSpecification";
import IconField from "@/add-listing/components/IconField";
import React from "react";

function Specification({ carDetail: instrumentDetail }) {
  console.log(instrumentDetail);
  return (
    <div className="p-4 md:p-6 lg:p-10 rounded-xl border shadow-md mt-4 md:mt-7">
      <h2 className="font-medium text-lg md:text-xl lg:text-2xl">
        Specifications
      </h2>
      {instrumentDetail ? (
        CarSpecification.map((item, index) => (
          <div className="mt-3 md:mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <h2 className="flex gap-2 text-sm md:text-base">
              <IconField icon={item?.icon} /> {item.label}
            </h2>
            <h2 className="text-sm md:text-base font-medium">
              {instrumentDetail?.[item?.name] || "N/A"}
            </h2>
          </div>
        ))
      ) : (
        <div className="w-full h-[300px] md:h-[500px] rounded-xl bg-slate-200 animate-pulse "></div>
      )}
    </div>
  );
}

export default Specification;
