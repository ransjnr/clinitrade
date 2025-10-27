import React from "react";

function Description({ carDetail: instrumentDetail }) {
  return (
    <div>
      {instrumentDetail?.listingDescription ? (
        <div className="p-4 md:p-6 lg:p-10 rounded-xl bg-white shadow-md mt-4 md:mt-6 border">
          <h2 className="my-2 font-medium text-lg md:text-xl lg:text-2xl">
            Description
          </h2>
          <p className="text-sm md:text-base">
            {instrumentDetail?.listingDescription}
          </p>
        </div>
      ) : (
        <div className="w-full h-[100px] mt-7 bg-slate-200 animate-pulse rounded-xl"></div>
      )}
    </div>
  );
}

export default Description;
