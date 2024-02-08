type ButtletStepProps = {
  maxStep: number;
  step: number;
  currentStep: number;
  handleSelectStep: (step: number) => void;
};

const ButtletStep = ({
  maxStep,
  step,
  currentStep,
  handleSelectStep,
}: ButtletStepProps) => {
  return (
    <div className="mt-6 flex justify-center gap-4">
      {[...Array(maxStep).keys()].map((item, index) => {
        return (
          <div
            key={index}
            className={`p-[3px] rounded-full ${
              currentStep == item ? "bg-primary-light" : null
            }`}
          >
            <div
              key={item}
              onClick={() => step > item - 1 && handleSelectStep(item)}
              className={`rounded-full w-3 h-3 cursor-pointer ${
                step > item - 1 ? "bg-primary" : "bg-gray-200"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default ButtletStep;
