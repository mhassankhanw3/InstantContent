import React from "react";
import InstantHeadings from "./InstantHeadings";
import AdsCompo from "./AdsCompo";

export default function InstantSocial() {
  return (
    <div className="sm:mt-[150px] mt-[50px] sm:px-[0px] px-[0px] ">
      <div>
        <InstantHeadings
          title="Instant Content helps create Social Media Posts"
          desc="Cut writing times by 80% so you can focus more on the projects you love."
        />
      </div>
      <div className="sm:mt-[70px] mt-[20px] grid sm:grid-cols-3 grid-cols-none gap-4 place-items-center justify-center max-w-[100%] sm:w-[1100px] w-[100%] mx-auto">
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] linear-bg">
          <AdsCompo
            title="Facebook Posts"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/fb-FO0BLXpt1U7LmOt.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] linear-bg">
          <AdsCompo
            title="Reddit Posts"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/reddit-EfLNkwfvDo0cZEr.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] linear-bg">
          <AdsCompo
            title="Instagram Posts"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/insta-y0P3sLuSCsnNAiG.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] linear-bg">
          <AdsCompo
            title="LinkedIn Posts"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/linked-p9V87HS6wXohfOf.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] linear-bg">
          <AdsCompo
            title="Tweets"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/twitter-SMipfAjcHYniJX2.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] linear-bg">
          <AdsCompo
            title="Tumblr"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/tumbir-b1GZJnbyJOoduT3.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
      </div>
    </div>
  );
}
