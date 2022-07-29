import React, { useState } from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {
  const [infoModalOpened, setInfoModalOpened] = useState(false);
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" onClick={() => setInfoModalOpened(true)} />
          {infoModalOpened && (
            <ProfileModal opened={infoModalOpened} onClose={() => setInfoModalOpened(false)} />
          )}
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Hyderabad</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Enlume Technologies</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
