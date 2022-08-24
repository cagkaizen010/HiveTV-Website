import React from "react"
import logoPNG from "./images/logo.jpg"
import twitterPNG from "./images/twitter.png"
import tiktokPNG from "./images/tiktok.png"
import instagramPNG from "./images/instagram.png"
import mailPNG from "./images/mail.png"

function Header() {
    return (
        <div className="col-md-12 col-lg-6 col-sm-3 header-element">
            
            <div className="content">
                <div className="logo-div"><img src={logoPNG} alt="logo"></img></div>
                <h1>HiveTV</h1>
                <div className="description"><p>Official Website for HiveTV Live.
                    Hive TV is a chaotic VTuber group that strives to expand on 
                    the spirit of Eastern VTuber culture by pushing through boundaries 
                    with creative and unorthodox content. We are currently based in
                    the Philippines, and aim to expand to different countries such as
                    Singapore, Indonesia, and ultimately Japan.</p></div>
                <div className="socials">
                    <a href="https://www.twitter.com">
                        <img src={twitterPNG} alt="twitter"></img>
                    </a>
                    <a href="https://www.tiktok.com/@hivetvlive?lang=en">
                        <img src={tiktokPNG} alt="TikTok"></img>
                    </a>
                    <a href="https://www.instagram.com">
                        <img src={instagramPNG} alt="instagram"></img>
                    </a>
                    <a href="mailto:media@hivetv.org">
                        <img src={mailPNG} alt="mail"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header