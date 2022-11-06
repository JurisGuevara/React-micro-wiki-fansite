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
    'https://i.pinimg.com/736x/db/a6/a1/dba6a196220f2f6a4cbc17cfd4aec6ac.jpg',
    'https://i.pinimg.com/originals/13/bb/7d/13bb7d3b9533f99e71cc357b5cef6e40.jpg',
    'https://i.pinimg.com/474x/29/16/62/29166227119bf6376119c9d89c3d88c7--terence-stamp-star-wars-disney.jpg',
    'https://i.pinimg.com/736x/54/f5/45/54f545886b41311a07c6ab046e8344d0.jpg',
    'https://i.pinimg.com/originals/49/0f/c2/490fc2527acc54fa5ecb193cc25b6981.jpg',
    'https://i.pinimg.com/originals/26/eb/28/26eb282e9f786585e8eba1c82192baed.jpg',
    'https://i.pinimg.com/originals/f2/ed/a2/f2eda28291597c0fd06db49d6628059e.jpg',
    'https://i.pinimg.com/originals/2d/70/8f/2d708f343510011f554d2da0d84c2f72.jpg',
    'https://i.pinimg.com/originals/41/0f/51/410f51eb9297df6f6e9defc501afeda1.jpg',
    'https://i.pinimg.com/474x/fa/8a/2d/fa8a2d8bd8b71164c5d4214820bc2909--police-image.jpg'
  ]

  const imagesPage5 = [
    'https://i.pinimg.com/736x/b3/bf/4b/b3bf4b0d16aa6941a39ebe04bf973f7b--queen-amidala-padm%C3%A9-amidala.jpg',
    'https://i.pinimg.com/736x/74/ef/62/74ef6255585260ddfcc1488bd6d0d8d7.jpg',
    'https://i.pinimg.com/originals/47/7d/51/477d51544188f32402e73109b3510ad6.jpg',
    'https://cdn.shopify.com/s/files/1/0279/0739/1585/products/F3417_PROD_SW_BL_PROVIDENCE_0001_Online_2000SQ_grande.jpg?v=1639757226',
    'https://i.pinimg.com/originals/9b/45/b4/9b45b4091b7123d189cfe3bf53898ecf.jpg',
    'https://rpggamer.org/uploaded_images/RattsHS.jpg',
    'https://i.pinimg.com/originals/04/e7/a2/04e7a27ecec22fe1c0fffed7a22bb875.jpg',
    'https://i.pinimg.com/564x/f4/d4/e3/f4d4e3eb5e888aa1108ee2e112cdffa4.jpg',
    'https://i.pinimg.com/474x/10/d9/aa/10d9aa093da2a4d52b9a92c71cdf1e5a.jpg',
    'https://i.pinimg.com/originals/79/20/32/79203274bca96ed27c52530e855ccdb8.jpg'
  ]

  const imagesPage6 = [
    'https://i.pinimg.com/736x/c6/51/0c/c6510c60b7244d557966ba2e45a9d767.jpg',
    'https://i.pinimg.com/originals/e9/74/5d/e9745dbfb3d95d1094138a2dc07cd0de.jpg',
    'https://i.pinimg.com/originals/26/74/e4/2674e46463cf739af41439c426ad0d7c.jpg',
    'https://db4sgowjqfwig.cloudfront.net/images/5605108/Adi_Gallia.png',
    'https://i.pinimg.com/originals/e6/37/d3/e637d3e2bb0400ceac248cc8a5bdfc39.jpg',
    'https://i.pinimg.com/originals/41/55/1b/41551bad737ac712683caad4c828a940.jpg',
    'https://i.pinimg.com/736x/56/fd/eb/56fdeb4b59d549dc3bd3df0cb3bc01f2.jpg',
    'https://i.pinimg.com/originals/83/b0/d0/83b0d0ffdeb5ebf916954672f6751da6.jpg',
    'https://i.pinimg.com/474x/56/4c/75/564c757171c56d012ccf277e13fc84e1.jpg',
    'https://pbs.twimg.com/media/FTcntHGXwAEDwN0.jpg'
  ]

  const imagesPage7 = [
    'https://i.pinimg.com/550x/32/8b/92/328b92044486e11deddfb85fa7f52bf2.jpg',
    'https://i.pinimg.com/474x/55/20/62/552062e77eb74a3f3f7f2c1cb4fad751--war-machine-clone-wars.jpg',
    'https://i.pinimg.com/originals/bf/04/e3/bf04e3a00b07c248ea18d6a0e0583cf0.jpg',
    'https://i.pinimg.com/474x/4f/c7/6f/4fc76fea19eaeac7e5cbf700fb820dd3.jpg',
    'https://i.pinimg.com/originals/b3/ab/fd/b3abfd216b1c344116f996cc7e3b3fa4.jpg',
    'https://i.pinimg.com/originals/2f/8b/f6/2f8bf6bb744e5d1f0b1c87152722c2e2.jpg',
    'https://i.pinimg.com/736x/66/8e/ce/668ece69a71fa3358fe38d8836860278.jpg',
    'https://i.pinimg.com/736x/d8/57/b7/d857b7460ec7140849548b4443e5e85e.jpg',
    'https://i.pinimg.com/originals/bb/d7/44/bbd744db73d429e05c60d87643d1b6fe.jpg',
    'https://i.pinimg.com/736x/5b/81/20/5b8120170c7682e13a63194d9858cb95--dexter-star-wars-species.jpg'
  ]

  const imagesPage8 = [
    'https://i.pinimg.com/originals/24/6e/78/246e78e3d76d7c5bc153860a944217bf.jpg',
    'https://i.pinimg.com/originals/5f/13/25/5f13253baf2420ad1023d1774fbecb4d.jpg',
    'https://i.pinimg.com/originals/93/aa/1b/93aa1bc976083b04ae5ee932082498a3.jpg',
    'https://i.pinimg.com/originals/e7/f3/db/e7f3dbe295e37e3c87bf88b3002bc639.jpg',
    'https://i.pinimg.com/originals/01/d0/c6/01d0c6b1ebc30ecd8f448803a00fc2c0.jpg',
    'https://i.pinimg.com/originals/b1/6c/4f/b16c4f77674ec3fd1c702f3e62811c2e.jpg',
    'https://i.pinimg.com/originals/79/c4/e4/79c4e4ed78809790b55dcdd9aa1d82f1.jpg',
    'https://i.pinimg.com/originals/40/d4/70/40d470aff09ec66518ea482c6bc569a5.jpg',
    'https://i.pinimg.com/originals/27/5a/13/275a131bad944c9a86851bb9236d016e.jpg',
    'https://i.pinimg.com/originals/ea/d1/25/ead1250106b60318cf6276934e6b70a7.jpg'
  ]

  const imagesPage9 = [
    'https://i.pinimg.com/originals/6c/af/e9/6cafe9ede6a49b4f81c68585444824ad.jpg',
    'https://i.pinimg.com/474x/53/9e/65/539e652facea73504bfc1fd2812a8d94.jpg'
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