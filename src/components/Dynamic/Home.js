import style from "./Home.module.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
      <div className={style.main_box}>
        <div className={style.main}>
          <Link className={style.sub} to={'/series'}>
            <h2>Series</h2>
          </Link>
          <p>Popular Series</p>
        </div>
        <div className={style.main}>
          <Link className={style.sub} to={'/movies'}>
            <h2>Movies</h2>
          </Link>
          <p>Popular Movies</p>
        </div>
      </div>
  );
}

export default Home;
