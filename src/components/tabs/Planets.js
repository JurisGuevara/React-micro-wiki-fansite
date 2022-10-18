import "../../css/Tabs.css"
import { useState } from "react";
import useFetch from "../../customHooks/useFetch";

const Planets = () => {
  const {data: planets1, isPending: isPending1, error: error1} = useFetch('https://swapi.dev/api/planets')
  const planetImages = [
    'https://w0.peakpx.com/wallpaper/228/64/HD-wallpaper-widow-video-game-osef-tech-2-spaceship-shadowneo29-moon-ship-mmorpg-eve-online-caldari-thumbnail.jpg'
  ]

  return (
    <div className="tab-content">
      <h2>Planets</h2>
      <ul>
        <li className="card">
          <a href="">
            <h3>Ship name</h3>
            <img src={planetImages[0]} alt="" />
            <p>INT: 99</p>
            <p>INT: 99</p>
            <p>INT: 99</p>
            <p>INT: 99</p>
            <p>INT: 99</p>
            <p>INT: 99</p>
            <p>INT: 99</p>
            <p>INT: 99</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
 
export default Planets;