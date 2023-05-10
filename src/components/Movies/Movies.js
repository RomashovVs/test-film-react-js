import "./Movies.css"
import {useEffect, useState} from "react";
import {MovieCard} from "./MovieCard";

function Movies(props) {
  const [moviesArr, setMoviesArr] = useState(props.movies);

  useEffect(()=> {
    setMoviesArr(props.movies)
  }, [moviesArr, props.movies])

  return (
    <div className='movies container-fluid'>

      {/*{moviesArr.length!==1 &&*/}
        <div className="container">
          <ul className="cards">
            {moviesArr?.map(function(movie, idx){
              return (<MovieCard key={idx} movieData={movie}/>)
            })}
          </ul>
        </div>
      {/*}*/}

    </div>
  );
}
export { Movies };
