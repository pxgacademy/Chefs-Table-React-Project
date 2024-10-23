import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [recipesAPI, setRecipesAPI] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipesAPI(data));
  }, []);

  return (
    <section className="lg:grid grid-cols-2 gap-5 w-full md:w-1/2 lg:w-2/3">
      {recipesAPI.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
};

export default Cards;

