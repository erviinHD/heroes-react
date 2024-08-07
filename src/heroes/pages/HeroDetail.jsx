import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel"></Navigate>;
  }

  return (
    <>
      <h1 className="display-5 mt-3 animate__animated animate__fadeInDown">{hero.superhero}</h1>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <img
            src={`/assets/heroes/${hero.id}.jpg`}
            className="card-img-top img-fluid img-thumbnail animate__animated animate__fadeInLeft"
            alt={hero.superhero}
          ></img>
        </div>
        <div className="col-md-9 animate__animated animate__fadeIn">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alther Ego: </b>
              {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>Firts Appearance: </b>
              {hero.first_appearance}
            </li>
            <figure className="pt-4 ">
              <blockquote className="blockquote ">
                <p>Characters</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                {hero.characters}
              </figcaption>
            </figure>

            <button className="btn btn-info w-25" onClick={onNavigateBack}>
              Go Back
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
