import "../../css/Tabs.css"
import { useState } from "react";
import useFetch from "../../customHooks/useFetch";
import Pagination from "../Pagination";

const Planets = () => {
  const [url, setUrl] = useState('https://swapi.dev/api/planets/?page=1')
  const {data, error} = useFetch(url)
  const firstPage = 'https://swapi.dev/api/planets/?page=1'
  const lastPage = 'https://swapi.dev/api/planets/?page=6'

  const planetImages = [
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4',
    'https://i.imgur.com/pmKfFI6.png',
    'https://pm1.narvii.com/6065/4ef3bc9f584b0d9f9da1d2fcd866e7fbd5872319_hq.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/010b592d-59bc-484c-a16f-b571ecf5927b/d2oz3bd-a2e18691-501a-4b3b-ae65-f72eda097b1f.jpg/v1/fill/w_900,h_563,q_75,strp/planet_hoth_by_oscarmiranda90_d2oz3bd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvMDEwYjU5MmQtNTliYy00ODRjLWExNmYtYjU3MWVjZjU5MjdiXC9kMm96M2JkLWEyZTE4NjkxLTUwMWEtNGIzYi1hZTY1LWY3MmVkYTA5N2IxZi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pvNdm9c8OaVOrXikwDOtZ1ZLfXT2CZ9tLO89WlxHbBE',
    'https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/6/68/Dagobah_2.jpg',
    'http://vignette3.wikia.nocookie.net/starwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20151017214807',
    'https://i.pinimg.com/originals/fe/19/a4/fe19a46c3521ed8c36f777e65d3235dc.jpg',
    'https://cdnb.artstation.com/p/assets/images/images/033/256/989/4k/ian-vicknair-beauty-small.jpg?1608948664',
    'https://media.sketchfab.com/models/802db255f49e4e1e8d398213ecc371ae/thumbnails/ab550786805b4dffbd3ac4f10d797597/76c95ddd0af54c9d97db252df8804cce.jpeg',
    'https://i.pinimg.com/originals/13/e9/73/13e973ac6299ea33ae3b433d88da8f2e.png'
  ]

  const addCommas = (strDigits) => {
    return strDigits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const formatPopulation = (value) => {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
  }

  return (
    <div className="tab-content">
      {error && <div>{error}</div>}
      {data &&
        <>
          <h2>Planets</h2>
          <ul>
            {data.results.map((planet, i) => (
              <li className="card" key={planet.name}>
                <h3>{planet.name}</h3>
                <img src={planetImages[i]} alt="" />
                <p><span className="text-stat">Rotation Period:</span> {planet.rotation_period}</p>
                <p><span className="text-stat">Orbital Period:</span> {addCommas(planet.orbital_period)}</p>
                <p><span className="text-stat">Diameter:</span> {addCommas(planet.diameter)}</p>
                <p><span className="text-stat">Climate:</span> {planet.climate}</p>
                <p><span className="text-stat">Gravity:</span> {planet.gravity}</p>
                <p><span className="text-stat">Terrain:</span> {planet.terrain}</p>
                <p><span className="text-stat">Surface Water:</span> {planet.surface_water}</p>
                <p><span className="text-stat">Population:</span> {formatPopulation(planet.population)}</p>
              </li>
            ))}
          </ul>
          <Pagination data={data} setUrl={setUrl} firstPage={firstPage} lastPage={lastPage} />
        </>
      }
    </div>
  );
}
 
export default Planets;