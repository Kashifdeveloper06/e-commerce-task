import React from "react";
import Image from "next/image";
import Rating from "@mui/material/Rating";
const FeatureTestimonials: React.FC = () => {
  const [value, setValue] = React.useState<number | null>(4);
  const reviews = [
    "assets/review-1.png",
    "assets/review-2.png",
    "assets/review-3.png",
    "assets/review-4.png",
    "assets/review-5.png",
    "assets/review-6.png",
    "assets/review-7.png",
    "assets/review-8.png",
    "assets/review-9.png",
  ];
  return (
    <div className="review-main">
      <div className="review-front">
        <span className="review-title">What they say about us</span>
        <Image
          alt="poster"
          width={90}
          height={90}
          unoptimized
          style={{ marginTop: "58px" }}
          src={"assets/review-user.png"}
        />

        <Rating
          style={{ marginTop: "20px" }}
          name="read-only"
          value={value}
          readOnly
        />
        <span className="review-desc">
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </span>
        <span className="review-desc-sec">Regina Miles</span>
        <span className="review-desc-third">Designer</span>
      </div>
      <div>
        <div className="reviews-list">
          {reviews.map((review, index) => (
            <Image
              key={index}
              className="review-image"
              alt="review"
              width={142}
              height={142}
              unoptimized
              src={review}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureTestimonials;
