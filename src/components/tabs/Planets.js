import "../../css/Tabs.css"
import { useState } from "react";
import useFetch from "../../customHooks/useFetch";
import Pagination from "../Pagination";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

const Planets = () => {
  const [url, setUrl] = useState('https://swapi.dev/api/planets/?page=1')
  const {data, error} = useFetch(url)
  const firstPage = 'https://swapi.dev/api/planets/?page=1'
  const lastPage = 'https://swapi.dev/api/planets/?page=6'

  const imagesPage1 = [
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

  const imagesPage2 = [
    'https://media.moddb.com/images/mods/1/25/24054/AloViewer_2020-05-24_20-20-52-960.png',
    'https://lumiere-a.akamaihd.net/v1/images/utapau-bio-1_1241ece6.jpeg?region=0%2C0%2C1280%2C720&width=960',
    'https://phantom-marca.unidadeditorial.es/a94f46da80e4752105daa01d3133af47/resize/1320/f/jpg/assets/multimedia/imagenes/2022/06/04/16543187798029.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d163xeb-fd6a3f29-256d-4651-acf2-53eb563657cc.jpg/v1/fill/w_894,h_894,q_70,strp/kashyyyk_by_shigimicu_d163xeb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAwMCIsInBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE2M3hlYi1mZDZhM2YyOS0yNTZkLTQ2NTEtYWNmMi01M2ViNTYzNjU3Y2MuanBnIiwid2lkdGgiOiI8PTIwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.PjO-3Bv_EcVd8eSw7bhnhOIogUcCb71T6DXtW9Jr7x0',
    'https://comicvine.gamespot.com/a/uploads/square_small/11/114183/7038656-garmillas_2199.png',
    'https://comicvine.gamespot.com/a/uploads/scale_small/0/9116/244075-98113-tatooine.jpg',
    'https://cdnb.artstation.com/p/assets/covers/images/032/467/871/large/shiny-man-shiny-man-felucia-icon-black.jpg?1606523775',
    'https://pm1.narvii.com/6705/08423fc06ade9f29624f232a0e9c4ffed9221d06_hq.jpg',
    'https://64.media.tumblr.com/b8c57f3d3b435e670cc16a3b61070a4b/33bb892fad7fa72a-d2/s1280x1920/9093e6e8400628e40984ec43eb38a26a2f316b65.jpg',
    'https://qph.cf2.quoracdn.net/main-qimg-cca6401da044683273d781c9d9cf6b40-lq'
  ]

  const imagesPage3 = [
    'https://i.pinimg.com/736x/7e/e2/9b/7ee29ba5211d99b65022b7040d2629f8.jpg',
    'https://cdnb.artstation.com/p/assets/images/images/006/189/823/large/yuval-halevy-corellia-3.jpg?1496688979',
    'https://i.pinimg.com/originals/ff/d3/8c/ffd38ca98fa4348fc237ffb974127367.png',
    'https://i.pinimg.com/736x/ce/c9/26/cec926db558b250cf9e8529b71e43b8a.jpg',
    'https://i.pinimg.com/originals/63/e4/98/63e498869816241be4245e9cb9fcfab6.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f86d7d0d-5ad9-4297-8c5f-9e302c8b749a/df6jgs8-18a4748f-ea38-46b3-bff2-85c8ff0c1dc9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NmQ3ZDBkLTVhZDktNDI5Ny04YzVmLTllMzAyYzhiNzQ5YVwvZGY2amdzOC0xOGE0NzQ4Zi1lYTM4LTQ2YjMtYmZmMi04NWM4ZmYwYzFkYzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EwRq84cJPtU4knoLsaLiq5FVRoDAxmvhUuEhvhePV8I',
    'https://i.pinimg.com/564x/56/b7/4a/56b74a6caa090c3f84dad17e167f9d57--star-wars-planets-pirates.jpg',
    'https://fandomwire.com/wp-content/uploads/2021/04/star-wars-unknown-regions-6.jpg',
    'http://pm1.narvii.com/7615/6d27d12797de117cc626b2d0994ab5fd0000811cr1-2048-1431v2_uhq.jpg',
    'https://i.pinimg.com/originals/bc/c1/82/bcc1821dd6991836a5f7134678016889.jpg'
  ]

  const imagesPage4 = [
    'https://pm1.narvii.com/6635/4bfcf8b3de47242b0d2b609e605d3d6eb95bc798_hq.jpg',
    'http://ayay.co.uk/backgrounds/star_wars/locations/planet-chandrila.jpg',
    'https://overmental.com/wp-content/uploads/2015/04/Sullust_FoC.jpg',
    'https://i.ytimg.com/vi/8-kvYsYsxGU/hqdefault.jpg',
    'https://i.pinimg.com/originals/ab/dd/9f/abdd9fed6bb63ded876215b0e8d9ab6e.jpg',
    'http://pm1.narvii.com/5885/751d4d8fb50343678f8cc3fd823899521d9f597d_00.jpg',
    'https://i.pinimg.com/originals/b7/c0/54/b7c054b31da3af549dadccf456979286.png',
    'https://i.kym-cdn.com/photos/images/newsfeed/000/780/560/2e2.png',
    'https://media.moddb.com/cache/images/mods/1/26/25589/thumb_620x2000/2021-09-22_22-25-49.gif',
    'http://www.theforce.net/timetales/tt1-1/malastare.jpg'
  ]

  const imagesPage5 = [
    'https://images3.imgbox.com/1f/28/CwtSdFth_o.jpg',
    'https://i.imgur.com/AEfKfg8.jpeg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c2a96d7-c8e0-4faf-917e-ad619df1e4dc/d97itss-22874705-ad59-4301-99e6-c897e540b264.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljMmE5NmQ3LWM4ZTAtNGZhZi05MTdlLWFkNjE5ZGYxZTRkY1wvZDk3aXRzcy0yMjg3NDcwNS1hZDU5LTQzMDEtOTllNi1jODk3ZTU0MGIyNjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gI8IVWehpmtBzPdGuh4fBMfeQuI_ADi31GBQGIWjJVA',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a414d4e6-8ea2-4b04-95e1-319e81b4bb4a/dzqbz4-2029deed-9634-4721-93d5-a9ab691674f4.jpg/v1/fill/w_800,h_619,q_75,strp/glee_anselm_by_ulario_dzqbz4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE5IiwicGF0aCI6IlwvZlwvYTQxNGQ0ZTYtOGVhMi00YjA0LTk1ZTEtMzE5ZTgxYjRiYjRhXC9kenFiejQtMjAyOWRlZWQtOTYzNC00NzIxLTkzZDUtYTlhYjY5MTY3NGY0LmpwZyIsIndpZHRoIjoiPD04MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Fs4MXbc3S879WmvfJ7oN140oimxECpkuOpTCr0SJi30',
    'http://pm1.narvii.com/6470/a423b239d39b46dd223fbbcc6c975146e014362d_00.jpg',
    'https://pbs.twimg.com/media/FMeIrphWYAcbn9k.jpg',
    'https://i.pinimg.com/736x/cf/2c/ad/cf2cadcf1d861397b2efe7b2a366671b--third-star-wars-planets.jpg',
    'https://external-preview.redd.it/NTBj0k24kEmlEJCwBKbi5Bhkdr0IIvNRezd-WrasirY.jpg?width=640&crop=smart&auto=webp&s=e961f90a1fed3da9c3cc331b57479ea66bae3c5e',
    'https://i.pinimg.com/736x/e0/25/0e/e0250e9f142d8900a4b5149bd21ed640.jpg',
    'https://media.nouvelobs.com/ext/uri/sreferentiel.nouvelobs.com/file/rue89/eaca358c272682beab5970c5ede33720.jpg'
  ]

  const imagesPage6 = [
    'http://pm1.narvii.com/7459/c30704ccc572eda90fd630e78baef021eed06926r1-340-340v2_00.jpg',
    'https://pm1.narvii.com/7387/ea65433e8562d7786c62712ed37e29d0d56d7d8er4-641-321_00.jpg',
    'https://www.bobafettfanclub.com/multimedia/galleries/albums/userpics/10001/concord-dawn-0-1659583113.jpeg',
    'https://exoplanets.nasa.gov/system/resources/detail_files/1080_K2-3.jpg',
    'https://pm1.narvii.com/7961/8f10bf4681843034bbcddf75b8e8ac1d6d6ae585r1-800-800v2_hq.jpg',
    'https://lumiere-a.akamaihd.net/v1/images/skako-minor-main_10443887.jpeg?region=191%2C1%2C1089%2C544',
    'https://i.pinimg.com/736x/a7/94/2c/a7942c130debd83190f9184bd2d94ad8--fandom-star-wars.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/128dfd4c-ca5d-4678-895d-1851969fea7e/d2jnbdt-20674a51-d822-430a-bd4e-dd646b0671bb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyOGRmZDRjLWNhNWQtNDY3OC04OTVkLTE4NTE5NjlmZWE3ZVwvZDJqbmJkdC0yMDY3NGE1MS1kODIyLTQzMGEtYmQ0ZS1kZDY0NmIwNjcxYmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.O1XDhqhdvsLC14XQKkU3vSZCo12egeJxM2zgIfI7n6g',
    'https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/0/05/Kalee.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf647a71-7b90-4b94-9bc7-0c4e8ba2ff1f/ddyg33m-1ee35f81-a1e8-40ad-a5f3-b3d4a4f758a7.jpg/v1/fill/w_1024,h_607,q_75,strp/star_wars___umbara_by_tashamille_ddyg33m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA3IiwicGF0aCI6IlwvZlwvYmY2NDdhNzEtN2I5MC00Yjk0LTliYzctMGM0ZThiYTJmZjFmXC9kZHlnMzNtLTFlZTM1ZjgxLWExZTgtNDBhZC1hNWYzLWIzZDRhNGY3NThhNy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.l6U_UO_pJ84K0dbWv2j2XG27CLkZ5UBrAjugoHyF9VI'
  ]

  const setImagePage = () => {
    switch (url) {
      case 'https://swapi.dev/api/planets/?page=1' :
        return imagesPage1
      case 'https://swapi.dev/api/planets/?page=2' :
        return imagesPage2
      case 'https://swapi.dev/api/planets/?page=3' :
        return imagesPage3
      case 'https://swapi.dev/api/planets/?page=4' :
        return imagesPage4
      case 'https://swapi.dev/api/planets/?page=5' :
        return imagesPage5
      case 'https://swapi.dev/api/planets/?page=6' :
        return imagesPage6
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
          <h2>Planets</h2>
          <ul>
            {data.results.map((planet, i) => (
              <li className="card" key={planet.name} onClick={() => dispatch(openModal({modalName: planet.name, modalImage: setImagePage()[i]}))} >
                <h3>{planet.name}</h3>
                <img src={setImagePage()[i]} alt="" />
                <p><span className="text-stat">Rotation Period:</span> {planet.rotation_period}</p>
                <p><span className="text-stat">Orbital Period:</span> {addCommas(planet.orbital_period)}</p>
                <p><span className="text-stat">Diameter:</span> {addCommas(planet.diameter)}</p>
                <p><span className="text-stat">Climate:</span> {planet.climate}</p>
                <p><span className="text-stat">Gravity:</span> {planet.gravity}</p>
                <p><span className="text-stat">Terrain:</span> {planet.terrain}</p>
                <p><span className="text-stat">Surface Water:</span> {planet.surface_water}</p>
                <p><span className="text-stat">Population:</span> {formatLargeNumbers(planet.population)}</p>
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