import "../../css/Tabs.css"
import { useState } from "react";
import useFetch from "../../customHooks/useFetch";
import Pagination from "../Pagination";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

const Species = () => {
  const [url, setUrl] = useState('https://swapi.dev/api/species/?page=1')
  const {data, error} = useFetch(url)
  const firstPage = 'https://swapi.dev/api/species/?page=1'
  const lastPage = 'https://swapi.dev/api/species/?page=4'

  const imagesPage1 = [
    'https://www.starwars-holonet.com/holonet/images/e/ef/14925/perso_es01_1.jpg',
    'https://i.pinimg.com/736x/e5/0f/35/e50f359e42eea17afd2ef8c0bda509bb--art-google-robot.jpg',
    'https://pm1.narvii.com/6109/ee32d46a65416b65eb368106d7b3123e424648e7_hq.jpg',
    'https://i.pinimg.com/originals/82/61/77/8261771c21fc3a292ff5704527d30838.jpg',
    'https://i.pinimg.com/736x/5a/2b/0e/5a2b0ecb395f594042dddc6365eecce4.jpg',
    'https://i0.wp.com/andyarttv.com/wp-content/uploads/2020/01/yoda-species.jpg?resize=735%2C285&ssl=1',
    'https://i.pinimg.com/736x/38/05/a2/3805a26fc3885271f08a21742228a18f.jpg',
    'https://www.syfy.com/sites/syfy/files/styles/amp_featured_image/public/2019/04/mv5bmje4nzg0nzq3n15bml5banbnxkftztcwmdgzmty2mw-1._v1_sy1000_cr0014881000_al_.jpg?h=30d84fe0',
    'https://lumiere-a.akamaihd.net/v1/images/databank_ewok_01_169_747db03a.jpeg?region=0%2C49%2C1560%2C780',
    'https://i.pinimg.com/originals/0e/ec/cd/0eeccd6c72964a938267e3b5470e344b.jpg'
  ]

  const imagesPage2 = [
    'https://i.pinimg.com/736x/e3/b4/47/e3b4475ec0d2a648d4044217105a7273--war-machine-the-phantom.jpg',
    'https://i.pinimg.com/736x/c2/92/11/c2921134eadf9fa7a1a26bb9d057e872--strong-legs-the-planets.jpg',
    'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/10/Star-Wars-Toydarians.jpg',
    'https://lumiere-a.akamaihd.net/v1/images/databank_dug_01_169_a36b6959.jpeg?region=0%2C0%2C1560%2C878&width=960',
    'https://i.pinimg.com/originals/6a/41/0c/6a410c6c7d5bb1b83674ec009e686eaf.png',
    'https://i.pinimg.com/736x/a1/5e/0b/a15e0b9e7f92891adcab242160753074--starwars.jpg',
    'https://i.pinimg.com/736x/b1/43/89/b143895f75a22357b92268a6a0151c66.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a50fed6-5f37-42b3-aba5-b48c99a0aa08/d4v1v25-6e64d24a-e4cd-485b-ab3f-81f5edc5a425.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmE1MGZlZDYtNWYzNy00MmIzLWFiYTUtYjQ4Yzk5YTBhYTA4XC9kNHYxdjI1LTZlNjRkMjRhLWU0Y2QtNDg1Yi1hYjNmLTgxZjVlZGM1YTQyNS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.sINe_Du6kYLayelWZQ6dL66ewjGPWFPQydq2txK_BOk',
    'https://pbs.twimg.com/media/FQ43PqfUcAEQbQ-?format=jpg&name=360x360',
    'https://i.pinimg.com/550x/7d/4f/ff/7d4fff6527cebc3ffdb04e8b011b3e85.jpg'
  ]

  const imagesPage3 = [
    'https://i.pinimg.com/736x/90/26/bb/9026bb22cb9a1e659f8e1cca43a6b6e9--star-wars-jedi-star-wars-art.jpg',
    'https://64.media.tumblr.com/c971bc9c8e4f833925504ecf64b30c24/tumblr_p9i1zbtIwJ1vxvhxno1_r1_1280.png',
    'https://i.pinimg.com/originals/ec/18/26/ec1826b750a5fb46b6a3fb833a9c785f.jpg',
    'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/02/Darth-Malgus.jpg',
    'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/yarael-poof-.jpg',
    'https://i.pinimg.com/736x/d5/8b/dc/d58bdcda066780673f812011963f1970.jpg',
    'https://i.pinimg.com/originals/f7/ea/c1/f7eac1236c8746ff2404ea493e726a43.jpg',
    'https://filmgoblin.com/wp-content/uploads/2018/01/geonosian-Geonosis-1024x433.jpg',
    'https://i.pinimg.com/736x/6a/96/f6/6a96f688f0ad8e811d45322814605624--clone-wars-starwars.jpg',
    'https://i.pinimg.com/564x/b8/71/f9/b871f92fb63310cdc2efc660b84c5808.jpg'
  ]

  const imagesPage4 = [
    'https://i.pinimg.com/originals/3b/11/81/3b1181e4e1c37fc6ac1d32e4fa4e1556.jpg',
    'https://y.yarn.co/59a5c5d4-65e9-4baf-96d6-b0fd990827f3_screenshot.jpg',
    'https://i.pinimg.com/originals/3a/7b/32/3a7b326f2e1567671c070ea38554420b.jpg',
    'https://lumiere-a.akamaihd.net/v1/images/clu-lesser_ce89b8aa.jpeg?region=40%2C0%2C1479%2C832&width=960',
    'https://i.pinimg.com/originals/5e/f2/0b/5ef20bada25fe07558352b0ad098190a.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlD1oRBKA7bSXT9BW43m5twijaciR7E0cGIc4x2znjHf5_hjmptn1eLOWOy-o2V681NY&usqp=CAU',
    'https://lumiere-a.akamaihd.net/v1/images/databank_pauan_01_169_7fbc02c1.jpeg?region=417%2C19%2C1143%2C572'
  ]

  const setImagePage = () => {
    switch (url) {
      case 'https://swapi.dev/api/species/?page=1' :
        return imagesPage1
      case 'https://swapi.dev/api/species/?page=2' :
        return imagesPage2
      case 'https://swapi.dev/api/species/?page=3' :
        return imagesPage3
      case 'https://swapi.dev/api/species/?page=4' :
        return imagesPage4
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
          <h2>Species</h2>
          <ul>
            {data.results.map((item, i) => (
              <li className="card" key={item.name} onClick={() => dispatch(openModal({modalName: item.name, modalImage: setImagePage()[i]}))} >
                <h3>{item.name}</h3>
                <img src={setImagePage()[i]} alt="" />
                <p><span className="text-stat">Classification:</span> {item.classification}</p>
                <p><span className="text-stat">Designation:</span> {item.designation}</p>
                <p><span className="text-stat">Average Height:</span> {item.average_height}</p>
                <p><span className="text-stat">Skin Colors:</span> {item.skin_colors}</p>
                <p><span className="text-stat">Hair Colors:</span> {item.hair_colors}</p>
                <p><span className="text-stat">Eye Colors:</span> {item.eye_colors}</p>
                <p><span className="text-stat">Average Lifespan:</span> {item.average_lifespan}</p>
                <p><span className="text-stat">Languages:</span> {item.language}</p>
              </li>
            ))}
          </ul>
          <Pagination data={data} setUrl={setUrl} firstPage={firstPage} lastPage={lastPage} />
        </>
      }
    </div>
  );
}
 
export default Species;