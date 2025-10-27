import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import DetailHeader from "../components/DetailHeader";
import { useParams } from "react-router-dom";
import { db } from "./../../../configs";
import { InstrumentImages, InstrumentListing } from "./../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import ImageGallery from "../components/ImageGallery";
import Description from "../components/Description";
import Features from "../components/Features";
import Footer from "@/components/Footer";
import Pricing from "../components/Pricing";
import Specification from "../components/Specification";
import OwnersDetail from "../components/OwnersDetail";
import FinanacialCalculator from "../components/FinanacialCalculator";
import MostSearchedCar from "@/components/MostSearchedCar";

function ListingDetail() {
  const { id } = useParams();
  const [instrumentDetail, setInstrumentDetail] = useState();

  useEffect(() => {
    GetInstrumentDetail();
  }, []);

  const GetInstrumentDetail = async () => {
    const result = await db
      .select()
      .from(InstrumentListing)
      .innerJoin(
        InstrumentImages,
        eq(InstrumentListing.id, InstrumentImages.carListingId)
      )
      .where(eq(InstrumentListing.id, id));

    const resp = Service.FormatResult(result);

    setInstrumentDetail(resp[0]);
  };

  return (
    <div>
      <Header />

      <div className="p-4 md:p-6 lg:p-10 xl:px-20">
        {/* Header Detail Component  */}
        <DetailHeader carDetail={instrumentDetail} />

        <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-6 md:mt-10 gap-4 md:gap-5">
          {/* Left  */}
          <div className="md:col-span-2 ">
            {/* Image Gallery  */}
            <ImageGallery carDetail={instrumentDetail} />
            {/* Description  */}
            <Description carDetail={instrumentDetail} />
            {/* Features List  */}
            <Features features={instrumentDetail?.features} />
            {/* Finanacial Calculator      */}
            <FinanacialCalculator carDetail={instrumentDetail} />
          </div>
          {/* Right  */}
          <div>
            {/* Pricing  */}
            <Pricing carDetail={instrumentDetail} />
            {/* Instrument Specification  */}
            <Specification carDetail={instrumentDetail} />
            {/* Owners Details  */}
            <OwnersDetail carDetail={instrumentDetail} />
          </div>
        </div>
        <MostSearchedCar />
      </div>
      <Footer />
    </div>
  );
}

export default ListingDetail;
