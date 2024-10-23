import PropTypes from "prop-types";
import { FaRegClock, FaGripfire } from "react-icons/fa";

const Card = ({ card, handleWantToCook }) => {
  const {
    cover_image,
    title,
    description,
    ingredients,
    author_name,
    author_image,
    posted_date,
    cooking_time,
    calories,
    hashtags,
  } = card;

  return (
    <div className="border p-4 border-zinc-500 rounded-xl flex flex-col justify-between">
      <div>
        <img className="rounded-lg w-full" src={cover_image} alt="" />
        <div className="flex items-center gap-4 mt-5">
          <img className="w-14 rounded-full" src={author_image} alt="" />
          <div>
            <p className="text-xl font-semibold">{author_name}</p>
            <span className="text-base text-zinc-300">{posted_date}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold py-3">{title}</h3>
        <p className="mb-3">Description: {description}</p>
        <p className="font-semibold text-lg">
          Ingredients: {ingredients.length}
        </p>
        <ul className="pl-3">
          {ingredients.map((item, idx) => (
            <li className="list-inside list-disc" key={idx}>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-10 my-3">
          <div className="flex items-center gap-2">
            <FaRegClock />
            <span>
              {cooking_time >= 60
                ? `${cooking_time / 60} Hour`
                : cooking_time + " Minutes"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaGripfire />
            <span>{calories} Calories</span>
          </div>
        </div>

        <p className="space-x-2 mb-4">
          {hashtags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </p>
      </div>

      <button
        onClick={() => handleWantToCook(card)}
        className="py-2 px-5 border font-bold rounded-full hover:bg-green-500 hover:border-green-500 hover:text-zinc-800"
      >
        Want to Cook
      </button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
};

export default Card;
