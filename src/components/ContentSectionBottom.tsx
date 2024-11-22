
import bookmarkIcon from "@/../public/images/bookmark.svg";
import copyIcon from "@/../public/images/copy.svg";
import planIcon from "@/../public/images/plan.svg";
import reportIcon from "@/../public/images/report.svg";
import shareIcon from "@/../public/images/share.svg";
import shuffleIcon from "@/../public/images/suffle.svg";
import Image from "next/image";
import { useState } from "react";

const ContentSectionBottom = () => {
  
  return (
    <div className="flex flex-row items-center justify-between px-6">
      <div className="flex flex-row items-center py-4 xs:w-full xs:gap-x-4">
        <audio></audio>
        <div className="flex flex-row items-center gap-x-3 xs:w-full">
          <input className="hidden" type="range" min="0" max="0" value="0" />
        </div>
        <div className="hidden">
          <p className="text-mute-grey-200  ml-2 text-sm">
            00:00
          </p>
        </div>
        <div className="hidden">
          <Image
            className="w-8 cursor-pointer opacity-60"
            alt="suffle"
            src={shuffleIcon}
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between gap-x-8 py-6 xs:gap-x-6">
        <div id="copy" className="relative w-6">
          <Image className="cursor-pointer" src={copyIcon} alt="copy" />
        </div>
        <div id="bookmark" className="relative w-6">
          <Image className="cursor-pointer" src={bookmarkIcon} alt="bookmark" />
        </div>
        <div id="plan" className="relative w-6">
          <Image className="cursor-pointer" src={planIcon} alt="plan" />
        </div>
        <div id="share" className="relative w-6">
          <Image className="cursor-pointer" src={shareIcon} alt="share" />
        </div>
        <div id="report" className="relative w-6">
          <Image className="cursor-pointer" src={reportIcon} alt="report" />
        </div>
      </div>
    </div>
  );
};

export default ContentSectionBottom;
