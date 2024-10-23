import { useEffect, useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = ({ handleWantToCook }) => {
  const [recipesAPI, setRecipesAPI] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipesAPI(data));
  }, []);

  return (
    <section className="space-y-4 lg:space-y-0 lg:grid grid-cols-2 gap-5 w-full md:w-1/2 lg:w-2/3">
      {recipesAPI.map((card) => (
        <Card key={card.id} card={card} handleWantToCook={handleWantToCook} />
      ))}
    </section>
  );
};

Cards.propTypes = {
  handleWantToCook: PropTypes.func.isRequired,
};

export default Cards;
