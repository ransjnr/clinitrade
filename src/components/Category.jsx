/* eslint-disable react/jsx-key */
import Data from "@/Shared/Data";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="mt-16 md:mt-32 lg:mt-40">
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center mb-4 md:mb-6 px-4">
        Browse By Type
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 md:gap-6 px-4 md:px-12 lg:px-20">
        {Data.Category.map((category) => (
          <Link to={"search/" + category.name}>
            <div className="border rounded-xl p-3 md:p-4 items-center flex flex-col hover:shadow-md cursor-pointer transition-all">
              <img
                src={category.icon}
                width={30}
                height={30}
                className="md:w-[35px] md:h-[35px]"
              />
              <h2 className="mt-2 text-xs md:text-sm text-center">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
