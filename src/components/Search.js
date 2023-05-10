import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeSearchStr, changeType, deleteFilterTypeSlice, setFilterTypeSlice} from "../store/SearchSlice";

function Search(props) {

  const [filterType, setFilterType] = useState([]);
  const [search, setSearch] = useState('');

  const searchSlice = useSelector(state => state.searchReducer.searchStr)
  const typeSlice = useSelector(state => state.searchReducer.type)
  const dispatch = useDispatch()

  const handleChangeFilter = (e) => {
    const { value, checked } = e.target;

    console.log(`${value} is ${checked}`);
    dispatch(changeType(value, checked))

    if (checked) {
      setFilterType(prevState => ([...prevState,value]));
      dispatch(setFilterTypeSlice(value));
    } else {
      setFilterType(prevState => {
        return [...prevState.filter(type => type !== value)]
      });
      dispatch(deleteFilterTypeSlice(value))
    }
  };

  useEffect(()=>{

    }, [searchSlice, typeSlice])

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      props.searchMovies(searchSlice, typeSlice);
    }
  };

  const handleChecked = () => {
    return true;
  }

  return (
    <div className="row container-fluid">
      <div className="col-md-4"/>
      <div className="col-md-8">

        <div className="col-6">
        <label htmlFor="exampleInputEmail1">Search films</label>
        <div className="form-group input-group">
          <input type='search'
                 className="form-control col-4"
                 id="search"
                 aria-describedby="searchHelp"
                 placeholder="Search"
                 value={searchSlice}
                 onChange={(e) => (dispatch(changeSearchStr(e.target.value)))}
                 onKeyDown={handleKey}
                 />
          <button type="submit" className="btn btn-primary"
                  onClick={() => props.searchMovies(searchSlice, typeSlice)}
          >Search</button>
        </div>
        </div>

        <div className='row'>
          <small id="emailHelp" className="form-text text-muted">You can also use search filters</small>

          <div className="btn-group dropend col-2">
            <button type="submit"
                    className="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown" data-bs-display="static"
                    data-bs-auto-close="outside"
            >Filter settings</button>
            <div  className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
              <form className="px-1 py-1">
                <div className="dropdown-item form-check-inline">
                  <input className="form-check-input"
                         type="checkbox"
                         name="inlineRadioOptions"
                         id="inlineRadio1"
                         value="triller"
                         checked={typeSlice.includes("triller")}
                         onChange={handleChangeFilter}/>
                  <label className="form-check-label px-2" htmlFor="inlineRadio1">Триллер</label>
                </div>
                <div className="dropdown-item">
                  <input className="form-check-input"
                         type="checkbox"
                         name="inlineRadioOptions"
                         id="inlineRadio2"
                         value="drama"
                         checked={typeSlice.includes("drama")}
                         onChange={handleChangeFilter}/>
                  <label className="form-check-label px-2" htmlFor="inlineRadio2">Драма</label>
                </div>
                <div className="dropdown-item">
                  <input className="form-check-input"
                         type="checkbox"
                         name="inlineRadioOptions"
                         id="inlineRadio3"
                         value="detective"
                         checked={typeSlice.includes("detective")}
                         onChange={handleChangeFilter}/>
                  <label className="form-check-label px-2" htmlFor="inlineRadio3">Детектив</label>
                </div>
              </form>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export { Search };
