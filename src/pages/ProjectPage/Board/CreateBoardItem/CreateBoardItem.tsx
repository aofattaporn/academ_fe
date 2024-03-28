const CreateBoardItem = () => {
  return (
    <button
      className="w-full p-1 bg-gray-100 rounded-md cursor-pointer text-gray-300 my-4 h-24 invisible group-hover/create:visible"
      onClick={() => {}}
    >
      <div className=" w-full bg-red">
        <p>Create Tasks</p>
      </div>
    </button>
  );
};

export default CreateBoardItem;
