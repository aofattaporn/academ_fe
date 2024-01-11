const ClassBox = () => {
  return (
    <div className="h-96 p-4 bg-background-white shadow-xl rounded-xl">
      <div className="p-2">
        <h2 className="text-black font-bold text-xl">Class</h2>
      </div>
      <div className="h-4/5 bg-main rounded-xl grid place-content-center">
        <h2 className="text-grey font-normal text-xl">
          There are no class at moment.
        </h2>
      </div>
    </div>
  );
};

export default ClassBox;
