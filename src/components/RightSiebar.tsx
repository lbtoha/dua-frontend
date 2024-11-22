import allduaIconImg from "@/../public/images/alldua.svg";
import booksIconImg from "@/../public/images/books.svg";
import homeIconImg from "@/../public/images/home.svg";
import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="max-4xl:hidden">
      <div className="spy32px w-[330px] rounded-[32px] border-[0.5px] border-[#E2E2E2] bg-white px-5">
        <h3 className="text-center text-xl font-bold">Settings</h3>
        <div className="mt-6 flex flex-col gap-4">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-base text-[#868686]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F0F5] p-2">
              <Image
                src={homeIconImg}
                alt="/"
                className="duration-300 hover:scale-110"
              />
            </div>
            <p>Home</p>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-base text-[#868686]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F0F5] p-2">
              <Image
                src={allduaIconImg}
                alt="/"
                className="duration-300 hover:scale-110"
              />
            </div>
            <p>Language Settings</p>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-base text-[#868686]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F0F5] p-2">
              <Image
                src={booksIconImg}
                alt="/"
                className="duration-300 hover:scale-110"
              />
            </div>
            <p>General Settings</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
