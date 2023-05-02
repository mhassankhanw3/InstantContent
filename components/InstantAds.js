import React from "react";
import AdsCompo from "./AdsCompo";
import InstantHeadings from "./InstantHeadings";

export default function InstantAds() {
  return (
    <div className="mx-auto max-w-[100%] w-[100%] sm:mt-[150px] mt-[50px] sm:px-[0px] px-[0px] ">
      <div>
        <InstantHeadings
          title="Instant Content helps create Ads copy"
          desc="Cut writing times by 80% so you can focus more on the projects you love."
        />
      </div>
      <div className="sm:mt-[70px] sm:px-[10px] md:px-[10px] px-[0px] mt-[20px] grid sm:grid-cols-2 md:grid-cols-3 md:gap-4 grid-cols-none gap-4 sm:w-[1120px] w-[100%] justify-center place-items-center max-w-[100%] mx-auto ">
        <div className="max-w-[100%] w-[358px] my-[5px] sm:my-[0px] sm:px-[0px] md:px-[0px] px-[0px] linear-bg mx-auto">
          <AdsCompo
            title="Facebook Ads"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/fb-FO0BLXpt1U7LmOt.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-[100%] w-[358px] my-[5px] sm:my-[0px] sm:px-[0px] md:px-[0px] px-[0px] linear-bg mx-auto">
          <AdsCompo
            title="Google Ads"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/google-FfERr4vcQAVWXlJ.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-[100%] w-[358px] my-[5px] sm:my-[0px] sm:px-[0px] md:px-[0px] px-[0px] linear-bg mx-auto">
          <AdsCompo
            title="Instagram Ads"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/insta-y0P3sLuSCsnNAiG.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-[100%] w-[358px] my-[5px] sm:my-[0px] sm:px-[0px] md:px-[0px] px-[0px] linear-bg mx-auto">
          <AdsCompo
            title="LinkedIn Ads"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/linked-p9V87HS6wXohfOf.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-[100%] w-[358px] my-[5px] sm:my-[0px] sm:px-[0px] md:px-[0px] px-[0px] linear-bg mx-auto">
          <AdsCompo
            title="Twitter Ads"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/twitter-SMipfAjcHYniJX2.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
      </div>
      {/* <div className="sm:my-[0px] grid grid-cols-2 gap-2 items-center justify-center max-w-[100%] w-[1200px] mx-auto border border-black"> */}

      {/* </div> */}
    </div>
  );
}
