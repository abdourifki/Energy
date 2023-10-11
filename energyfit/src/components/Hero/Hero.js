import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import heroimageBack from '../../assets/heroImageBack.png'
import heroPic from '../../assets/heroPic.png'
import calories from '../../assets/calories.png'
import heart from '../../assets/heart.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/*the best ad*/}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/*hero heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              perspiciatis provident obcaecati ad? Quis deleniti consequatur
              aperiam voluptatibus cum pariatur ex quia ab optio nostrum quod,
              veritatis magnam reiciendis ullam.
            </span>
          </div>
        </div>
        {/*figures*/}
        <div className="figures">
          <div>
            <span>+40</span>
            <span>Expert coatchs</span>
          </div>
          <div>
            <span>+100</span>
            <span>Membres joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>
        {/*hero-button*/}
        <div className="hero-button">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
            <img src={heart} alt="" />
            <span>Heart Rate</span>
            <span>100 bpm</span>
        </div>
        {/*hero images*/}
        <img src={heroPic} alt="" className="heroPic"/>
        <img src={heroimageBack} alt="" className="hero-image"/>
        {/*calories*/}
        <div className="calories">
            <img src={calories} alt="" />
            <div>
            <span>Calories Burned</span><br></br>
            <span>220kcal</span>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Hero;
