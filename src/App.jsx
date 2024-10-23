import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <Header />

      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <OurRecipes />
        <div className="md:flex gap-5 justify-between mt-14">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </>
  );
}

export default App;
