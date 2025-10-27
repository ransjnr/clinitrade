/* eslint-disable react/prop-types */
import React from "react";
import { HiCalendarDays } from "react-icons/hi2";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
function DetailHeader({ carDetail: instrumentDetail }) {
  return (
    <div>
      {instrumentDetail?.instrumentTitle ? (
        <div>
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            {instrumentDetail?.instrumentTitle}
          </h2>
          <p className="text-xs md:text-sm">{instrumentDetail?.tagline}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
              <HiCalendarDays className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              <h2 className="text-primary text-xs md:text-sm">
                {instrumentDetail?.year}
              </h2>
            </div>
            <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
              <BsSpeedometer2 className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              <h2 className="text-primary text-xs md:text-sm">
                {instrumentDetail?.functionality}
              </h2>
            </div>
            <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
              <GiGearStickPattern className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              <h2 className="text-primary text-xs md:text-sm">
                {instrumentDetail?.operationType}
              </h2>
            </div>
            <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
              <FaGasPump className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              <h2 className="text-primary text-xs md:text-sm">
                {instrumentDetail?.operationType}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full rounded-xl h-[100px] bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
}

export default DetailHeader;
