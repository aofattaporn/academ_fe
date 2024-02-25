import moment from "moment";
import { useEffect, useState } from "react";
import MytaskBox from "./component/MyTasksBox";
import { GreetingType } from "../../types/HomeType";
import ClassBox from "./component/classbox";
import ProjectBox from "./component/projectbox";

const HomePage = () => {
  const currentHour = new Date().getHours();
  const DateTimeHomePage = moment().format(GreetingType.DASH_DMY);
  const [greeting, setGreeting] = useState<string>(GreetingType.GreetingOther);

  useEffect(() => {
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting(GreetingType.Morning);
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting(GreetingType.AfterNoon);
    } else if (currentHour >= 18 && currentHour < 21) {
      setGreeting(GreetingType.Evening);
    } else if (currentHour >= 21 && currentHour < 5) {
      setGreeting(GreetingType.Night);
    } else {
      setGreeting(GreetingType.GreetingOther);
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
