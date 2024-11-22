import Categories from "@/components/Categories";
import IconSidebar from "@/components/IconSidebar";
import MainContent from "@/components/MainContent";
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
          <div className="relative h-screen w-[calc(100%-200px)]">
            <div className="fixed h-screen w-[calc(100%-200px)] overflow-hidden">
              <TopBar />
              <div className="flex justify-between gap-5 lg:gap-6 xl:gap-[33px]">
                <Categories categories={categories} />
                <MainContent params={{ catId }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
