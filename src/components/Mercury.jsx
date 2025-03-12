import React, { useState } from "react";
import './components.css';
import myImage from '../assets/planet-mercury.svg'
import internalImage from '../assets/planet-mercury-internal.svg'
import surfaceImage from '../assets/planet-mercury-surface.png'
import { Link } from "react-router-dom";

function Mercury () {

  const originalPlanetinfo = {
    name: "Mercury",
    image: myImage,
    information: 'Mercury is the closest planet to the Sun and also the smallest in our solar system. Its proximity to the Sun causes extreme temperature variations, with daytime temperatures reaching around 430°C and nighttime plunging to -180°C, due to its lack of atmosphere. A year on Mercury lasts only 88 Earth days, but a single day takes 59 Earth days, making its rotation incredibly slow compared to its orbit. Interestingly, it has no moons and a weak magnetic field, which is about 1% of Earths. The surface of Mercury is heavily cratered, with features like the vast Caloris Basin.',
    internalStructure: 'Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planets density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth\'s density.',
    surfaceGeology: 'Mercury\'s surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars\'s or the Moon\'s.'
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
                <div className="content">58.6 days</div>
              </div>
              <div className="box">
                <div className="title">revolution time</div>
                <div className="content">87.97 days</div>
              </div>
              <div className="box">
                <div className="title">radius</div>
                <div className="content">2,439.7 km</div>
              </div>
              <div className="box">
                <div className="title">average temp</div>
                <div className="content">430°C</div>
              </div>
          </div>
        </div>
    );
}

export default Mercury;