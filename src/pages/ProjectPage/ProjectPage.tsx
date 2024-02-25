const ProjectPage = () => {
  return (
    <div className="h-20 bg-white w-full shadow-sm flex  py-2 px-8 gap-8 items-end">
      <div className="w-16 h-full rounded-md flex justify-center items-center bg-primary">
        <p className="font-bold text-4xl text-white">A</p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-dark">Academ Projex</h2>
        <div className="flex text-dark gap-1 mt-2">
          <div className="w-24 bg-primary-subtle flex justify-center rounded-s-md cursor-pointer">
            List
          </div>
          <div className="w-24 bg-primary-subtle flex justify-center cursor-pointer">
            Board
          </div>
          <div className="w-24 bg-primary-subtle flex justify-center cursor-pointer">
            Carendar
          </div>
          <div className="w-24 bg-primary-subtle flex justify-center cursor-pointer">
            Note
          </div>
          <div className="w-24 bg-primary-subtle flex justify-center rounded-e-md cursor-pointer">
            Timeline
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default ProjectPage;
