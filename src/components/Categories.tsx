// Import images at the top
// import duarGurutto from "@/../public/images/duar_gurutto.svg";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="fixed h-[85.5vh] z-[0] lg:top-[119px] lg:w-[350px] xl:w-[350px] 2xl:w-[350px] 3xl:w-[350px] overflow-hidden bg-white rounded-2lg dark:bg-dark-bg xs:hidden sm:hidden md:block xs:h-screen sm:h-screen lg:h-[74vh]">
      <div className="fixed w-[350px] rounded-t-2lg bg-primary justify-center items-center h-14 flex flex-row px-5">
        <p className="text-base text-white mx-auto">Categories</p>
      </div>
      <div className="fixed overflow-hidden w-[350px] mt-14">
        <div className="mx-3 pt-4">
          <label className="relative block w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="stroke-mute-grey" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <input
              id="filerted_catList"
              className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  
        sm:text-sm dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96a2b4]"
              placeholder="Search Categories"
              type="text"
              name="search"
            />
          </label>
        </div>

        <div className="h-[calc(100vh-32vh)] lg:h-[calc(100vh_-_45.5vh)] 3xl:h-[68vh] scrl-cat pb-8 mb-4 overflow-hidden">
          <div className="mt-4">
            <div className="group scroll-mt-4 style-Kalpurush" id="cat_1">
              <a href="/duas/dua's-importance?cat=1">
                <div className="cursor-pointer bg-white flex justify-between items-center mx-3 dark:bg-transparent my-2">
                  <div className="bg-icon-bg dark:bg-dark-bg-dark group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark">
                    <div className="flex flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
                      <div className="bg-dua-bg dark:bg-dark-bg flex rounded-lg items-center h-14 w-14 xs:w-12 xs:h-12">
                        <Image src={duarGurutto} alt="duar_gurutto" className="p-3" />
                      </div>
                      <div className="w-40 text-left ml-2">
                        <p className="text-base style-kalpurush text-black style-inter-cat dark:text-dark-text sm:text-mss">Duas Importance</p>
                        <p className="text-mute-grey text-xs mt-1 dark:text-dark-text xs:text-[11px]">Subcategory: 7</p>
                      </div>
                    </div>
                    <div className="flex flex-row w-12 items-center xl:hidden">
                      <div className="bg-devider w-0.1 mr-3 h-12 dark:hidden"></div>
                      <div className="flex flex-col gap-y-1 justify-center items-center">
                        <p className="text-base dark:text-dark-text xs:text-sm sm:text-mss">21</p>
                        <p className="text-mute-grey text-xs dark:text-dark-text xs:text-[11px]">Duas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="ml-12 border-l-2 border-dotted my-2 border-primary">
                <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
                  {/* Subcategory Links */}
                  <div className="flex flex-row my-2">
                    <div className="bg-primary -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
                    <div className="flex flex-col justify-start items-start">
                      <a href="/duas/dua's-importance?cat=1&subcat=1">
                        <p className="text-title cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs style-Kalpurush">The servant is dependent on his Lord</p>
                      </a>
                    </div>
                  </div>
                  {/* Repeat for other subcategories */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
