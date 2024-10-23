import PropTypes from "prop-types";
import CurrentlyCookingItems from "./CurrentlyCookingItems";

const CurrentlyCooking = ({ currentlyCooking, totalTime, totalCalories }) => {
  return (
    <div>
      <div className="border-b border-zinc-500 pb-4 mt-10">
        <h3 className="text-center text-2xl font-semibold">
          Currently Cooking: {currentlyCooking.length}
        </h3>
      </div>
      <div className="grid grid-cols-4 mt-4 py-2 border-b border-zinc-600 px-2">
        <p className="col-span-2">Name</p>
        <p>Time</p>
        <p>Calories</p>
      </div>

      {currentlyCooking.map((item, idx) => (
        <CurrentlyCookingItems key={idx} item={item} />
      ))}

      <div className="border-t border-zinc-600 px-2 pt-2">
        <p>
          Total Time:{" "}
          {totalTime === 0
            ? 0
            : totalTime >= 60
            ? `${Math.floor(totalTime / 60)} Hour(s) ${totalTime % 60} Minutes`
            : totalTime + " Minutes"}
        </p>
        <p>Total Calories: {totalCalories}</p>
      </div>
    </div>
  );
};

CurrentlyCooking.propTypes = {
  currentlyCooking: PropTypes.array.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired,
};
export default CurrentlyCooking;
