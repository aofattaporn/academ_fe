type ButtletStepProps = {
  handleSetStep: (step: number) => void;
  step: number;
};
const ButtletStep = ({ handleSetStep, step }: ButtletStepProps) => {
  return (
    <div className="mt-6 flex justify-center gap-4">
      <div
        onClick={() => handleSetStep(1)}
        className={`rounded-full w-3 h-3 ${
          step >= 1 ? "bg-primary" : "bg-gray-200"
        }`}
      ></div>
      <div
        onClick={() => handleSetStep(2)}
        className={`rounded-full w-3 h-3 ${
          step >= 2 ? "bg-primary" : "bg-gray-200"
        }`}
      ></div>
      <div
        onClick={() => handleSetStep(3)}
        className={`rounded-full w-3 h-3 ${
          step >= 3 ? "bg-primary" : "bg-gray-200"
        }`}
      ></div>
      <div
        onClick={() => handleSetStep(4)}
        className={`rounded-full w-3 h-3 ${
          step >= 4 ? "bg-primary" : "bg-gray-200"
        }`}
      ></div>
    </div>
  );
};

export default ButtletStep;
