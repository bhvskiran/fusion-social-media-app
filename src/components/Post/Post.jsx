import React from "react";
import "./Post.css";
import Comment from "../../assets/img/comment.png";
import Share from "../../assets/img/share.png";
import Heart from "../../assets/img/like.png";
import NotLike from "../../assets/img/notlike.png";

const Post = (props) => {
  const { data } = props;
  return (
    <div className="post">
      <img src={data.img} alt="" />

      <div className="postReactions">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      {data.likes && (
        <span style={{ color: "var(--gray)", fontSize: 12 }}>
          {data.likes} likes
        </span>
      )}

      <div className="details">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
