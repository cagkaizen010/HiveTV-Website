import Lightbox from './Lightbox';

import { useState } from 'react';

import '../styles/HoneyCombCell.css';

const HoneyCombCell = ({
  id,
  pic,
  cellName,
  name,
  desc,
  twitterLink,
  twitterName,
  twitchLink,
  twitchName,
  youtubeLink,
  youtubeName,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);

  return (
    <li id={`cellie-${id}`} className="honeycomb-cell">
      <a onClick={handleClick} href="#/" className="button">
        <img className="honeycomb-cell_img" src={pic} alt="talent-img" />
        <div className="honeycomb-cell_title">{cellName}</div>
      </a>

      <Lightbox
        isActive={isActive}
        pic={pic}
        cellName={cellName}
        name={name}
        desc={desc}
        twitterLink={twitterLink}
        twitchLink={twitchLink}
        youtubeLink={youtubeLink}
        twitterName={twitterName}
        twitchName={twitchName}
        youtubeName={youtubeName}
        onClose={handleClick}
      />
    </li>
  );
};

export default HoneyCombCell;
