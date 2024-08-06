import { HeroList } from "../components";

export const Marvel = () => {
  return (
    <>
      <h1 className="display-5 mt-3">Marvel Comics</h1>
      <hr />

      <HeroList publisher="Marvel Comics" />
    </>
  );
};
