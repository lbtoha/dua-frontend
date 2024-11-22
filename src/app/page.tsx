import Categories from "@/components/Categories";
import IconSidebar from "@/components/IconSidebar";
import TopBar from "@/components/TopBar";
import { fetchCategories } from "@/utils/fetchCategories";

export const revalidate = 3600;

async function getCategories() {
  try {
    const categories = await fetchCategories();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default async function Page() {
  const categories = await getCategories();

  return (
    <div className="relative bg-[#ebeef2]">
      <div className="spx40px spt40px">
        <div className="flex gap-[30px]">
          <IconSidebar />
          <div className="relative h-screen w-[calc(100%-200px)]">
            <div className="fixed h-screen w-[calc(100%-200px)] overflow-hidden">
              <TopBar />
              <div className="flex justify-between gap-5 lg:gap-6 xl:gap-[33px]">
                <Categories categories={categories} />
                <div className="h-[90vh] w-[calc(100%-470px)] bg-red-700">
                  <div className="overflow-hidden">
                    <div className="w-full rounded-xl border-[0.5px] border-[#E2E2E2] bg-white px-4 py-2 md:my-4 md:px-6 lg:px-[30px]">
                      <h3 className="flex items-center gap-2.5 text-base font-medium">
                        <span className="text-primary">Section:</span>{" "}
                        <span className="text-[#393939]">
                          The servant is dependent on his Lord
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
