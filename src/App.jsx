import React from "react"
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Earth from "./components/Earth"
import Mercury from "./components/Mercury"
import Venus from "./components/Venus"
import Mars from "./components/Mars"
import Jupiter from "./components/Jupiter"
import Saturn from "./components/Saturn"
import Neptune from "./components/Neptune"
import Uranus from "./components/Uranus"

function App() {
  return (
      <BrowserRouter>
        <div className="body">
          <div className="nav">
              <div><Link to="/" className="mainTitle">THE PLANETS</Link></div>
              {/* <div className="planets">
                  <Link to="/mercury" className="planet-link">Mercury</Link>
                  <Link to="/venus" className="planet-link">Venus</Link>
                  <Link to="/earth" className="planet-link">Earth</Link>
                  <Link to="/mars" className="planet-link">Mars</Link>
                  <Link to="/jupiter" className="planet-link">Jupiter</Link>
                  <Link to="/saturn" className="planet-link">Saturn</Link>
                  <Link to="/uranus" className="planet-link">Uranus</Link>
                  <Link to="/neptune" className="planet-link">Neptune</Link>
              </div> */}

              <div className="planets">
                    <NavLink to="/mercury" className={({ isActive }) => isActive ? 'planet-link active-link' : 'planet-link'}>
                      Mercury
                    </NavLink>
                    <NavLink to="/venus" className={({ isActive }) => isActive ? 'planet-link active-link' : 'planet-link'}>
                      Venus
                    </NavLink>
                    <NavLink to="/earth" className={({ isActive }) => isActive ? 'planet-link active-link' : 'planet-link'}>
                      Earth
                    </NavLink>
                    <NavLink to="/mars" className={({ isActive }) => isActive ? 'planet-link active-link' : 'planet-link'}>
                      Mars
                    </NavLink>
                    <NavLink to="/jupiter" className={({ isActive }) => isActive ? 'planet-link active-link' : 'planet-link'}>
                      Jupiter
                    </NavLink>
                    <NavLink to="/saturn" className={({ isActive }) => isActive ? 'planet-link active-link' : 'planet-link'}>
                      Saturn
                    </NavLink>
                    <NavLink to="/uranus" className={({ isActive }) => isActive ? 'planet-link active-link' : 'planet-link'}>
                      Uranus
                    </NavLink>
                    <NavLink to="/neptune" className={({ isActive }) => isActive ? 'planet-link active-link' : 'planet-link'}>
                      Neptune
                    </NavLink>
              </div>
          </div>
          
          {/* <hr /> */}
        
          <Routes>
            <Route path="/earth" element={ <Earth/> }></Route>
            <Route path="/mercury" element={ <Mercury/> }></Route>
            <Route path="/venus" element={ <Venus/> }></Route>
            <Route path="/mars" element={ <Mars/> }></Route>
            <Route path="/jupiter" element={ <Jupiter/> }></Route>
            <Route path="/saturn" element={ <Saturn/> }></Route>
            <Route path="/uranus" element= { <Uranus/> }></Route>
            <Route path="/neptune" element={ <Neptune/> }></Route>
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
