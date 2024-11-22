import allduaIconImg from "@/../public/images/alldua.svg";
import bookmarkIconImg from "@/../public/images/bookmark.svg";
import booksIconImg from "@/../public/images/books.svg";
import duaInfoIconImg from "@/../public/images/dua-info.svg";
import homeIconImg from "@/../public/images/home.svg";
import hand from "@/../public/images/icon-bar-hand.png";
import memorizeIconImg from "@/../public/images/memorize.svg";
import ruqyahIconImg from "@/../public/images/ruqyah.svg";

const images = [
  allduaIconImg,
  bookmarkIconImg,
  booksIconImg,
  duaInfoIconImg,
  homeIconImg,
  memorizeIconImg,
  ruqyahIconImg,
];

import duaLogo from "@/../public/images/dua-logo.svg";
import Image from "next/image";

const IconSidebar = () => {
  return (
    <div className="relative h-[93vh] w-[100px] rounded-3xl bg-white">
      <div className="fixed h-full overflow-x-hidden">
        <div className="flex w-[100px] flex-col gap-y-5">
          <div className="flex flex-col">
            <div className=" mb-10 pt-7 xl:mb-16 2xl:mb-16 3xl:mb-24">
              <Image
                src={duaLogo}
                alt="dua-logo"
                className="h-13 drop-shadow-primary mx-auto w-16 cursor-pointer xl:mb-0"
              />
            </div>
            {images.map((image, index) => (
              <a href="/" key={`sidebar-${index}`}>
                <div className="group my-2 flex w-full cursor-pointer flex-row items-center justify-center rounded-lg">
                  <div className="flex flex-row items-center justify-center p-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F0F5] p-2">
                      <Image
                        src={image}
                        alt="/"
                        className="duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </a>
            ))}

            <div className="pb-20 pt-6 text-center xl:pt-16 2xl:pt-16 3xl:pt-24">
              <button className="drop-shadow-primary size-15 rounded-lg bg-primary">
                <Image src={hand} alt="hand" className="mx-auto shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconSidebar;
