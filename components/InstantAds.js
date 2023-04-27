import React from "react";
import AdsCompo from "./AdsCompo";

export default function InstantAds() {
  return (
    <div className="mx-auto max-w-full w-[80%]">
      <div className="max-w-full w-[600px] mx-auto text-center">
        <h1 className="text-[42px] font-extrabold text-[#232C61]">
          Instant Content helps create Ads copy
        </h1>
        <p className="text-[#6A6870] mt-[26px] text-[26px] font-normal w-[500px] mx-auto">
          Cut writing times by 80% so you can focus more on the projects you
          love.
        </p>
        {/* <span></span> */}
      </div>
      <div className="mt-[70px] flex items-center flex-wrap justify-center max-w-full mx-auto ">
        <div className="max-w-full linear-bg">
          <AdsCompo
            title="Facebook Ads"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/fb-FO0BLXpt1U7LmOt.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full mx-[35px] linear-bg">
          <AdsCompo
            title="Google Ads"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/google-FfERr4vcQAVWXlJ.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full linear-bg">
          <AdsCompo
            title="Instagram Ads"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/insta-y0P3sLuSCsnNAiG.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="mt-[40px] flex flex-wrap items-center justify-evenly w-[68%] border border-white">
          <div className="max-w-full linear-bg">
            <AdsCompo
              title="LinkedIn Ads"
              desc="Create catchy Facebook Ad copies."
              img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/linked-p9V87HS6wXohfOf.png"
              css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
            />
          </div>
          <div className="max-w-full linear-bg">
            <AdsCompo
              title="Twitter Ads"
              desc="Create catchy Facebook Ad copies."
              img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/twitter-SMipfAjcHYniJX2.png"
              css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
