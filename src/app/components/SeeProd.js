"use client";
import { useState } from "react";
import "./css/category.css";
import Image from "next/image";
import Star from "../assets/images/star.svg";
import StarFilled from "../assets/images/starfilled.svg";

export default function SeeProd(params) {
  const [poster, setPoster] = useState("");
  let product = params.product;
  return (
    <div className="p-14 flex max-sm:flex-col ">
      <div className="w-1/2 max-sm:w-full max-sm:px-2 h-96 max-sm:h-56 flex rounded-md overflow-hidden justify-between ">
        <div className="categories overflow-y-scroll w-36 max-sm:w-12 h-96 max-sm:h-56">
          <div className="flex flex-col-reverse flex-nowrap w-36 h-fit">
            {product.images.map((el, index) => (
              <img
                onClick={() => setPoster(el)}
                key={index}
                src={el}
                className={`w-36 h-36 max-sm:w-12 max-sm:h-12 object-fill  ${
                  (el === product.thumbnail && poster === "") || el === poster
                    ? "border-sky-400 shadow-sky-400 border-2"
                    : "border-gray-400 shadow-gray-400 border"
                } rounded-md shadow-sm mb-2 `}
              />
            ))}
          </div>
        </div>
        <div>
          <img
            src={poster === "" ? product.thumbnail : poster}
            className="w-96 h-96 max-sm:w-56 max-sm:h-56 object-fill"
          />
        </div>
      </div>
      <div className="w-1/2 max-sm:w-full flex flex-col pt-4 gap-y-6 max-sm:px-2 px-10">
        <h1 className="text-lg text-sky-700">{product.title}</h1>
        <p className="text-amber-600">{product.brand}</p>
        <h2 className="text-gray-600">Category: {product.category}</h2>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex justify-between">
          <div className="flex items-center relative">
            <Image alt="image" src={StarFilled} className="w-4 h-4" />
            <Image alt="image" src={StarFilled} className="w-4 h-4" />
            <Image alt="image" src={StarFilled} className="w-4 h-4" />
            <Image alt="image" src={StarFilled} className="w-4 h-4" />
            <Image alt="image" src={StarFilled} className="w-4 h-4" />
            <div
              className="bg-white size-full absolute"
              style={{ transform: `translateX(${product.rating / 0.05}%)` }}
            ></div>
            <div className="flex items-center absolute">
              <Image alt="image" src={Star} className="w-4 h-4" />
              <Image alt="image" src={Star} className="w-4 h-4" />
              <Image alt="image" src={Star} className="w-4 h-4" />
              <Image alt="image" src={Star} className="w-4 h-4" />
              <Image alt="image" src={Star} className="w-4 h-4" />
            </div>
          </div>
        </div>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
}
