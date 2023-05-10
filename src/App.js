import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {FilmListPage} from "./pages/FilmListPage";
import {Header} from "./components/Header";
import {Provider} from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/film-lists" element={ <FilmListPage/> } />
        </Routes>
      </Provider>

    </div>
  );
}

export default App;
