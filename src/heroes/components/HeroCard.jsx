import { Link } from "react-router-dom";

export const HeroCard = ({
  alter_ego,
  characters,
  first_appearance,
  id,
  publisher,
  superhero,
}) => {
  const heroImgUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col-md-4 py-3 d-flex justify-content-center">
      <div className="card text-center animate__animated animate__fadeIn">
        <div className="card-header">{alter_ego}</div>
        <img
          src={heroImgUrl}
          className="card-img-top img-fluid img-thumbnail"
          alt={superhero}
        ></img>
        <div className="card-body ">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{characters}</p>
          <Link className="btn btn-primary" to={`/hero/${id}`}>
            More...
          </Link>
        </div>
      </div>
    </div>
  );
};
