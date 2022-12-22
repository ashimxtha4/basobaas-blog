import Image from "next/image";
import React from "react";

const MarketNewsTypeMain = () => {
  return (
    <>
      <div className="marketNewsTypeMain">
        <div className="imageContainer d-flex flex-column justify-content-center align-items-center">
          <Image src="" alt="Blog Picture" width={345} height={180} />
        </div>
        <div className="blogContents"></div>
      </div>
    </>
  );
};

export default MarketNewsTypeMain;
