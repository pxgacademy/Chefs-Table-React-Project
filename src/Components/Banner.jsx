const Banner = () => {
  return (
    <section
      id="bannerContainer"
      className="bg-[url(./assets/Banner-Cover.png)] bg-no-repeat bg-top py-10 px-5 rounded-3xl mt-16 lg:min-h-[600px] flex justify-center items-center"
    >
      <div className="max-w-4xl text-center space-y-4">
        <h2 className="text-3xl lg:text-5xl font-bold">
          Discover an exceptional cooking class tailored for you!
        </h2>
        <p className="text-base font-semibold">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="space-x-5 mt-10">
          <button className="py-2 px-5 border rounded-full hover:bg-green-500 hover:border-green-500 hover:text-zinc-800">
            Explore Now
          </button>
          <button className="py-2 px-5 border rounded-full hover:bg-green-500 hover:border-green-500 hover:text-zinc-800">
            Our Feedback
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
