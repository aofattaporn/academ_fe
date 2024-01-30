import { views } from "../../../../types/ProjectType";

type SummaryViewsProps = {
  views2: string[];
};

const SummaryViews = ({ views2 }: SummaryViewsProps) => {
  return (
    <div className="my-8">
      <h1 className="text-lg font-bold text-primary-dark">
        Default Settings for Views
      </h1>
      <div className="items-center flex-col gap-4">
        <p className="text-md text-dark">{views2.length} views selected </p>
        <div className="flex gap-4">
          {views.map((item, index) => {
            if (views2.includes(item.name))
              return (
                <div
                  key={index}
                  className="flex-col align-middle items-center justify-center text-gray-300 w-12"
                >
                  <div className="flex justify-center">
                    <item.icon />
                  </div>

                  <div>{item.name}</div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default SummaryViews;
