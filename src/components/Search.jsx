/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from "@/Shared/Data";
import { Link } from "react-router-dom";
function Search() {
  const [condition, setCondition] = useState();
  const [make, setMake] = useState();
  const [price, setPrice] = useState();

  return (
    <div className="p-3 md:p-5 bg-white rounded-lg md:rounded-full flex-col md:flex md:flex-row gap-4 md:gap-6 lg:gap-10 px-3 md:px-5 items-center w-[95%] md:w-[85%] lg:w-[70%] xl:w-[60%]">
      <Select onValueChange={(value) => setCondition(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-sm md:text-base lg:text-lg border md:border-none bg-white">
          <SelectValue placeholder="Condition" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Used">Used</SelectItem>
          <SelectItem value="Refurbished">Refurbished</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      <Select onValueChange={(value) => setMake(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-sm md:text-base lg:text-lg border md:border-none bg-white">
          <SelectValue placeholder="Manufacturers" />
        </SelectTrigger>
        <SelectContent>
          {Data.BioInstruments.map((maker, index) => (
            <SelectItem value={maker.name}>{maker.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />

      <Select onValueChange={(value) => setPrice(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-sm md:text-base lg:text-lg border md:border-none bg-white">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((price, index) => (
            <SelectItem value={price.amount}>{price.amount}$</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Link
        to={
          "/search?instruments=" +
          condition +
          "&make=" +
          make +
          "&price=" +
          price
        }
      >
        <CiSearch
          className="text-3xl md:text-4xl lg:text-[50px] bg-primary 
        rounded-full p-2 md:p-3 text-white hover:scale-105 transition-all cursor-pointer w-full md:w-auto flex justify-center items-center"
        />
      </Link>
    </div>
  );
}

export default Search;
