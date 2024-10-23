import PropTypes from "prop-types";
import CookingItem from "./CookingItem";

const WantToCook = ({ wantToCook, handleCurrentlyCooking }) => {
  return (
    <div>
      <div className="border-b border-zinc-500 pb-4">
        <h3 className="text-center text-2xl font-semibold">
          Want to Cook: {wantToCook.length}
        </h3>
      </div>
      <div className="grid grid-cols-4 mt-4 py-2 border-b border-zinc-600 px-2">
        <p className="col-span-2">Name</p>
        <p>Time</p>
        <p>Calories</p>
      </div>

      {wantToCook.map((item, idx) => (
        <CookingItem key={idx} item={item} handleCurrentlyCooking={handleCurrentlyCooking} />
      ))}
    </div>
  );
};

WantToCook.propTypes = {
  wantToCook: PropTypes.array.isRequired,
  handleCurrentlyCooking: PropTypes.func.isRequired,
};

export default WantToCook;
