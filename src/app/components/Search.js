"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import searchIco from "../assets/images/searchIco.svg";

export default function Search(params) {
  const router = useRouter();
  const [searchText, setsearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/shop/${searchText}`);
  };

  return (
    <div className="flex w-full h-16 mt-6 justify-center items-center">
      <form
        className="w-full h-full flex justify-center items-center"
        onSubmit={handleSearch}
      >
        <input
          onChange={(e) => setsearchText(e.target.value)}
          defaultValue={params.value}
          type="search"
          className="border outline-none border-sky-500 pl-4 w-50 h-10 rounded-s-2xl"
        />
        <button className="flex justify-center items-center rounded-e-2xl w-10 h-10  bg-sky-700">
          <Image alt="image" src={searchIco} className="w-7 h-7 pr-1" />
        </button>
      </form>
    </div>
  );
}
