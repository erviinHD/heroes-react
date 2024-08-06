import { HeroList } from "../components";

export const DC = () => {
  return (
    <>
      <h1 className="display-5 mt-3">DC Comics</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </>
  );
};
