import "../../css/Tabs.css"
import { useState } from "react";
import useFetch from "../../customHooks/useFetch";
import Pagination from "../Pagination";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

const Vehicles = () => {
  const [url, setUrl] = useState('https://swapi.dev/api/vehicles/?page=1')
  const {data, error} = useFetch(url)
  const firstPage = 'https://swapi.dev/api/vehicles/?page=1'
  const lastPage = 'https://swapi.dev/api/vehicles/?page=4'

  const imagesPage1 = [
    'https://i.pinimg.com/736x/ca/86/31/ca86310726331de56753d707c2b65ab6--star-wars-vehicles-sci-fi-art.jpg',
    'https://i.pinimg.com/originals/b4/dc/ae/b4dcaef4fe880c55b01c0cfbc150a2bc.png',
    'https://i.pinimg.com/originals/40/b5/34/40b5341c40a096388138bfe43b6daa81.jpg',
    'https://i.pinimg.com/736x/dd/f2/ad/ddf2adfd653e26b785d4f2555af0bd18--star-wars-sith-star-trek.jpg',
    'https://i.pinimg.com/736x/2e/f2/9a/2ef29a9de5b89c54d508552c1bebb35d--star-wars-rebels-star-trek.jpg',
    'https://i.pinimg.com/736x/b0/9f/ca/b09fca3db584efa69db96e451cf872a0.jpg',
    'https://i.pinimg.com/736x/43/a4/26/43a426dd870cca2a458c960a8fa8e081.jpg',
    'https://i.pinimg.com/736x/da/89/cc/da89ccc12532482e9caaa2360906664a--star-wars-vehicles-star-wars-fan-art.jpg',
    'https://swrpggm.com/wp-content/uploads/2021/10/CloudCar_FE.png',
    'https://i.pinimg.com/736x/d4/d6/16/d4d6166347cbcac52b49a40752608ca4.jpg'
  ]

  const imagesPage2 = [
    'https://i.pinimg.com/736x/1a/43/db/1a43db27f2d46b9b6f0ad5de281ea186--art-and-illustration-scrap.jpg',
    'https://cdnb.artstation.com/p/assets/images/images/040/337/743/large/dustin-jaeger-img-0398.jpg?1628559371',
    'https://i.pinimg.com/736x/88/00/df/8800df0298727ef1d1fbba4d31ed4972--star-wars-vehicles-starwars.jpg',
    'https://i.pinimg.com/736x/9d/b8/df/9db8df72fab1abb2cde2fa98d1005af9--war-machine-starwars.jpg',
    'https://i.pinimg.com/originals/d2/3a/e5/d23ae52273fb61938bb712f2ec6d2527.png',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d313138-65c7-4b7d-9d13-14195affde2d/dec2d60-91c38ce3-0da1-4c10-acdc-fb9d115c056c.jpg/v1/fill/w_1280,h_1067,q_75,strp/star_wars_battlefront_2_armored_assault_tank_by_optimushunter29_dec2d60-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcLzZkMzEzMTM4LTY1YzctNGI3ZC05ZDEzLTE0MTk1YWZmZGUyZFwvZGVjMmQ2MC05MWMzOGNlMy0wZGExLTRjMTAtYWNkYy1mYjlkMTE1YzA1NmMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VnymMhaaIWF3Y_OVgm4mBR-ync2PMHogdrP2J5lOnII',
    'https://i.pinimg.com/736x/f9/ff/ea/f9ffea3c284b5791e139c649b17bfe08--staps-war-machine.jpg',
    'https://i.pinimg.com/originals/3b/85/6b/3b856b079e095b1d77920961ce85852f.jpg',
    'https://swrpggm.com/wp-content/uploads/2021/03/Bongo_FE.png',
    'https://mykombini.com//img/cms/04-2018/img_shf_sithspeeder_11.jpg'
  ]

  const imagesPage3 = [
    'https://i.pinimg.com/originals/99/27/d9/9927d96044025b75e26cf9713bdd7b74.jpg',
    'https://i.pinimg.com/736x/04/db/9b/04db9bbf8478530553d7a2ae50d279ed--starwars-tv.jpg',
    'https://i.pinimg.com/736x/42/42/10/42421082bcb4f650e606a929f7f09c16.jpg',
    'https://i.pinimg.com/originals/af/b7/ca/afb7ca4feebcf50f69ceb7190fb78bb6.jpg',
    'https://i.pinimg.com/originals/b0/09/6c/b0096ca333a8ed697c39a5d90e14d304.jpg',
    'https://i.pinimg.com/736x/76/ac/2f/76ac2f54eea5faa35016fbcdd0982b5c.jpg',
    'https://i.pinimg.com/originals/97/52/f9/9752f992b932276d69e748b795320ffc.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84d44311-4aa5-472d-b391-42b113229ca0/ddda0hk-6421730c-8109-4ff3-b9cf-a076e9e477c0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZDQ0MzExLTRhYTUtNDcyZC1iMzkxLTQyYjExMzIyOWNhMFwvZGRkYTBoay02NDIxNzMwYy04MTA5LTRmZjMtYjljZi1hMDc2ZTllNDc3YzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fMsqmA33W05YFPn4QtApQcLAz6LnR5FiaYFqv1mho5k',
    'https://i.pinimg.com/736x/a3/a3/6a/a3a36a36b0b21120a0cca9643da2382d--star-wars-ships-starwars.jpg',
    'https://i.pinimg.com/736x/ad/fb/e9/adfbe96fb3d6b376464e520ae0cb7a18.jpg'
  ]

  const imagesPage4 = [
    'https://cdna.artstation.com/p/assets/covers/images/011/088/004/large/marine-anglade-miniature.jpg?1527784796',
    'https://i.pinimg.com/600x315/6b/34/cf/6b34cf284172ba631905b5b93544e3cb.jpg',
    'https://i.pinimg.com/474x/84/8e/0a/848e0a139ef471cfb3bce84ff49cbe29--war-machine-scifi.jpg',
    'https://starwarsblog.starwars.com/wp-content/uploads/2016/10/EP3_ART_244-1.jpg',
    'https://i.pinimg.com/originals/bf/61/fd/bf61fd0d52aa99d718482bee4a3e50d8.jpg',
    'https://i.pinimg.com/originals/89/52/5c/89525c94011f94245d224533e7908743.jpg',
    'https://i.pinimg.com/originals/c9/44/6a/c9446a8eb01c9cc2bed8bbc82302826c.jpg',
    'https://i.pinimg.com/originals/b0/bc/23/b0bc239fe0558058d421f40411392374.jpg',
    'https://cdnb.artstation.com/p/assets/images/images/027/011/585/large/isaak-anderson-at-rt-1.jpg?1590349974'
  ]

  const setImagePage = () => {
    switch (url) {
      case 'https://swapi.dev/api/vehicles/?page=1' :
        return imagesPage1
      case 'https://swapi.dev/api/vehicles/?page=2' :
        return imagesPage2
      case 'https://swapi.dev/api/vehicles/?page=3' :
        return imagesPage3
      case 'https://swapi.dev/api/vehicles/?page=4' :
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
          <h2>Vehicles</h2>
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
                <p><span className="text-stat">Vehicle Class:</span> {item.vehicle_class}</p>
              </li>
            ))}
          </ul>
          <Pagination data={data} setUrl={setUrl} firstPage={firstPage} lastPage={lastPage} />
        </>
      }
    </div>
  );
}
 
export default Vehicles;