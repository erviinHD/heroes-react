import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  
  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1 className="display-5 mt-3">Search</h1>
      <hr />
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <form className="d-flex" onSubmit={onSearchSubmit}>
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="col-md-8 d-flex justify-content-center">
          <div>
            <div className="display-flex text-center">
              <img src="/assets/search.svg" alt="" className="w-50" />
            </div>
            <p className="text-center mt-3">Search a hero</p>
          </div>
          <div>
            <div className="display-flex text-center">
              <img src="/assets/noData.svg" alt="" className="w-50" />
            </div>
            <p className="text-center mt-3">
              No hero found with <b>{q}</b>
            </p>
          </div>

          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};
