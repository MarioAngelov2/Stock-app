import * as React from "react";

import "../style/Home.css";
import image1 from "../assets/image1.png";
import coffee from "../assets/coffee.png";
import phone from "../assets/mobile.png";
import laptop from "../assets/laptop.png";

import logo1 from "../assets/hdfc.png";
import logo2 from "../assets/infosys.png";
import logo3 from "../assets/kotak.png";
import logo4 from "../assets/maruti.png";
import logo5 from "../assets/reliance.png";
import logo6 from "../assets/tcs.png";
import logo7 from "../assets/whirpool.png";
import logo8 from "../assets/wipro.png";

interface Props {
  price: number;
}

export function Home({ price }: Props) {
  return (
    <div className="home-container">
      <div className="firstRow">
        <div className="leftSide-info">
          <h3>Analyze stocks as easily as buying a coffee.</h3>
          <p>
            Little Invest Town transforms complicated financial statements of
            companies into an imaginary character's personal finances. It's
            easier to analyse personal finances than that of businesses. No Sign
            Up Required.
          </p>
          <div className="button">
            <button>View Stock Prices</button>
          </div>
        </div>
        <div className="rightSide-info">
          <div className="hero-img">
            <img src={image1} />
          </div>
        </div>
      </div>
      <div className="secondRow">
        <div className="leftSide-info">
          <div className="row">
            <div className="stock-image">
              <img src={coffee} />
            </div>
            <div className="stock-info">
              <p>Coffee $200</p>
            </div>
          </div>
          <div className="row">
            <div className="stock-image">
              <img src={phone} />
            </div>
            <div className="stock-info">
              <p>iPhone $699</p>
            </div>
          </div>
          <div className="row">
            <div className="stock-image">
              <img src={laptop} />
            </div>
            <div className="stock-info">
              <p>Laptop $999</p>
            </div>
          </div>
        </div>
        <div className="rightSide-info">
          <div className="bullet-info">
            <h3>How does LIT work?</h3>
            <p>LIT scales down company profile to a personal level</p>
            <p>
              Each company is represented by a character with similar finances
            </p>
            <p>
              LIT flattens the learning curve to understand company portfolios
              by converting complex financial jargon into simple everyday words
            </p>
            <p>
              LIT simplifies decision making while buying shares for people with
              a non-finance background
            </p>
            <p>Add stocks you like to your personal plan (saved locally)</p>
          </div>
        </div>
      </div>
      <div className="thirdRow">
        <h4>Analyze the top companies of the stock market</h4>
        <div className="companies-logos">
          <div className="logo-container">
            <img src={logo1} />
          </div>
          <div className="logo-container">
            <img src={logo2} />
          </div>
          <div className="logo-container">
            <img src={logo3} />
          </div>
          <div className="logo-container">
            <img src={logo4} />
          </div>
          <div className="logo-container">
            <img src={logo5} />
          </div>
          <div className="logo-container">
            <img src={logo6} />
          </div>
          <div className="logo-container">
            <img src={logo7} />
          </div>
          <div className="logo-container">
            <img src={logo8} />
          </div>
        </div>
      </div>
    </div>
  );
}
