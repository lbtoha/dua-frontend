import duacard from "@/../public/images/duacard.svg";
import { fetchCategories } from "@/utils/fetchCategories";
import { fetchDuas } from "@/utils/fetchDuas";
import Image from "next/image";
import ContentSectionBottom from "./ContentSectionBottom";

export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories.map((category) => ({
    catId: category.cat_id.toString(),
  }));
}

type Props = {
  params: { catId: string };
 
};
const MainContent = async ({ params}: Props) => {
  const duas = await fetchDuas(parseInt(params.catId, 10));
  return (
    <div className="relative w-full bg-transparent">
      <div className="lg-min:hidden mb-5 flex cursor-pointer flex-row items-center justify-between rounded-xl bg-white px-5 py-4">
        <button
        
          className="flex gap-x-2 text-lg font-medium leading-[25px] text-[#292929]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
          Duas Category
        </button>
      </div>

      <div className="static h-[90vh] overflow-y-auto bg-inherit">
        <div className="">
          {duas.map((dua) => (
            <div key={dua.id}>
              <div
                className="w-full rounded-xl border-[0.5px] border-[#E2E2E2] bg-white px-4 py-4 md:my-4 md:px-6 lg:px-[30px]"
                id={`${dua?.subcat_id}`}
              >
                <h3 className="flex items-center gap-2.5 text-base font-medium">
                  <span className="text-primary">Section:</span>{" "}
                  <span className="text-[#393939]">
                    {dua?.subCategory?.subcat_name_en}
                  </span>
                </h3>
              </div>
              <div className="mt-2.5 w-full rounded-xl border-[0.5px] border-[#E2E2E2] bg-white px-4 py-4 md:my-4 md:px-6 lg:px-[30px]">
                <div className="flex items-center gap-2.5">
                  <div>
                    <Image src={duacard} alt="Image" />
                  </div>
                  <h4 className="text-base font-semibold text-primary">
                    {dua?.dua_name_en}
                  </h4>
                </div>

                {dua?.top_en && (
                  <p className="py-7 text-base font-normal text-[#393939]">
                    {dua?.top_en}
                  </p>
                )}
                {dua?.dua_arabic && (
                  <p className="py-7 text-right text-lg font-normal text-[#393939]">
                    {dua?.dua_arabic}
                  </p>
                )}

                <div>
                  <p className="text-base font-semibold text-primary">
                    Reference
                  </p>
                  {dua?.refference_en && (
                    <p className="pt-1 text-base font-normal text-[#393939]">
                      {dua?.refference_en}
                    </p>
                  )}
                </div>

                <ContentSectionBottom />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
