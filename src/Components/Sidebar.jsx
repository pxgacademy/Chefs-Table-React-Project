import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";
import PropTypes from "prop-types";

const Sidebar = ({
  wantToCook,
  handleCurrentlyCooking,
  currentlyCooking,
  totalTime,
  totalCalories,
}) => {
  return (
    <section className="w-full md:w-1/2 lg:w-1/3 border border-zinc-500 rounded-xl p-4">
      <WantToCook
        wantToCook={wantToCook}
        handleCurrentlyCooking={handleCurrentlyCooking}
      />
      <CurrentlyCooking
        currentlyCooking={currentlyCooking}
        totalTime={totalTime}
        totalCalories={totalCalories}
      />
    </section>
  );
};

Sidebar.propTypes = {
  wantToCook: PropTypes.array.isRequired,
  handleCurrentlyCooking: PropTypes.func.isRequired,
  currentlyCooking: PropTypes.array.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired,
};

export default Sidebar;
