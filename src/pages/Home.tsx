import MetaData from './MetaData';
import { CgMouse } from 'react-icons/all';
import './home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <MetaData title="ETC Bawtry" />
      <div className="homepage">
        
        <h1>ETC Bawtry</h1>
        <h5>Shop Local, Feel Good</h5>
        <img
        src="etc.jpg"
        className="homepage_img">
        </img>
        <p>Gorgeous lifestyle destination store selling a large selection of unusual cards, gifts, fashion accessories, home decorations in the beautiful market town of bawtry and now ONLINE!</p>
        <Link to="/store">
          <span className="button">
            Browse Our Products
          </span>
        </Link>
      </div>
    </>
  );
};

export default Home;
