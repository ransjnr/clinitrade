import { Button } from "@/components/ui/button";
import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
function Pricing({ carDetail: instrumentDetail }) {
  return (
    <div className="p-4 md:p-6 lg:p-10 rounded-xl border shadow-md">
      <h2 className="text-sm md:text-base">Our Price</h2>
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        ${instrumentDetail?.sellingPrice}
      </h2>

      <Button className="w-full mt-4 md:mt-7" size="lg">
        <MdOutlineLocalOffer className="text-base md:text-lg mr-2" />
        <span className="hidden sm:inline">Make an Offer Price</span>
        <span className="sm:hidden">Make Offer</span>
      </Button>
    </div>
  );
}

export default Pricing;
