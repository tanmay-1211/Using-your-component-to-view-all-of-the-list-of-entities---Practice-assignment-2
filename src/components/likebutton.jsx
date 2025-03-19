import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        backgroundColor: liked ? "red" : "gray",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {liked ? "Unlike" : "Like"}
    </button>
  );
};

export default LikeButton;