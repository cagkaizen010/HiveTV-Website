import React from "react"

function Lightbox(props)
{
    function closeMenu() {

        document.getElementsByClassName("lightbox")[props.id].style.display = "none";
    }

    return(
        <div className="lightbox"  id={props.hrefTag}>
            <div className="content container-fluid">
                <table>
                    <tbody>
                        <tr className="closeButton">
                            <td >
                                
                                <button onClick={closeMenu}>X</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={props.pic} alt="talent-png"></img>
                            
                                <h1 >{props.name}</h1>
                                <p>{props.desc}</p>
                                Twitter: <a href={props.twitterLink}>{props.twitterName}</a><br/>
                                Twitch: <a href={props.twitchLink}>{props.twitchName}</a><br/>
                                YouTube: <a href={props.youtubeLink}>{props.youtubeName}</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>    
    )
}

export default Lightbox