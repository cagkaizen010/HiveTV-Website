import React, {useState} from "react"
import Lightbox from "./Lightbox.jsx"


function Description(props) {
    const [isActive, setIsActive] = useState(false);

    function handleClick(event) {
        setIsActive(!isActive);

        isActive ? (document.getElementsByClassName("lightbox")[props.id].style.display = "inherit") : 
            (document.getElementsByClassName("lightbox")[props.id].style.display = "inherit");

    }

    return (
            <li id="cellie" className="honeycomb-cell">
                <a onClick={handleClick} href="#/" className="button">
                    <img className="honeycomb-cell_img" src={props.pic} alt="talent-img"></img>
                    <div className="honeycomb-cell_title">{props.cellName}</div>
                </a>

                <Lightbox 
                    id = {props.id}
                    isActive = {isActive}
                    hrefTag = {props.hrefTag}
                    pic = {props.pic}
                    cellName = {props.cellName}
                    name = {props.name}
                    desc = {props.desc}
                    twitterLink = {props.twitterLink}
                    twitchLink = {props.twitchLink}
                    youtubeLink = {props.youtubeLink}
                    twitterName= {props.twitterName}
                    twitchName = {props.twitchName}
                    youtubeName = {props.youtubeName}
                />
            </li>
            
    );          
}

export default Description;

