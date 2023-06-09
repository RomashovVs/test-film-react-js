import "./Movies.css"
import {useEffect, useState} from "react";
import {MovieCard} from "./MovieCard";

function Movies(props) {
  const [moviesArr, setMoviesArr] = useState(props.movies);

  useEffect(()=> {
    setMoviesArr(props.movies)
  }, [moviesArr, props.movies])

  return (
    <div className='movies'>

      {moviesArr.length === 0 &&
        <div className="alert alert-primary mt-4 col-7 offset-2" role="alert">
          Фильмы по вашему запросу не найдены. Попробуйте другой запрос
        </div>
      }

      {moviesArr.length!==0 &&
        <div className="container">
          <ul className="cards">
            {moviesArr?.map(function(movie, idx){
              return (<MovieCard key={idx} movieData={movie}/>)
            })}
          </ul>
        </div>
      }

    </div>
  );
}
export { Movies };
