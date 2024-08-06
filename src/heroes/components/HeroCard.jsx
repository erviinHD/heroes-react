import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImgUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col-md-4 py-3 d-flex justify-content-center">
      <div className="card text-center">
        <div className="card-header">{alter_ego}</div>
        <img
          src={heroImgUrl}
          className="card-img-top img-fluid img-thumbnail"
          alt={superhero}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{characters}</p>
          <Link className="btn btn-primary" to={`/hero/${id}`}>
            Ver mas...
          </Link>
        </div>
      </div>
    </div>
  );
};
