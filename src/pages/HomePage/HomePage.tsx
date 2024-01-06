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

      {/* <div className="w-full h-full flex flex-wrap justify-center">
        <div className="w-5/12 h-5/12 bg-background-white mr-8 my-8 shadow-2xl rounded-xl">
          <div className="w-full h-1/5 flex items-center justify-start p-8">
            <p className="text-black font-bold text-2xl">Project</p>
          </div>
          <div className="w-full h-full flex justify-center">
            <div className="w-11/12 h-3/4 bg-main rounded-xl"></div>
          </div>
        </div>
        <div className="w-5/12 h-5/12 bg-background-white ml-8 my-8 shadow-2xl rounded-xl"></div>
        <div className="w-5/12 h-5/12 bg-background-white mr-8 my-8 shadow-2xl rounded-xl"></div>
        <div className="w-5/12 h-5/12 bg-background-white ml-8 my-8 shadow-2xl rounded-xl"></div>
      </div> */}
    </div>
  );
};

export default HomePage;
