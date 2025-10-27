import React from "react";
import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
function CarItem({ car: instrument }) {
  return (
    <Link to={"/listing-details/" + instrument?.id}>
      <div className="rounded-xl bg-white border hover:shadow-md cursor-pointer relative overflow-hidden">
        <h2 className="absolute m-2 bg-green-500 px-2 rounded-full text-xs md:text-sm text-white z-10">
          New
        </h2>
        <img
          src={
            instrument?.images?.[0]?.imageUrl ||
            "https://via.placeholder.com/300x180?text=No+Image"
          }
          alt={instrument?.instrumentTitle || "Instrument listing"}
          width={"100%"}
          height={250}
          className="rounded-t-xl h-[150px] md:h-[180px] object-cover w-full"
        />
        <div className="p-3 md:p-4">
          <h2 className="font-bold text-black text-sm md:text-base lg:text-lg mb-2 line-clamp-2">
            {instrument?.instrumentTitle || "Instrument Title"}
          </h2>
          <Separator />
          <div className="grid grid-cols-3 mt-3 md:mt-5 gap-2">
            <div className="flex flex-col items-center">
              <LuFuel className="text-base md:text-lg mb-1 md:mb-2" />
              <h2 className="text-xs md:text-sm">
                {instrument?.mileage || "N/A"}
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <TbBrandSpeedtest className="text-base md:text-lg mb-1 md:mb-2" />
              <h2 className="text-xs md:text-sm">
                {instrument?.fuelType || "N/A"}
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <GiGearStickPattern className="text-base md:text-lg mb-1 md:mb-2" />
              <h2 className="text-xs md:text-sm">
                {instrument?.transmission || "N/A"}
              </h2>
            </div>
          </div>
          <Separator className="my-2" />
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-base md:text-lg lg:text-xl">
              ${instrument?.sellingPrice || "0"}
            </h2>
            <h2 className="text-primary text-xs md:text-sm flex gap-1 md:gap-2 items-center">
              Details <MdOpenInNew className="text-sm" />
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarItem;
