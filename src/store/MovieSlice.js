import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      title: "Адвокат дьявола",
      year: "1975",
      description: "Фильм снят по мотивам романа Эндрю Нейдермана «Адвокат дьявола» (Devil’s Advocate, 1990). " +
        "Герой Джон Милтон был назван в честь автора классического произведения «Потерянный рай», " +
        "в котором рассказана история падшего человека.",
      image: "/advocat.jpg",
      type: ['triller'],
      sessions: [
        {
          date: "20-05-2023",
          freePlace: 20
        },
        {
          date: "29-05-2023",
          freePlace: 10
        },
        {
          date: "26-05-2023",
          freePlace: 5
        },
      ]
    }, {
      title: "1+1",
      year: "2011",
      description: "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека," +
        " который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, " +
        "только что освободившегося из тюрьмы.",
      image: "/1+1.jpg",
      type: ['drama'],
      sessions: [
        {
          date: "21-05-2023",
          freePlace: 10
        },
        {
          date: "22-05-2023",
          freePlace: 14
        },
        {
          date: "23-05-2023",
          freePlace: 5
        },
      ]
    }, {
      title: "Достать ножи",
      year: "2019",
      description: "На следующее утро после празднования 85-летия известного автора криминальных романов Харлана Тромби " +
        "виновника торжества находят мёртвым. Налицо — явное самоубийство, но полиция по протоколу опрашивает всех " +
        "присутствующих в особняке членов семьи, хотя, в этом деле больше заинтересован частный детектив Бенуа Блан.",
      image: "/knives.jpg",
      type: ["detective", "drama"],
      sessions: [
        {
          date: "18-05-2023",
          freePlace: 9
        },
        {
          date: "19-05-2023",
          freePlace: 44
        },
        {
          date: "20-05-2023",
          freePlace: 35
        },
      ]
    } , {
      title: "Настоящий детектив",
      year: "2014",
      description: "В Луизиане в 1995 году происходит странное убийство девушки. " +
        "В 2012 году дело об убийстве 1995 года повторно открывают, так как произошло похожее убийство. " +
        "Чтобы продвинуться в расследовании, полиция решает допросить бывших детективов, " +
        "которые работали над тем делом.",
      image: "/true_detective.jpg",
      type: ['detective'],
      sessions: [
        {
          date: "17-05-2023",
          freePlace: 20
        },
        {
          date: "20-05-2023",
          freePlace: 19
        },
        {
          date: "23-05-2023",
          freePlace: 16
        },
      ]
    }
  ],
  selectedMovie: ''
};

const movieSlice = createSlice({
  name: 'moviesSlice',
  initialState: initialState,
  reducers: {
    reset(state) {
      state.movies = initialState.movies
      state.selectedMovie = initialState.selectedMovie
    },
    getMovies(state){
      console.log("Вы в получении списка фильмов");
      state.movies = initialState.movies;
    },
    getMoviesFromSearchStr(state, action) {
      console.log("Вы в получении списка фильмов c фильтрами по строке");
      state.movies = initialState.movies.filter((movie)=>(movie.title.includes(action.payload)))
    },
    getMoviesFromSearchType(state, action) {
      console.log(action.payload)
      state.movies = state.movies.filter((movie)=> action.payload.some(value => movie.type.includes(value)))
    },
    setSelectMovie(state, action) {
      state.selectedMovie = action.payload
      console.log("Изменили фильм на " + action.payload)
    }
  },
});

// Извлекаем объект с создателями и редуктор
const { actions, reducer } = movieSlice;
// Извлекаем и экспортируем каждого создателя по названию
export const {
  getMovies,
  getMoviesFromSearchStr,
  setSelectMovie,
  getMoviesFromSearchType,
  reset
} = actions;
// Экпортируем редуктор по умолчанию или по названию
export default reducer;
