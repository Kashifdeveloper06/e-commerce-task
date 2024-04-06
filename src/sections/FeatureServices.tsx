import React from "react";
import Image from "next/image";
const FeatureServices: React.FC = () => {
  return (
    <div className="features-products-main">
      <div className="d-flex flex-column align-items-center">
        <span className="feature-heading">Featured Services</span>
        <span className="bestseller-txt">THE BEST SERVICES</span>
        <span className="desc-txt-feature">
          Problems trying to resolve the conflict between
        </span>
      </div>
      <div className="services-div-main">
        <div className="d-flex align-items-center flex-column">
          <Image
            alt="poster"
            width={72}
            height={72}
            unoptimized
            src={"assets/book.png"}
          />
          <span className="service-title">Easy Wins</span>
          <span className="service-details">
            Get your best looking smile now!
          </span>
        </div>
        <div className="d-flex align-items-center flex-column service-div">
          <Image
            alt="poster"
            width={72}
            height={72}
            unoptimized
            src={"assets/page.png"}
          />
          <span className="service-title">Concrete</span>
          <span className="service-details">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </span>
        </div>
        <div className="d-flex align-items-center flex-column service-div">
          <Image
            alt="poster"
            width={60}
            height={36}
            unoptimized
            src={"assets/graph.png"}
          />
          <span className="service-title">Hack Growth</span>
          <span className="service-details">
            Overcame any hurdle or any other problem.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureServices;
