import avatar from "@/../public/images/top-avatar.png";

import Image from "next/image";

const TopBar = () => {
  return (
    <div className="flex w-full items-center justify-between gap-6 p-4 pb-5 lg:pb-6 lg:pt-5 xl:pb-[35px]">
      <h3 className="h5 font-semibold text-[#393939]">Dua Page</h3>
      <div className="flex items-center justify-between rounded-2xl border-[0.5px] border-[#E2E2E2] bg-white py-1 pr-1 ps-4">
        <input
          type="text"
          className="bg-transparent px-2 py-1 focus:outline-none"
          placeholder="Search by Dua Name"
        />
        <button className="p-2.5">
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
      </div>

      <div>
        <Image src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default TopBar;
