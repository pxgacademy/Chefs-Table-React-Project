import PropTypes from "prop-types";

const CurrentlyCookingItems = ({ item }) => {
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
    </div>
  );
};

CurrentlyCookingItems.propTypes = {
  item: PropTypes.object.isRequired,
};
export default CurrentlyCookingItems;
