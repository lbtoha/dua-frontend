"use client";
import { Category } from "@/app/type/categories";
import { useState } from "react";
import SingleCategory from "./SingleCategory";

const Categories = ({ categories }: { categories: Category[] }) => {
  const [dropDown, setDropDown] = useState("");
  return (
    <div className="relative h-[90vh] w-[429px] overflow-hidden rounded-2xl bg-white">
      <div className="fixed w-full max-w-[429px] rounded-2xl bg-white">
        <div>
          <h4 className="rounded-t-lg bg-primary py-[18px] text-center text-lg font-semibold text-white">
            Categories
          </h4>
          <div className="m-4 flex items-center justify-between rounded-2xl border-[0.5px] border-[#E2E2E2] bg-white py-1 pr-1 ps-4">
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                  stroke="#868686"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <input
              type="text"
              className="bg-transparent px-2 py-1 focus:outline-none"
              placeholder="Search by Categories"
            />
          </div>
        </div>

        <div className="relative">
          <div className="h-[60vh] overflow-y-scroll pb-15">
            {categories?.map((category) => (
              // <div className="mx-4" key={category.id}>
              //   <button className="flex w-full items-center gap-4 p-2.5 hover:bg-[#E8F0F5]">
              //     <div className="rounded-lg bg-[#CFE0E5] p-2.5">
              //       <Image src={icon} alt="Image" width={40} height={40} />
              //     </div>
              //     <div className="text-left">
              //       <h5 className="text-base font-semibold text-primary">
              //         {category.cat_name_en}
              //       </h5>
              //       <p className="mt-1.5 text-[#7E7E7E]">Subcategory: 11</p>
              //     </div>
              //   </button>

              //   <div className="my-2 ml-12 border-l-2 border-dotted border-primary">
              //     <div className="ml-3 flex flex-col items-start justify-start gap-y-2 border-dotted">
              //       {category.subCategories.map((sub) => (
              //         <div className="my-2 flex flex-row" key={sub.id}>
              //           <div className="mt-1.5 h-2 w-2 -translate-x-4 rounded-full bg-primary"></div>
              //           <div className="flex flex-col items-start justify-start">
              //             <a
              //               href={`/duas/dua's-importance?cat=${sub.cat_id}&subcat=${sub.subcat_id}`}
              //             >
              //               <p className="text-title dark:text-dark-text xs:text-2xs cursor-pointer text-left text-sm font-semibold">
              //                 {sub.subcat_name_en}
              //               </p>
              //             </a>
              //           </div>
              //         </div>
              //       ))}
              //     </div>
              //   </div>
              // </div>

              <SingleCategory
                key={category.id}
                id={`${category.id}`}
                category={category}
                dropDown={dropDown}
                setDropDown={setDropDown}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
