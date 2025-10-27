import FakeData from "@/Shared/FakeData";
import React, { useEffect, useState } from "react";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from "./../../configs";
import { InstrumentImages, InstrumentListing } from "./../../configs/schema";
import { desc, eq } from "drizzle-orm";
import Service from "@/Shared/Service";

function MostSearchedCar() {
  const [instrumentList, setInstrumentList] = useState([]);
  useEffect(() => {
    GetPopularInstrumentList();
  }, []);

  const GetPopularInstrumentList = async () => {
    try {
      const result = await db
        .select()
        .from(InstrumentListing)
        .leftJoin(
          InstrumentImages,
          eq(InstrumentListing.id, InstrumentImages.carListingId)
        )
        .orderBy(desc(InstrumentListing.id))
        .limit(10);

      console.log("Raw DB result:", result);
      const resp = Service.FormatResult(result);
      console.log("Formatted result:", resp);
      setInstrumentList(resp);
    } catch (error) {
      console.error("Error fetching instrument list:", error);
    }
  };
  return (
    <div className="mx-4 md:mx-12 lg:mx-24 mt-8 md:mt-16 mb-8">
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center mb-4 md:mb-7 px-4">
        Most Searched Instruments
      </h2>

      <Carousel>
        <CarouselContent>
          {instrumentList.map((instrument, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <CarItem car={instrument} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}

export default MostSearchedCar;
