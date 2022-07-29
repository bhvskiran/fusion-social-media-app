import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../assets/img/home.png";
import Noti from "../../assets/img/noti.png";
import Comment from "../../assets/img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  const [sharemodelOpened, setShareModalOpened] = useState(false);
  return (
    <div className="rightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard />

      <button
        className="button r-button"
        onClick={() => setShareModalOpened(true)}
      >
        Share
      </button>
      {sharemodelOpened && (
        <ShareModal
          opened={sharemodelOpened}
          onClose={() => setShareModalOpened(false)}
        />
      )}
    </div>
  );
};

export default RightSide;
