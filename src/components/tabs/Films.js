import "../../css/Tabs.css"
import useFetch from "../../customHooks/useFetch";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

const Films = () => {
  const {data, error} = useFetch('https://swapi.dev/api/films')

  const imagesPage1 = [
    'https://i.pinimg.com/736x/56/43/ca/5643caa3d0eb82cbd26f0974da8ea848.jpg',
    'https://i.pinimg.com/originals/ed/06/d1/ed06d1e9dd0562dc8e978ef500c50b91.jpg',
    'https://i.pinimg.com/736x/c9/9d/89/c99d89b6f8bc4eba930508cedc5f12c5.jpg',
    'https://i.pinimg.com/736x/cd/3e/3c/cd3e3c71d317a6dabd10a99ed4e562b5.jpg',
    'https://i.pinimg.com/originals/8d/d5/56/8dd556f0e49d1fb9eb80184b48e6cf2b.jpg',
    'https://i.pinimg.com/originals/fa/52/88/fa528871aec880987f5288040aee211b.jpg'
  ]

  const dispatch = useDispatch()

  return (
    <div className="tab-content">
      {error && <div className="error">{error}</div>}
      {data &&
        <>
          <h2>Films</h2>
          <ul>
            {data.results.map((item, i) => (
              <li className="card" key={item.title} onClick={() => dispatch(openModal({modalImage: imagesPage1[i]}))} >
                <h3>{item.title}</h3>
                <img className="vertical" src={imagesPage1[i]} alt="" />
                <p><span className="text-stat">Release Date:</span> {item.release_date}</p>
                <p><span className="text-stat"></span> {item.opening_crawl}</p>
                <p><span className="text-stat">Director:</span> {item.director}</p>
                <p><span className="text-stat">Producer</span> {item.producer}</p>
              </li>
            ))}
          </ul>
        </>
      }
    </div>
  );
}
 
export default Films;