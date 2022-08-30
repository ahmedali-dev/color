import { Link } from "react-router-dom";
import bg1 from './svg/bg1.jpg';
import bg2 from './svg/bg2.jpg';
const Home = () => {
  return <>
    <div className="home container">
      <div className="row">
        {/* content */}
        <div className="col">
          <div className="content">
            <h1 className="header">
              Get a beautiful colors gnarator
            </h1>
            <p className='title'>get unlimited color and linear and can you create palette for you and share this palette no add for free</p>
            <Link className="link link-prim" to='/palettes'>Start Color Gnarator</Link>
            <Link className="link" to='/linear'>Start Linear Gnarator</Link>

          </div>
        </div>

        {/* images */}
        <div className="col">
          <div className="image">
            {/* <img className="bg-image cl1" src={bg1} /> */}
            <img className="bg-image cl2" src={bg2} />
          </div>
        </div>


      </div>
    </div>
  </>;
};

export default Home;
