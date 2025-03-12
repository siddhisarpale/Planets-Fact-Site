import React, { useState } from "react";
import './components.css';
import myImage from '../assets/venus.svg';
import internalImage from '../assets/planet-venus-internal.svg';
import surfaceImage from '../assets/geology-venus.png';
import { Link } from "react-router-dom";

function Venus () {

  const originalPlanetinfo = {
    name: "Venus",
    image: myImage,
    information: 'Venus is the second planet from the Sun and is often called Earth\'s "sister planet" due to its similar size and composition. It has a thick, toxic atmosphere primarily made of carbon dioxide, with clouds of sulfuric acid, leading to extreme surface temperatures, hotter than Mercury despite being farther from the Sun. Venus has no moons and rotates in the opposite direction to most planets, resulting in a day longer than its year. Its surface is marked by volcanic plains, impact craters, and vast mountain ranges.',
    internalStructure: 'Venus surface is primarily made up of volcanic plains, large mountains, and impact craters. The planet\’s crust is thick and consists of volcanic rock, with evidence of widespread volcanic activity, including large shield volcanoes. There are few large impact craters, indicating the surface is relatively young and constantly resurfaced. Venus has large tectonic structures, but there\’s no clear evidence of plate tectonics like on Earth. The planet\'s mantle is believed to be similar to Earth\'s, but the lack of plate movement causes heat to build up, contributing to the extreme surface temperatures.',
    surfaceGeology: 'Venus internal structure consists of three main layers: the crust, mantle, and core. The crust is thick and rocky, mainly composed of basaltic rock, and is believed to be around 10-20 km thick. Below the crust, the mantle is made of silicate materials and is likely similar to Earth\'s mantle, but without active plate tectonics. At the core, Venus is thought to have a nickel-iron core, possibly partially molten, but there\'s no strong evidence of a magnetic field, suggesting it may not be fully active like Earth\'s core.'
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
                <div className="content">243 days</div>
              </div>
              <div className="box">
                <div className="title">revolution time</div>
                <div className="content">224.7 days</div>
              </div>
              <div className="box">
                <div className="title">radius</div>
                <div className="content">6,051.8 km</div>
              </div>
              <div className="box">
                <div className="title">average temp</div>
                <div className="content">471°C</div>
              </div>
          </div>
        </div>
    );
}

export default Venus;