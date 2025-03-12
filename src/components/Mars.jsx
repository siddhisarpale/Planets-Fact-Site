import React, { useState } from "react";
import './components.css';
import myImage from '../assets/mars.png';
import internalImage from '../assets/planet-mars-internal.svg';
import surfaceImage from '../assets/geology-mars.png';
import { Link } from "react-router-dom";

function Mars () {

  const originalPlanetinfo = {
    name: "Mars",
    image: myImage,
    information: 'Mars is the fourth planet from the Sun and is known as the "Red Planet" due to its iron oxide-rich surface. It has a thin atmosphere mostly made of carbon dioxide, and its surface features include large volcanoes, deep valleys, and polar ice caps. Mars has the largest volcano in the solar system, Olympus Mons, and a canyon system, Valles Marineris. It has two small moons, Phobos and Deimos, and water ice has been found on its surface, hinting at past liquid water.',
    internalStructure: 'Mars has a core likely composed of iron, nickel, and sulfur, surrounded by a silicate mantle and crust. The core is partially molten, which may generate some magnetic fields. The mantle is less active than Earth\'s, contributing to Mars\'s geological inactivity.',
    surfaceGeology: 'Mars has a variety of surface features, including vast plains, massive volcanoes like Olympus Mons (the largest volcano in the solar system), and deep valleys like Valles Marineris. It also has polar ice caps and evidence of ancient riverbeds, suggesting liquid water once existed.'
  }

  const [planetInfo, setPlanetInfo] = useState(originalPlanetinfo)

  const handleButtonClick = (type) => {
   switch (type) {
    case 'overview': setPlanetInfo(originalPlanetinfo);
    break;
    case 'internal': setPlanetInfo({
      ...planetInfo,
      information: planetInfo.internalStructure,
      image: internalImage
    });
    break;
    case 'surface': setPlanetInfo({
      ...planetInfo,
      information: planetInfo.surfaceGeology,
      image: surfaceImage
    });
    break;
    default:
      break;
   } 
  }

    return (
        <div className="planet-content">

          <div className="main">
            <div className="image">
              <img src={planetInfo.image} alt="Mercury"></img>
            </div>

            <div className="info">
              <div className="planet-title">{planetInfo.name}</div>
              <div className="information">{planetInfo.information}</div>

              <div className="source">Source: <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipediaʔ</a></div>

              <div className="button"><Link className="btn btn-custom" onClick={() => handleButtonClick('overview')}>1. Overview</Link></div>
              <div className="button"><Link className="btn btn-custom" onClick={() => handleButtonClick('internal')}>2. Internal Structure</Link></div>
              <div className="button"><Link className="btn btn-custom" onClick={() => handleButtonClick('surface')} >3. Surface Geology</Link></div>
            </div>
          </div>

          <div className="footer">
              <div className="box">
                <div className="title">rotation time</div>
                <div className="content">1.01 days</div>
              </div>
              <div className="box">
                <div className="title">revolution time</div>
                <div className="content">1.88 years</div>
              </div>
              <div className="box">
                <div className="title">radius</div>
                <div className="content">3,389.5 km</div>
              </div>
              <div className="box">
                <div className="title">average temp</div>
                <div className="content">-28°C</div>
              </div>
          </div>
        </div>
    );
}

export default Mars;