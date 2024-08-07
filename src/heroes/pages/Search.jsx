import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;

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
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="col-md-8 d-flex justify-content-center">
          <div
            className="animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            <div className="display-flex text-center">
              <img src="/search.svg" alt="" className="w-50" />
            </div>
            <div
              className="alert alert-secondary mt-5 text-center"
              role="alert"
            >
              Search a hero
            </div>
          </div>

          <div
            className="animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            <div className="display-flex text-center">
              <img src="/noData.svg" alt="" className="w-50" />
            </div>

            <div className="alert alert-danger mt-5 text-center" role="alert">
              No hero found with <b>{q}</b>
            </div>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
