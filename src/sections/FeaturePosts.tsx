import React from "react";
import Post from "@/components/Post";

const FeaturePosts: React.FC = () => {
  const posts = [
    { image: "assets/post-1.png" },
    { image: "assets/post-2.png" },
    { image: "assets/post-3.png" },
  ];

  return (
    <div className="features-posts-main ">
      <div className="d-flex flex-column align-items-center">
        <span className="post-heading">Practice Advice</span>
        <span className="post-txt">Featured Posts</span>
      </div>
      <div className="posts-list-div">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FeaturePosts;
