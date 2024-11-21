import IconSidebar from "@/components/IconSidebar";

const page = () => {
  return (
    <div className="relative bg-[#ebeef2]">
      <div className="spx40px spt40px">
        <div className="flex justify-between gap-[30px]">
          <IconSidebar />
          <div className="h-screen w-[calc(100%-100px)] bg-primary">
            <div className="w-full bg-red-600 p-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
