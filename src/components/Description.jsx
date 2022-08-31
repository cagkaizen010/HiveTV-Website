import Lightbox from './Lightbox';

import { useState } from 'react';

const Description = ({
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

  function handleClick() {
    setIsActive(!isActive);

    if (isActive) {
      document.getElementsByClassName('lightbox')[id].style.display = 'inherit';
    } else {
      document.getElementsByClassName('lightbox')[id].style.display = 'inherit';
    }
  }

  return (
    <li id="cellie" className="honeycomb-cell">
      <a onClick={handleClick} href="#/" className="button">
        <img className="honeycomb-cell_img" src={pic} alt="talent-img" />
        <div className="honeycomb-cell_title">{cellName}</div>
      </a>

      <Lightbox
        id={id}
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
      />
    </li>
  );
};

export default Description;
