import React, {useState} from 'react';
import { Search } from "../components/Search";
import {Movies} from "../components/Movies/Movies";
import {Movie} from "../components/Movies/Movie/Movie";
import {Provider, useDispatch, useSelector} from 'react-redux'
import {getMovies, getMoviesFromSearchStr, getMoviesFromSearchType} from "../store/MovieSlice";
import store from "../store/Store";

export function HomePage () {

  const movies = useSelector(state => state.toolkit.movies)
  const selectedMovie = useSelector(state => state.toolkit.selectedMovie)
  const dispatch = useDispatch()

  const searchMovies = (strSearch, type = [""]) => {
    if (strSearch === '') {
      store.dispatch(getMovies());
      console.log("Приведение к дуфолтному состоянию");
    } else {
      dispatch(getMoviesFromSearchStr(strSearch))
      console.log(movies)
      console.log("Поиск фильмов по вашим параметрам" + strSearch);
    }

    if (type.length !== 0) {
      console.log(type);
      dispatch(getMoviesFromSearchType(type));
    }
  };

  return (
    <div className="mb-2">
      <h1 className="text-center">Страница онлайн бронирования билетов</h1>
      <Search searchMovies={searchMovies}/>

      <div className="row container-fluid">
        <div className="col-2"></div>
        <div className="col-9">
          <Movies movies={movies}/>
        </div>
      </div>

      }
      {selectedMovie!=="" &&
      <div className="container-fluid row">
        <div className="col-2"></div>
        <div className="col-10">
          <Movie {...selectedMovie}/>
        </div>
      </div>
      }
    </div>
  )
}
