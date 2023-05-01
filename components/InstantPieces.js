import React from "react";
import InstantHeadings from "./InstantHeadings";
import AdsCompo from "./AdsCompo";

export default function InstantPieces() {
  return (
    <div className="sm:mt-[150px] mt-[50px] sm:px-[0px] px-0 max-w-full ">
      <div>
        <InstantHeadings
          title="Instant Content helps create Content Pieces"
          desc="Cut writing times by 80% so you can focus more on the projects you love."
        />
      </div>
      <div className="sm:mt-[70px] mt-[20px] max-w-[100%] sm:w-[1100px] w-[100%] grid sm:grid-cols-3 grid-cols-none gap-4 mx-auto ">
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] sm:mx-0 mx-auto linear-bg">
          <AdsCompo
            title="Paragraph"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/para-jTRl8mD8grv4yB8.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] sm:mx-0 mx-auto linear-bg">
          <AdsCompo
            title="Introduction"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/intro-cyKSJ4nGnYjCNKb.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] sm:mx-0 mx-auto linear-bg">
          <AdsCompo
            title="Product Description"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/product-rUezdWN2NeQDyX5.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        {/* </div> */}
        {/* <div className="sm:my-[0px] flex flex-wrap items-center justify-center max-w-[100%] w-[1200px] mx-auto"> */}
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] sm:mx-0 mx-auto linear-bg col-span-1">
          <AdsCompo
            title="Service Description"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/services-lTlUD5mgo3V6wZO.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] sm:mx-0 mx-auto linear-bg">
          <AdsCompo
            title="Blog Writer"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/blog-CYM0fNuuPorb5hk.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        {/* </div> */}
        {/* <div className="sm:my-[0px]  flex flex-wrap items-center justify-center sm:justify-start max-w-[100%] sm:w-[1000px] p-0 "> */}
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] sm:mx-0 mx-auto linear-bg">
          <AdsCompo
            title="Content Improver"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/content-0SxxXZ2ZjwRfvtR.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        <div className="max-w-full w-[358px] my-[5px] sm:my-[0px] sm:mx-0 mx-auto linear-bg">
          <AdsCompo
            title="Landing Page Copies"
            desc="Create catchy Facebook Ad copies."
            img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/lsnding-(2)-boi8TLN2EvyOcec.png"
            css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
