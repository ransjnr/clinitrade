/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import Header from "@/components/Header";
import Search from "@/components/Search";
import { db } from "./../../../configs";
import { InstrumentImages, InstrumentListing } from "./../../../configs/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "@/Shared/Service";
import CarItem from "@/components/CarItem";

function SearchByCategory() {
  const { category } = useParams();
  const [instrumentList, setInstrumentList] = useState([]);

  useEffect(() => {
    GetInstrumentList();
  }, []);

  const GetInstrumentList = async () => {
    const result = await db
      .select()
      .from(InstrumentListing)
      .innerJoin(
        InstrumentImages,
        eq(InstrumentListing.id, InstrumentImages.carListingId)
      )
      .where(eq(InstrumentListing.category, category));

    const resp = Service.FormatResult(result);
    setInstrumentList(resp);
  };

  return (
    <div>
      <Header />

      <div className="p-4 md:p-8 lg:p-16 bg-black flex justify-center">
        <Search />
      </div>
      <div className="p-4 md:p-8 lg:p-10 xl:px-20">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl px-4 md:px-0">
          {category}
        </h2>

        {/* List of Instruments  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mt-4 md:mt-7">
          {instrumentList?.length > 0
            ? instrumentList.map((item, index) => (
                <div key={index}>
                  <CarItem car={item} />
                </div>
              ))
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div className="h-[320px] rounded-xl bg-slate-200 animate-pulse"></div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default SearchByCategory;
