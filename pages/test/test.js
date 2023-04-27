import React from "react";
import Image from "next/image";
import twitter from "../../public/images/twitter.png";

export default function test() {
  return (
    <div>
      <Image src={twitter} />
    </div>
  );
}
