"use client";
import { Category } from "@/app/type/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import AnimateHeight from "react-animate-height";

const SingleCategory = ({
  id,
  category,
  dropDown,
  setDropDown,
}: {
  id: string;
  category: Category;
  dropDown: string;
  setDropDown: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleDropDown = (id: string) => {
    if (dropDown === id) {
      setDropDown("");
    } else {
      setDropDown(id);
    }
  };

  const pathname = usePathname();
  console.log({ pathname });

  return (
    <div className="mx-4">
      <Link
        href={`/${category.cat_id}`}
        className={`flex w-full items-center gap-4 p-2.5 hover:bg-[#E8F0F5] ${pathname === `/${category.cat_id}` ? "bg-[#E8F0F5]" : ""}`}
        onClick={() => handleDropDown(id)}
      >
        <div className="rounded-lg bg-[#CFE0E5] p-2.5">
          <Image
            src={`./images/${category.cat_icon}.svg`}
            alt={category.cat_name_en}
            width={40}
            height={40}
          />
        </div>
        <div className="text-left">
          <h5 className="text-base font-semibold text-primary">
            {category.cat_name_en}
          </h5>
          <p className="mt-1.5 text-[#7E7E7E]">Subcategory: 11</p>
        </div>
      </Link>

      <AnimateHeight
        duration={400}
        height={
          dropDown === id || pathname === `/${category.cat_id}` ? "auto" : 0
        }
        aria-label={`example-panel-${id}`}
      >
        <div className="my-2 ml-12 border-l-2 border-dotted border-primary">
          <div className="ml-3 flex flex-col items-start justify-start gap-y-2 border-dotted">
            {category.subCategories.map((sub) => (
              <div className="my-2 flex flex-row" key={sub.id}>
                <div className="mt-1.5 h-2 w-2 -translate-x-4 rounded-full bg-primary"></div>
                <div className="flex flex-col items-start justify-start">
                  <Link
                    href={`#${sub.id}`}
                  >
                    <p className="text-title  xs:text-2xs cursor-pointer text-left text-sm font-semibold">
                      {sub.subcat_name_en}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default SingleCategory;
