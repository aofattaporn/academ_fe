import moment from "moment";

const DASH_DMY = "D MMMM YYYY";
const DateTimeHomePage = moment().format(DASH_DMY);

const HomePage = () => {
  return (
    <div className="w-full h-full bg-main">
      <div className="w-full h-12 bg-primary-light"></div>
      <div className="flex justify-center p-16">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl text-dark">Good Morning</h1>
          <h3 className="font-bold text-xl text-grey">{DateTimeHomePage}</h3>
        </div>
      </div>

      <div className="p-8 grid md:grid-cols-2  grid-cols-1 gap-4 gap-y-10 gap-x-8">
        <div className="h-96 p-4 bg-background-white shadow-xl rounded-xl">
          <div className="p-2">
            <h2 className="text-black font-bold text-2xl">Project</h2>
          </div>
          <div className="h-4/5 bg-main rounded-xl grid place-content-center">
            <h2 className="text-grey font-normal text-xl">
              There are no class at moment.
            </h2>
          </div>
        </div>
        <div className="h-96 p-4 bg-background-white shadow-xl rounded-xl">
          <div className="p-2">
            <h2 className="text-black font-bold text-2xl">Class</h2>
          </div>
          <div className="h-4/5 bg-main rounded-xl grid place-content-center">
            <h2 className="text-grey font-normal text-xl">
              There are no class at moment.
            </h2>
          </div>
        </div>
        <div className="h-96 p-4 bg-background-white shadow-xl rounded-xl">
          <div className="p-2">
            <h2 className="text-black font-bold text-2xl">Tasks</h2>
          </div>
          <div className="h-4/5 bg-main rounded-xl grid place-content-center">
            <h2 className="text-grey font-normal text-xl">
              There are no class at moment.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
