import React from "react";
import InstantHeadings from "./InstantHeadings";
import AdsCompo from "./AdsCompo";

export default function InstantAcademic() {
  return (
    <div className="mt-[150px]">
      <div>
        <InstantHeadings
          title="Instant Content helps create Academic Content"
          desc="Cut writing times by 80% so you can focus more on the projects you love."
        />
      </div>
      <div className="mt-[70px] flex items-center flex-wrap justify-center w-[80%] max-w-full mx-auto ">
        <div className="max-w-full my-[5px] sm:my-[10px]  linear-bg  md:my-[10px]">
          <AdsCompo
            title="Assignment Writer"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/fb-FO0BLXpt1U7LmOt.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full my-[5px] sm:my-[10px] sm:mx-[35px] md:mx-[35px] md:my-[10px] mx-0 linear-bg">
          <AdsCompo
            title="Essay Writer"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/google-FfERr4vcQAVWXlJ.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full my-[5px] sm:my-[0px] linear-bg sm:mt-[40px] md:mt-[0px] ">
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
