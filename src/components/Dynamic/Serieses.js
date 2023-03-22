import style from "./Movies.module.css";
import data from "./Data/sample.json";
import Series from "./Series";
import { useEffect, useState } from "react";

function Serieses() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [lists, setList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const Items = data.entries;

    if(!Items){
        setError(true)
        console.log('fsf');
    }else{
        setError(false)
        console.log('false');
    }

    let x = 0;
    const filteredItems = [];
    for (let i of Items) {
      if (i.releaseYear >= 2010 && x < 21 && i.programType === "series") {
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

    const delay = setTimeout(() => {
      setList(nameAssendingSeries);
      setIsLoading(false);
    }, 1000);
    
    return ()=>  clearTimeout(delay);

  }, []);

  return (
    <>
      {!isLoading ? (
        <div className={style.main_box}>
          {lists.map((item, idx) => (
            <Series
              title={item.title}
              key={idx}
              url={item.images["Poster Art"].url}
            />
          ))}
        </div>
      ) : (
        <p className={style.ptag}>Loading...!</p>
      )}
      {isError && <p className={style.ptag}>SomeThing Went Wrong...!</p>}
    </>
  );
}

export default Serieses;
