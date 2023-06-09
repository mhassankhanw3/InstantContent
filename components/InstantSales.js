import React from "react";
import InstantHeadings from "./InstantHeadings";
import AdsCompo from "./AdsCompo";

export default function InstantSales() {
  return (
    <div className="sm:mt-[150px] mt-[50px] sm:px-[0px] px-[0px] ">
      <div>
        <InstantHeadings
          title="Instant Content helps create Sales Copy"
          desc="Cut writing times by 80% so you can focus more on the projects you love."
        />
      </div>
      <div className="sm:mt-[70px] sm:px-[10px] md:px-[10px] px-[0px] mt-[20px] grid sm:grid-cols-2 md:grid-cols-3 md:gap-4 grid-cols-none gap-4 sm:w-[1120px] w-[100%] justify-center place-items-center max-w-[100%] mx-auto ">
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] sm:px-[0px] md:px-[0px] px-[0px] sm:mx-0 mx-auto linear-bg">
          <AdsCompo
            title="Sales Pitch"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/product-rUezdWN2NeQDyX5.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] sm:px-[0px] md:px-[0px] px-[0px] sm:mx-0 mx-auto linear-bg">
          <AdsCompo
            title="Email Writer"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/email-nbvJyPymFqvXrNd.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] sm:px-[0px] md:px-[0px] px-[0px] sm:mx-0 mx-auto linear-bg">
          <AdsCompo
            title="Business Proposal"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/busines-VrlxtmtlRRAjl03.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] sm:px-[0px] md:px-[0px] px-[0px] sm:mx-0 mx-auto linear-bg">
          <AdsCompo
            title="Letter Writer"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/letter-(1)-fOT3reFQyFB2mHp.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
      </div>
      {/* <div className="flex flex-row items-center sm:justify-between justify-center w-[100%] sm:w-[60%]">
        
        <div></div>
      </div> */}
    </div>
  );
}
