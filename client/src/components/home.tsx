import * as React from "react";

import "../style/Home.css";
import meta from "../assets/meta.png";
import apple from "../assets/apple.webp";
import microsoft from "../assets/microsoft.png";
import spotify from "../assets/spotify.png";
import netflix from "../assets/netflix.png";
import tesla from "../assets/tesla.png";
import nike from "../assets/nike.jpeg";
import stocks from "../assets/stocks.png";
import vw from '../assets/vw.png'


export function Home() {
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
            <img src={stocks} />
          </div>
        </div>
      </div>
      <div className="secondRow">
        <div className="leftSide-info">
          <div className="row">
            <div className="stock-image">
              <img src={nike} />
            </div>
            <div className="stock-info">
              <p>Nike</p>
            </div>
          </div>
          <div className="row">
            <div className="stock-image">
              <img src={netflix} />
            </div>
            <div className="stock-info">
              <p>Netflix</p>
            </div>
          </div>
          <div className="row">
            <div className="stock-image">
              <img src={spotify} />
            </div>
            <div className="stock-info">
              <p>Tesla</p>
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
            <img src={nike} />
          </div>
          <div className="logo-container">
            <img src={spotify} />
          </div>
          <div className="logo-container">
            <img src={netflix} />
          </div>
          <div className="logo-container">
            <img src={vw} />
          </div>
          <div className="logo-container">
            <img src={apple} />
          </div>
          <div className="logo-container">
            <img src={tesla} />
          </div>
          <div className="logo-container">
            <img src={meta} />
          </div>
          <div className="logo-container">
            <img src={microsoft} />
          </div>
        </div>
      </div>
    </div>
  );
}
