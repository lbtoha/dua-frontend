import duacard from "@/../public/images/duacard.svg";
import { fetchDuas } from "@/utils/fetchDuas";
import Image from "next/image";
import ContentSectionBottom from "./ContentSectionBottom";
const MainContent = async ({ params }: { params: { catId: string } }) => {
  const duas = await fetchDuas(parseInt(params.catId, 10));
  console.log({ duas });
  return (
    <div className="relative w-[calc(100%-470px)] bg-transparent">
      <div className="fixed h-[90vh] w-[calc(100%-670px)] overflow-y-auto bg-inherit">
        <div className="overflow-y-auto">
          {duas.map((dua) => (
            <div key={dua.id}>
              <div className="w-full rounded-xl border-[0.5px] border-[#E2E2E2] bg-white px-4 py-4 md:my-4 md:px-6 lg:px-[30px]">
                <h3 className="flex items-center gap-2.5 text-base font-medium">
                  <span className="text-primary">Section:</span>{" "}
                  <span className="text-[#393939]">
                    The servant is dependent on his Lord
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
