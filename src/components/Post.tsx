import React from "react";
import Image from "next/image";

interface PostProps {
  post: {
    image: string;
  };
}
const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post-main">
      <div className="d-flex flex-column align-items-center">
        <Image
          alt="poster"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          unoptimized
          src={post.image}
        />
        <div className="post-details">
          <div>
            <span style={{ color: "#8EC2F2" }} className="post-tag">
              Google
            </span>
            <span className="post-tag ms-3">Trending</span>
            <span className="post-tag ms-3">New</span>
          </div>
          <div className="d-flex flex-column">
            <span className="post-title">
              Loudest à la Madison #1 (integral)
            </span>
            <span className="post-desc">
              We focus on ergonomics and meeting you where you work. Its only a
              keystroke away.
            </span>
            <div className="d-flex justify-content-between post-attrs">
              <div>
                <Image
                  alt="poster"
                  width={16}
                  height={16}
                  unoptimized
                  src={"assets/timer.png"}
                />
                <span className="post-attr-txt ms-2">22 April 2023</span>
              </div>

              <div>
                <Image
                  alt="poster"
                  width={16}
                  height={15}
                  unoptimized
                  src={"assets/chart.png"}
                />
                <span className="post-attr-txt ms-2">22 Comments</span>
              </div>
            </div>
            <div style={{ marginTop: "25px" }}>
              <span className="post-learn-more">Learn More </span>
              <Image
                alt="poster"
                width={9}
                height={16}
                unoptimized
                src={"assets/arrow.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
