import React from "react";
import InstantHeadings from "./InstantHeadings";
import AdsCompo from "./AdsCompo";

export default function InstantAcademic() {
  return (
    <div className="sm:mt-[150px] mt-[50px] sm:px-[0px] px-[0px] ">
      <div className="sm:px-[0px] px-[10px] ">
        <InstantHeadings
          title="Instant Content helps create Academic Content"
          desc="Cut writing times by 80% so you can focus more on the projects you love."
        />
      </div>
      <div className="sm:mt-[70px] sm:px-[10px] md:px-[10px] px-[0px] mt-[20px] grid sm:grid-cols-2 md:grid-cols-3 md:gap-4 grid-cols-none gap-4 sm:w-[1120px] w-[100%] justify-center place-items-center max-w-[100%] mx-auto ">
        <div className="max-w-full w-[358px] my-[0px] sm:px-[0px] px-[0px] sm:my-[0px] mx-0 linear-bg">
          <AdsCompo
            title="Assignment Writer"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/fb-FO0BLXpt1U7LmOt.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[0px] sm:px-[0px] px-[0px] sm:my-[0px] mx-0 linear-bg">
          <AdsCompo
            title="Essay Writer"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/google-FfERr4vcQAVWXlJ.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[0px] sm:px-[0px] px-[0px] sm:my-[0px] mx-0 linear-bg ">
          <AdsCompo
            title="Thesis Writer"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/insta-y0P3sLuSCsnNAiG.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
      </div>
    </div>
  );
}
