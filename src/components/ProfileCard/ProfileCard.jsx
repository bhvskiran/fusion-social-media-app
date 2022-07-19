import React from 'react';
import CoverImg from "../../img/cover.jpg"
import Profile from "../../img/profileImg.jpg"
import "./ProfileCard.css"

const ProfileCard = () => {
  return (
    <div className="profileCard">
        <div className="profileImages">
            <img src={CoverImg} alt="" />
            <img src={Profile} alt="" />
        </div>

        <div className="profileName">
            <span>Zendaya MJ</span>
            <span>Senior UI/UX Designer</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>299</span>
                    <span>Followers</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>23</span>
                    <span>Following</span>
                </div>
            </div>
            <hr />
            {/* 34: 26 */}
        </div>
    </div>
  )
}

export default ProfileCard