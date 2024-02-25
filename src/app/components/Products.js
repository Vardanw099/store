"use client";
import Image from "next/image";
import Star from "../assets/images/star.svg";
import StarFilled from "../assets/images/starfilled.svg";
import { useRouter } from "next/navigation";

export default function Products(params) {
  const router = useRouter();
  let { products } = params;
  let product = (id) => {
    router.push(`/product/${id}`);
  };
  return (
    <main className="px-12 justify-center gap-10 mt-10 flex flex-wrap max-sm:px-4 max-sm:gap-6">
      {products.map((el) => (
        <div
          onClick={() => product(el.id)}
          className="cursor-pointer group w-60 h-80 hover:shadow-2xl hover:shadow-sky-500 transition-all ease-in-out duration-200 mb-10 rounded-3xl overflow-hidden shadow-md shadow-sky-300 product"
          key={el.id}
        >
          <img src={el.thumbnail} className="w-full h-1/2 object-fill" alt="" />
          <div className="h-1/2 flex flex-col justify-around p-2">
            <h2 className="text-sky-800 font-serif transition-all ease-in-out duration-200 group-hover:text-amber-500">
              {el.title}
            </h2>
            <p className="font-light text-sm">
              {el.description.length > 80
                ? `${el.description.slice(0, 79)}...`
                : el.description}
            </p>
            <div className="flex justify-between">
              <div className="flex items-center relative">
                <Image alt="image" src={StarFilled} className="w-4 h-4" />
                <Image alt="image" src={StarFilled} className="w-4 h-4" />
                <Image alt="image" src={StarFilled} className="w-4 h-4" />
                <Image alt="image" src={StarFilled} className="w-4 h-4" />
                <Image alt="image" src={StarFilled} className="w-4 h-4" />
                <div
                  className="bg-white size-full absolute"
                  style={{ transform: `translateX(${el.rating / 0.05}%)` }}
                ></div>
                <div className="flex items-center absolute">
                  <Image alt="image" src={Star} className="w-4 h-4" />
                  <Image alt="image" src={Star} className="w-4 h-4" />
                  <Image alt="image" src={Star} className="w-4 h-4" />
                  <Image alt="image" src={Star} className="w-4 h-4" />
                  <Image alt="image" src={Star} className="w-4 h-4" />
                </div>
              </div>
              <p>{`$${el.price}`}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
