import React from "react";
import Image from "next/image";

const Hometop: React.FC = () => {
  const mobileBanners = [
    "assets/banner-1-mobile.png",
    "assets/banner-2-mobile.png",
    "assets/banner-3-mobile.png",
    "assets/banner-4-mobile.png",
  ];
  return (
    <div>
      <div className="poster-homepage">
        <div>
          {" "}
          <Image
            alt="poster"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            unoptimized
            src={"assets/image-1.png"}
          />
        </div>
        <div className="d-flex flex-column ms-3">
          <Image
            alt="poster"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            unoptimized
            src={"assets/image-2.png"}
          />
          <div className="d-flex mt-3">
            <Image
              alt="poster"
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              unoptimized
              src={"assets/image-3.png"}
            />{" "}
            <Image
              alt="poster"
              className="ms-3"
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              unoptimized
              src={"assets/image-4.png"}
            />
          </div>
        </div>
      </div>
      <div className="poster-homepage-mobile">
        {mobileBanners.map((banner, index) => (
          <Image
            key={index}
            alt="banner"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            unoptimized
            src={banner}
          />
        ))}
      </div>
    </div>
  );
};

export default Hometop;
