import style from "./Movies.module.css";
import data from "./Data/sample.json";
import Movie from "./Movie";
import { useEffect, useState } from "react";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [lists, setList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const Items = data.entries;
    let x = 0;
    const filteredItems = [];

    for (let i of Items) {
      if (i.releaseYear >= 2010 && x < 21 && i.programType === "movie") {
        filteredItems.push(i);
        x++;
      }
    }
    const nameAssendingSeries = filteredItems.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });

    setTimeout(() => {
      console.log(nameAssendingSeries);
      setList(nameAssendingSeries);
      setIsLoading(false);
    }, 1000);
  }, []);

  const htmlCode = (
    <div className={style.main_box}>
      {lists.map((item, idx) => (
        <Movie
          title={item.title}
          key={idx}
          url={item.images["Poster Art"].url}
        />
      ))}
    </div>
  );

  return (
    <>
      {isLoading && <p className={style.ptag}>Loading...!</p>}
      {!isLoading && htmlCode}
    </>
  );
}

export default Movies;
