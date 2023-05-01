import React from "react";
import InstantHeadings from "./InstantHeadings";
import PostCards from "./PostCards";

export default function UseCases() {
  return (
    <div className="px-[20px] sm:px-[0px] mt-[150px] ">
      <div>
        <InstantHeadings
          title="Use Cases"
          desc="Instant Content is an AI writer that lets you automatically generate high-quality content for various use cases."
        />
      </div>
      <div className="sm:flex flex-wrap sm:mt-[80px] mt-[50px] items-center justify-center max-w-[100%] gap-10 sm:w-[1100px] mx-auto ">
        <PostCards
          img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/copy-aiOnMs0prSPgfRd.png"
          title="Ad Copy"
          desc="Write creative and original advertisement copies for Facebook, Twitter, LinkedIn, and other social media channels."
        />
        <PostCards
          img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/post-MvSUTTGSVIfe3dW.png"
          title="Social Media Posts"
          desc="Write creative and original advertisement copies for Facebook, Twitter, LinkedIn, and other social media channels."
        />
        <PostCards
          img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/piece-wHeugERpofikZ4G.png"
          title="Content Pieces"
          desc="Write creative and original advertisement copies for Facebook, Twitter, LinkedIn, and other social media channels."
        />
        <PostCards
          img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/sales-d06PIu7eORNeqEx.png"
          title="Sales Copy"
          desc="Write creative and original advertisement copies for Facebook, Twitter, LinkedIn, and other social media channels."
        />
        <PostCards
          img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/optimized-ySP2uZkvWIfM0Ve.png"
          title="SEO-Optimized Content"
          desc="Write creative and original advertisement copies for Facebook, Twitter, LinkedIn, and other social media channels."
        />
        <PostCards
          img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/academics-6wH8vcp96yfZ965.png"
          title="Academics"
          desc="Write creative and original advertisement copies for Facebook, Twitter, LinkedIn, and other social media channels."
        />
      </div>
    </div>
  );
}
