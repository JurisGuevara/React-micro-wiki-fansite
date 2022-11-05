import "../../css/Tabs.css"
import { useState } from "react";
import useFetch from "../../customHooks/useFetch";
import Pagination from "../Pagination";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

const People = () => {
  const [url, setUrl] = useState('https://swapi.dev/api/people/?page=1')
  const {data, error} = useFetch(url)
  const firstPage = 'https://swapi.dev/api/people/?page=1'
  const lastPage = 'https://swapi.dev/api/people/?page=9'

  const imagesPage1 = [
    'https://i.pinimg.com/474x/88/fd/04/88fd046339cadd45a757e48bee4ca9f8.jpg',
    'https://i.pinimg.com/originals/ee/41/09/ee410933182119c3d0cd4f1fe088b027.jpg',
    'https://i.pinimg.com/736x/de/94/a4/de94a4d72e4ff2cf35aad78dfe7fc172--type-art-rd.jpg',
    'https://i.pinimg.com/564x/cb/25/3b/cb253b659b6a294f033db8e121cc5cad.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0723c1c8-d86b-435f-8717-33940768a089/d6e5q5q-56ce8fee-1391-4eb6-bad4-2c6717827937.jpg/v1/fill/w_1280,h_1648,q_75,strp/princess_leia_and_the_gold_bikini_by_kjh311_d6e5q5q-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY0OCIsInBhdGgiOiJcL2ZcLzA3MjNjMWM4LWQ4NmItNDM1Zi04NzE3LTMzOTQwNzY4YTA4OVwvZDZlNXE1cS01NmNlOGZlZS0xMzkxLTRlYjYtYmFkNC0yYzY3MTc4Mjc5MzcuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.bxjmb0ewRX-D0EIO4mUHOSWhsslc8Aod68Pt-0jaa9Q',
    'https://www.jedinews.com/wp-content/uploads/2022/05/Joel-Edgerton-Obi-Wan-Kenobi-May-22.jpg',
    'https://lumiere-a.akamaihd.net/v1/images/databank_shmiskywalkerlars_01_169_7449f0a8.jpeg?region=341%2C0%2C878%2C878',
    'https://i.pinimg.com/originals/90/d2/d3/90d2d34bf3e0ff5a6b1b21007adfc1d1.jpg',
    'https://i.insider.com/555219ca6bb3f7a502baac2c?width=700',
    'https://i.pinimg.com/736x/95/13/0a/95130a88e6d61f3968b3762b0f2f8e05.jpg'
  ]

  const imagesPage2 = [
    'https://i.pinimg.com/474x/ec/ea/7c/ecea7c3968e670461d10859f22dbc541.jpg',
    'https://i.pinimg.com/originals/16/20/58/162058c0a2bc304eed9a31b053c1ba69.jpg',
    'https://i.pinimg.com/736x/df/06/e0/df06e01b6cfa27a9da9a6264620f5424--vinyl-toys-star-wars-episodes.jpg',
    'https://i.pinimg.com/originals/d3/18/da/d318daa1327971fe01760dff156cbdc5.png',
    'https://i.pinimg.com/736x/7c/8e/6c/7c8e6c14d85ca3ebf38c83d5a7c83b4d--d-video-sketchbook-pages.jpg',
    'https://i.pinimg.com/736x/31/d6/7f/31d67fa3e8b464965fc1eba3f363c1a2.jpg',
    'https://i.pinimg.com/564x/10/f1/42/10f14254fb4d0986c9ccd2a633e94647--wedges-death-star.jpg',
    'https://i.pinimg.com/474x/15/8d/56/158d56c7162880190d3bc500b2ec5f64.jpg',
    'https://i.pinimg.com/474x/81/fa/5b/81fa5b0a5c32e332b3fdd61f057ddf34--star-wars-characters-star-wars-episodes.jpg',
    'https://i.pinimg.com/736x/bd/00/4f/bd004f230e4776aabb46464ff3b62871--emperor-posts.jpg'
  ]

  const imagesPage3 = [
    'https://i.pinimg.com/736x/d9/a7/24/d9a7240489ce3d036f22f469ee0d09a8--jango-fett-mandalore.jpg',
    'https://i.pinimg.com/originals/bb/ab/b5/bbabb506823a966e69e38c78e9f69f8d.jpg',
    'https://i.pinimg.com/originals/9b/6a/e5/9b6ae59322774420efc46f23439130eb.jpg',
    'https://i.pinimg.com/474x/09/dc/fb/09dcfb5fd9c4da916165095c032e917d--live-action-wedge.jpg',
    'https://i.pinimg.com/736x/1c/2f/99/1c2f99afdd433ec6f20481c827fb6f4e--report-wings.jpg',
    'https://i.pinimg.com/736x/b5/a6/59/b5a6598059530f15b9933dab522fabe6.jpg',
    'https://i.pinimg.com/736x/12/96/19/129619b874089fac9949e22201df0fa8.jpg',
    'https://i.pinimg.com/originals/d8/b6/a0/d8b6a04c04242d2a1244c4e4757f124c.jpg',
    'https://i.pinimg.com/originals/82/c4/c9/82c4c93bcc899b9272d7c3a51c2e8efa.jpg',
    'https://i.pinimg.com/originals/5a/63/f0/5a63f0dc1d6dc7209271bd0e0a8516ff.jpg'
  ]

  const imagesPage4 = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]

  const imagesPage5 = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]

  const imagesPage6 = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]

  const imagesPage7 = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]

  const imagesPage8 = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]

  const imagesPage9 = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]

  const setImagePage = () => {
    switch (url) {
      case 'https://swapi.dev/api/people/?page=1' :
        return imagesPage1
      case 'https://swapi.dev/api/people/?page=2' :
        return imagesPage2
      case 'https://swapi.dev/api/people/?page=3' :
        return imagesPage3
      case 'https://swapi.dev/api/people/?page=4' :
        return imagesPage4
      case 'https://swapi.dev/api/people/?page=5' :
        return imagesPage5
      case 'https://swapi.dev/api/people/?page=6' :
        return imagesPage6
      case 'https://swapi.dev/api/people/?page=7' :
        return imagesPage7
      case 'https://swapi.dev/api/people/?page=8' :
        return imagesPage8
      case 'https://swapi.dev/api/people/?page=9' :
        return imagesPage9
      default:
        break
    }
  }

  const dispatch = useDispatch()

  return (
    <div className="tab-content">
      {error && <div className="error">{error}</div>}
      {data &&
        <>
          <h2>People</h2>
          <ul>
            {data.results.map((item, i) => (
              <li className="card" key={item.name} onClick={() => dispatch(openModal({modalName: item.name, modalImage: setImagePage()[i]}))} >
                <h3>{item.name}</h3>
                <img className="vertical" src={setImagePage()[i]} alt="" />
                <p><span className="text-stat">Gender:</span> {item.gender}</p>
                <p><span className="text-stat">Height:</span> {item.height}</p>
                <p><span className="text-stat">Mass:</span> {item.mass}</p>
                <p><span className="text-stat">Hair Color:</span> {item.hair_color}</p>
                <p><span className="text-stat">Skin Color:</span> {item.skin_color}</p>
                <p><span className="text-stat">Eye Color:</span> {item.eye_color}</p>
                <p><span className="text-stat">Birth Year:</span> {item.birth_year}</p>
              </li>
            ))}
          </ul>
          <Pagination data={data} setUrl={setUrl} firstPage={firstPage} lastPage={lastPage} />
        </>
      }
    </div>
  );
}
 
export default People;