import React, { useState } from "react";
import './components.css';
import myImage from '../assets/earth.png'
import internalImage from '../assets/earthInternal.png'
import surfaceImage from '../assets/earth-surface.png'
import { Link } from "react-router-dom";

function Earth () {

  const originalPlanetinfo = {
    name: "Earth",
    image: myImage,
    information: 'Earth is the third planet from the Sun, known for its ability to support life. It has a breathable atmosphere, primarily composed of nitrogen and oxygen, which makes it unique in the solar system. Earth is covered with vast oceans and landmasses that support a wide range of ecosystems. The planet\'s moderate temperatures, presence of water, and suitable atmospheric conditions make it ideal for diverse life forms. Earth also has one natural satellite, the Moon, which influences tides and stabilizes its rotation.',
    internalStructure: 'Earth\'s internal structure consists of three main layers: the crust, mantle, and core. The crust is the thin outer layer, where we live, and is made up of solid rock. Below it lies the mantle, a thick layer of semi-solid rock that flows slowly over time. At the center is the core, composed of an outer liquid layer of iron and nickel and a solid inner core. The movement of the liquid core generates Earth\'s magnetic field.',
    surfaceGeology: 'Earth\'s surface is made up of continents and oceans, with around 71% covered by water. It has diverse landscapes, including mountains, plains, deserts, and forests. The outer layer, called the crust, is divided into tectonic plates that move over time, causing earthquakes, volcanic eruptions, and mountain formation. These processes shape Earth\'s surface and contribute to its dynamic nature.'
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
                <div className="content">0.99 days</div>
              </div>
              <div className="box">
                <div className="title">revolution time</div>
                <div className="content">365.26 days</div>
              </div>
              <div className="box">
                <div className="title">radius</div>
                <div className="content">6,371 km</div>
              </div>
              <div className="box">
                <div className="title">average temp</div>
                <div className="content">16°C</div>
              </div>
          </div>
        </div>
    );
}

export default Earth;