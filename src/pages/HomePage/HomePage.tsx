import moment from "moment";
import { useEffect, useState } from "react";
import ProjectBox from "./component/projectbox";
import ClassBox from "./component/classbox";
import MytaskBox from "./component/mytaskbox";

const HomePage = () => {
  const currentHour = new Date().getHours();
  const DASH_DMY = "D MMMM YYYY";
  const DateTimeHomePage = moment().format(DASH_DMY);
  const [greeting, setGreeting] = useState<string>("Have a good day");

  useEffect(() => {
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else if (currentHour >= 18 && currentHour < 21) {
      setGreeting("Good Evening");
    } else if (currentHour >= 21 && currentHour < 5) {
      setGreeting("Good Night");
    } else {
      setGreeting("Have a good day");
    }
  }, [currentHour]);

  return (
    <div className="w-full h-full bg-main">
      <div className="w-full h-12 bg-primary-light"></div>
      <div className="flex justify-center p-16">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl text-dark">{greeting}</h1>
          <h3 className="font-bold text-xl text-grey">{DateTimeHomePage}</h3>
        </div>
      </div>

      <div className="p-8 grid md:grid-cols-2  grid-cols-1 gap-4 gap-y-10 gap-x-8">
        <ProjectBox />
        <ClassBox />
        <MytaskBox />
      </div>
    </div>
  );
};

export default HomePage;
