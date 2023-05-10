import {useDispatch} from "react-redux";
import {setSelectMovie} from "../../store/MovieSlice";

function MovieCard(props) {

  const dispatch = useDispatch();

  return (
    <li className="card">
      <div>
        <h3 className="card-title">{props.movieData.title} ({props.movieData.year})</h3>
        <div className="card-content">
          <img src={process.env.PUBLIC_URL + props.movieData.image} alt="image" height="300px" align="center"/>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a className="card-link" onClick={()=>dispatch(setSelectMovie(props.movieData))}>Выбрать сеанс и билеты</a>
      </div>
    </li>
  );
}
export { MovieCard };
