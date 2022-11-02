import "../../css/Tabs.css"
import { useState } from "react";
import useFetch from "../../customHooks/useFetch";
import Pagination from "../Pagination";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

const Spaceships = () => {
  const [url, setUrl] = useState('https://swapi.dev/api/starships/?page=1')
  const {data, error} = useFetch(url)
  const firstPage = 'https://swapi.dev/api/starships/?page=1'
  const lastPage = 'https://swapi.dev/api/starships/?page=4'

  const imagesPage1 = [
    'https://i.pinimg.com/originals/c8/e1/03/c8e10396f9f375a8ea8995d4a69a74ee.jpg',
    'https://i.pinimg.com/736x/17/79/87/17798715ac95bd4b0474a374cfc0da4a--star-wars--star-wars-ships.jpg',
    'https://i.pinimg.com/736x/24/70/f8/2470f869235dd1af298bab2fcbe1098e.jpg',
    'https://i.pinimg.com/736x/2b/ff/d6/2bffd6ae28b35802ca683e90f481fe46.jpg',
    'https://i.pinimg.com/736x/43/f5/79/43f579fca15cccf8aecca2d6c66ccbeb--star-wars-ships-millenium.jpg',
    'https://i.pinimg.com/originals/be/70/db/be70db68099caa65464ef93e6ad46699.jpg',
    'https://i.pinimg.com/736x/7c/a7/4e/7ca74e492086ef55fc34f527f7145f6c.jpg',
    'https://i.pinimg.com/originals/40/57/67/4057671a44cbeb983ae2b412c639a670.jpg',
    'https://i.pinimg.com/736x/28/1e/86/281e86d068d13491bd1fc49e272a0a16.jpg',
    'https://i.pinimg.com/736x/47/35/0d/47350d2df4b30488a689b012ab665afe.jpg'
  ]

  const imagesPage2 = [
    'https://i.pinimg.com/originals/be/2a/02/be2a02753f489c501304b09831f3efc9.jpg',
    'https://i.pinimg.com/originals/b2/a8/61/b2a86148a063194dbb956de60c24d5ff.jpg',
    'https://i.pinimg.com/originals/9b/9e/00/9b9e00580376ca5a95eab3c0125aba27.png',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b626d224-cb34-4c3e-88dc-9ffda8ff07be/dclpbm2-08c388d1-e80c-45fa-8f6c-0d3ad0d394ea.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I2MjZkMjI0LWNiMzQtNGMzZS04OGRjLTlmZmRhOGZmMDdiZVwvZGNscGJtMi0wOGMzODhkMS1lODBjLTQ1ZmEtOGY2Yy0wZDNhZDBkMzk0ZWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.L5nRMARZPW0IXBbEjHpB9BYDIp8cyKmL9FfhylhWMrc',
    'https://i.pinimg.com/736x/23/c1/21/23c12173479b8a32121d994e7320fde0.jpg',
    'https://i.pinimg.com/736x/b6/b0/95/b6b095b4496aac45bde3e22179193057--freedom-fighters-star-wars-.jpg',
    'https://i.pinimg.com/736x/e8/4a/e7/e84ae7ab807a1ececaed97cd5e87f713--star-wars.jpg',
    'https://i.pinimg.com/736x/b1/42/5d/b1425d3811977822e9ebe698fb65f59d--portfolio-artworks.jpg',
    'https://i.pinimg.com/736x/70/87/5b/70875bf98a7473962b6f0dfded4d085f.jpg',
    'https://i.pinimg.com/736x/ca/f6/1f/caf61f0728c99dc5a9147961bda57b58.jpg'
  ]

  const imagesPage3 = [
    'https://i.pinimg.com/736x/a1/0d/7e/a10d7e17e0fc8f020be65bded1371c1a.jpg',
    'https://i.pinimg.com/originals/21/26/f1/2126f14b0679d3e051e73933a5eea579.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0lGPJAdnwmkebcl1_lrIz8fb8e8_1-kQw_JlXbDm0UIG3kWF3o3bhi0Kil2txPGAzr8&usqp=CAU',
    'https://i.pinimg.com/736x/3a/de/77/3ade776637e6044368913d77ecac21df--star-wars-starfighter-star-wars-jedi.jpg',
    'https://i.pinimg.com/originals/4d/bb/58/4dbb5864109239ef47d11e01b40a5336.jpg',
    'https://i.pinimg.com/originals/df/9c/5d/df9c5d352a52df96eea8644d330cb923.jpg',
    'https://i.pinimg.com/736x/5a/b2/99/5ab299c8de899baa54139284b34403cf.jpg',
    'https://i.pinimg.com/736x/2f/a1/2d/2fa12d607af47a04bd538a8182133630--war-machine-clone-wars.jpg',
    'https://cdnb.artstation.com/p/assets/images/images/011/213/673/large/tyler-harris-vadertransport.jpg?1528395146',
    'https://i.pinimg.com/originals/7e/b5/41/7eb541decdf076bd361cef01d2130b0e.png'
  ]

  const imagesPage4 = [
    'https://i.pinimg.com/originals/72/fd/48/72fd4838f785bb4061837a708a56930d.jpg',
    'https://i.pinimg.com/originals/1f/d5/dc/1fd5dc6a33df24ded91da1c6dbd246f7.jpg',
    'https://i.pinimg.com/originals/e5/db/e1/e5dbe1dae02b7d7b1294d72d72600d7b.jpg',
    'https://static.planetminecraft.com/files/resource_media/screenshot/1330/BanesBorrowedMunificent-CoD_6022961.jpg',
    'https://rpggamer.org/shippics/belbullab22.jpg',
    'https://i.pinimg.com/originals/96/97/ee/9697eecfbd0768776c29d0195e5197e7.jpg'
  ]

  const setImagePage = () => {
    switch (url) {
      case 'https://swapi.dev/api/starships/?page=1' :
        return imagesPage1
      case 'https://swapi.dev/api/starships/?page=2' :
        return imagesPage2
      case 'https://swapi.dev/api/starships/?page=3' :
        return imagesPage3
      case 'https://swapi.dev/api/starships/?page=4' :
        return imagesPage4
      default:
        break
    }
  }

  const addCommas = (strDigits) => {
    return strDigits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const formatLargeNumbers = (value) => {
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

  const dispatch = useDispatch()

  return (
    <div className="tab-content">
      {error && <div className="error">{error}</div>}
      {data &&
        <>
          <h2>Spaceships</h2>
          <ul>
            {data.results.map((item, i) => (
              <li className="card" key={item.name} onClick={() => dispatch(openModal({modalName: item.name, modalImage: setImagePage()[i]}))} >
                <h3>{item.name}</h3>
                <img src={setImagePage()[i]} alt="" />
                <p><span className="text-stat">Model:</span> {item.model}</p>
                <p><span className="text-stat">Manufacturer:</span> {item.manufacturer}</p>
                <p><span className="text-stat">Cost:</span> {formatLargeNumbers(item.cost_in_credits)}</p>
                <p><span className="text-stat">Length:</span> {addCommas(item.length)}</p>
                <p><span className="text-stat">Max Atmospheric Speed:</span> {addCommas(item.max_atmosphering_speed)}</p>
                <p><span className="text-stat">Crew:</span> {addCommas(item.crew)}</p>
                <p><span className="text-stat">Passengers:</span> {addCommas(item.passengers)}</p>
                <p><span className="text-stat">Cargo Capacity:</span> {formatLargeNumbers(item.cargo_capacity)}</p>
                <p><span className="text-stat">Consumables:</span> {item.consumables}</p>
                <p><span className="text-stat">Hyperdrive Rating:</span> {item.hyperdrive_rating}</p>
                <p><span className="text-stat">MGLT:</span> {item.MGLT}</p>
                <p><span className="text-stat">Starship Class:</span> {item.starship_class}</p>
              </li>
            ))}
          </ul>
          <Pagination data={data} setUrl={setUrl} firstPage={firstPage} lastPage={lastPage} />
        </>
      }
    </div>
  );
}
 
export default Spaceships;