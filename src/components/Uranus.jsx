import React, { useState } from "react";
import './components.css';
import myImage from '../assets/planet-uranus.svg';
import internalImage from '../assets/planet-uranus-internal.svg';
import surfaceImage from '../assets/geology-uranus.png';
import { Link } from "react-router-dom";

function Uranus () {

  const originalPlanetinfo = {
    name: "Uranus",
    image: myImage,
    information: 'Uranus is the seventh planet from the Sun and is an ice giant, composed mainly of hydrogen, helium, and ices like water, ammonia, and methane. It has a blue-green color due to methane in its atmosphere, which absorbs red light and reflects blue light. Uranus is unique because it rotates on its side, with its axis tilted about 98 degrees.',
    internalStructure: 'Uranus has a rocky core surrounded by a thick mantle made of water, ammonia, and methane ices. The outer layer is primarily composed of hydrogen and helium. Uranus’ internal heat is lower than expected, suggesting limited geothermal activity, and it does not generate as much heat as Neptune, despite similar composition. Its magnetic field is also tilted relative to its axis, which is unusual for a planet.',
    surfaceGeology: 'Like other gas and ice giants, Uranus has no solid surface. Its atmosphere consists mostly of hydrogen, helium, and methane. The planet has a faint ring system and some large, circular cloud formations, but its surface is mostly calm compared to other gas giants. Uranus experiences extreme seasonal changes because of its extreme axial tilt.'
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
                <div className="content">17.2 hours</div>
              </div>
              <div className="box">
                <div className="title">revolution time</div>
                <div className="content">84 years</div>
              </div>
              <div className="box">
                <div className="title">radius</div>
                <div className="content">25,362 km</div>
              </div>
              <div className="box">
                <div className="title">average temp</div>
                <div className="content">-195°C</div>
              </div>
          </div>
        </div>
    );
}

export default Uranus;