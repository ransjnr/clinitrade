import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { db } from "./../../../configs";
import { InstrumentImages, InstrumentListing } from "./../../../configs/schema";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "@/Shared/Service";
import CarItem from "@/components/CarItem";
import { FaTrashAlt } from "react-icons/fa";
function MyListing() {
  const { user } = useUser();
  const [instrumentList, setInstrumentList] = useState([]);
  useEffect(() => {
    user && GetUserInstrumentListing();
  }, [user]);
  const GetUserInstrumentListing = async () => {
    const result = await db
      .select()
      .from(InstrumentListing)
      .leftJoin(
        InstrumentImages,
        eq(InstrumentListing.id, InstrumentImages.carListingId)
      )
      .where(
        eq(InstrumentListing.createdBy, user?.primaryEmailAddress?.emailAddress)
      )
      .orderBy(desc(InstrumentListing.id));

    const resp = Service.FormatResult(result);
    console.log(resp);
    setInstrumentList(resp);
  };

  return (
    <div className="mt-4 md:mt-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          My Listing
        </h2>
        <Link to={"/add-listing"}>
          <Button className="w-full sm:w-auto">+ Add New Listing</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 md:mt-7 gap-3 md:gap-5">
        {instrumentList.map((item, index) => (
          <div key={index}>
            <CarItem car={item} />
            <div className="p-2 bg-gray-50 rounded-lg flex justify-between gap-3">
              <Link
                to={"/add-listing?mode=edit&id=" + item?.id}
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  Edit
                </Button>
              </Link>
              <Button variant="destructive">
                <FaTrashAlt />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyListing;
