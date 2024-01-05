import React from "react";
import "./about.css";


function About() {
    return (
        <div class="card-1">
        <div class="card_img">
            <img className="img-center"src="https://images.pexels.com/photos/18978811/pexels-photo-18978811/free-photo-of-kinh-ram.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Như Vũ"></img>
        </div>
        <h2>Như Vũ</h2>
        <p>Fullstack Developer</p>
        <div class="card_social">
            <a href="https://www.facebook.com/login.php">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a id="tiktok" href="https://www.tiktok.com/">
                <i class="fa-brands fa-tiktok"></i>
            </a>
            <a id="youtobe" href="https://www.youtube.com/">
                <i class="fa-brands fa-youtube"></i>
            </a>
            <a id="github" href="https://github.com/">
                <i class="fa-brands fa-github"></i>
            </a>
        </div>
        <button className="btn-button">Contact me</button>
    </div>
    );
}

export default About;
