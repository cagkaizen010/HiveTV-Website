import classNames from 'classnames';
import '../styles/Lightbox.css';

const Lightbox = ({
  isActive,
  pic,
  name,
  desc,
  twitterLink,
  twitterName,
  twitchLink,
  twitchName,
  youtubeLink,
  youtubeName,
  onClose,
}) => (
  <div className={classNames('lightbox', isActive && 'shown')}>
    <div className="content container-fluid">
      <table>
        <tbody>
          <tr className="closeButton">
            <td>
              <button onClick={onClose} type="button">
                X
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={pic} alt="talent-png" />
              <h1>{name}</h1>
              <p>{desc}</p>
              Twitter: <a href={twitterLink}>{twitterName}</a>
              <br />
              Twitch: <a href={twitchLink}>{twitchName}</a>
              <br />
              YouTube: <a href={youtubeLink}>{youtubeName}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
export default Lightbox;
