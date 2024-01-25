type ButtletStepProps = {
  maxStep: number;
  step: number;
  handleSelectStep: () => void;
};

const ButtletStep = ({ maxStep, step, handleSelectStep }: ButtletStepProps) => {
  return (
    <div className="mt-6 flex justify-center gap-4">
      {[...Array(maxStep).keys()].map((index) => (
        <div
          key={index}
          onClick={handleSelectStep}
          className={`rounded-full w-3 h-3 cursor-pointer ${
            step > index - 1 ? "bg-primary" : "bg-gray-200"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default ButtletStep;
