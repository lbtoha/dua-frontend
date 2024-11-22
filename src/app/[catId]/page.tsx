import IconSidebar from "@/components/IconSidebar";
import RightSidebar from "@/components/RightSiebar";
import SidebarAndContent from "@/components/SidebarAndContent";
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

interface PageProps {
  params: {
    catId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { catId } = params;

  const categories = await getCategories();

  return (
    <div className="relative bg-[#ebeef2]">
      <div className="spx40px spt40px">
        <div className="flex gap-[30px]">
          <IconSidebar />
          <div className="relative h-screen w-full 4xl:w-[calc(100%-200px)]">
            <div className="fixed h-screen overflow-hidden 4xl:w-[calc(100%-200px)]">
              <TopBar />
              <div className="flex gap-5 lg:gap-6 xl:gap-[33px]">
              
                <SidebarAndContent params={{ catId }} categories={categories} />

                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
