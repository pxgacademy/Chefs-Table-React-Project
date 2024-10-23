import PropTypes from "prop-types";

const CookingItem = ({ item, handleCurrentlyCooking }) => {
  const { cooking_time } = item;
  return (
    <div className="grid grid-cols-4 py-2 gap-x-2 bg-zinc-800 my-3 p-2 rounded-md">
      <p className="col-span-2">{item.title}</p>
      <p>
        {cooking_time >= 60
          ? `${cooking_time / 60} Hour`
          : cooking_time + " Minutes"}
      </p>
      <p>{item.calories}</p>
      <button
        onClick={() => handleCurrentlyCooking(item.id)}
        className="bg-green-500 hover:bg-green-600 mt-2 col-span-4 py-2 rounded text-zinc-800 font-bold"
      >
        Preparing
      </button>
    </div>
  );
};

CookingItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleCurrentlyCooking: PropTypes.func.isRequired,
};

export default CookingItem;
