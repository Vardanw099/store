"use client";
import { useRouter } from "next/navigation";
import "./css/category.css";
import Image from "next/image";
import Arrow from "../assets/images/arrow.svg";

export default function Categoryselect(params) {
  let { categories } = params;
  const router = useRouter();
  const changeVal = (el) => {
    router.push(`/category/${el}`);
  };

  const leftRight = (e, n) => {
    if (e.parentElement.scrollLeft >= 0 && n > 0) {
      e.parentElement.scrollBy(n, 0);
    } else if (e.parentElement.scrollLeft > 0) {
      e.parentElement.scrollBy(n, 0);
    }
  };
  return (
    <div
      //   onMouseOver={(e) => e.target.scrollBy(60, 0)}
      className="px-14 mt-6  categories flex items-center gap-2 overflow-x-scroll scroll-smooth"
    >
      {categories.map((el, i) => (
        <div
          className="basis-32 shrink-0  rounded-xl h-14 flex justify-center items-center text-center text-stone-100 transition-all ease-in-out cursor-pointer duration-300 bg-blue-600 hover:bg-sky-600 hover:contrast-200"
          key={i}
          onClick={() => changeVal(el)}
        >
          <p className="text-sm">{el.toUpperCase()}</p>
        </div>
      ))}
      <div
        onClick={(e) => leftRight(e.target, +350)}
        className="w-14 z-50 h-14 absolute flex justify-center items-center bg-gradient-to-r select-none from-sky-400 rounded-s-3xl right-0 cursor-pointer hover:bg-sky-400 transition-all duration-200  rounded-e-mdease-in-out"
      >
        <Image
          alt="image"
          src={Arrow}
          className="w-8 h-8 z-10 pointer-events-none bg-transparent"
        />
      </div>
      <div
        onClick={(e) => leftRight(e.target, -350)}
        className="w-14 z-50 h-14 absolute flex justify-center items-center bg-gradient-to-r select-none opacity-80 from-sky-400 rounded-e-3xl left-0 cursor-pointer hover:bg-sky-400 transition-all rounded-s-md duration-200 ease-in-out"
      >
        <Image
          alt="image"
          src={Arrow}
          className="w-8 h-8 pointer-events-none bg-transparent z-10 rotate-180"
        />
      </div>
    </div>
  );
}
