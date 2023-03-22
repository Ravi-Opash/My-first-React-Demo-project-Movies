import style from "./Movies.module.css";
import { useState } from "react";

function Series(props) {
  const [imageLoadError, setImageLoadError] = useState(true);

  const fallbackImage =
    "https://previews.123rf.com/images/briang77/briang771602/briang77160200065/51883561-movie-film-reel.jpg";

  return (
    <div className={style.main}>
      <div className={style.sub}>
        <img
          src={props.url}
          alt=""
          onError={(e) => {
            if (imageLoadError) {
              setImageLoadError(false);
              e.target.src = fallbackImage;
            }
          }}
        />
      </div>
      <p>{props.title}</p>
    </div>
  );
}

export default Series;
