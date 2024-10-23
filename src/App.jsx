import { useEffect, useState } from "react";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Sidebar from "./Components/Sidebar";

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleWantToCook = (card) => {
    const checkCard = wantToCook.find((item) => item.id === card.id);
    const checkCard2 = currentlyCooking.find((item) => item.id === card.id);

    if (checkCard) {
      alert("The product already existed");
      return;
    } else if (checkCard2) {
      alert("The product already existed");
      return;
    }

    const newCards = [...wantToCook, card];
    setWantToCook(newCards);
  };

  const handleCurrentlyCooking = (id) => {
    const newArrayForCurrently = wantToCook.filter((item) => item.id === id);
    const currentlyArray = [...currentlyCooking, ...newArrayForCurrently];
    setCurrentlyCooking(currentlyArray);

    const filteredArray = wantToCook.filter((item) => item.id !== id);
    setWantToCook(filteredArray);
  };

  useEffect(() => {
    totalTimeAndCalories();
  });

  const totalTimeAndCalories = () => {
    let newTime = 0;
    let newCalories = 0;

    for (const id of currentlyCooking) {
      newTime += id.cooking_time;
      newCalories += id.calories;
    }
    setTotalTime(newTime);
    setTotalCalories(newCalories);
  };

  return (
    <>
      <Header />

      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <OurRecipes />
        <div className="flex flex-col-reverse md:flex-row gap-5 justify-between mt-14">
          <Cards handleWantToCook={handleWantToCook} />
          <Sidebar
            wantToCook={wantToCook}
            handleCurrentlyCooking={handleCurrentlyCooking}
            currentlyCooking={currentlyCooking}
            totalTime={totalTime}
            totalCalories={totalCalories}
          />
        </div>
      </main>
    </>
  );
}

export default App;
