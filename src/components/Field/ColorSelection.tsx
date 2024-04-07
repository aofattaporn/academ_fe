const COLORS: string[] = [
  "#AF8AE2",
  "#6985FF",
  "#6985FF",
  "#3FB1B2",
  "#64C7A2",
  "#E68945",
  "#DD646A",
  "#BDBDBD",
];
const ColorSelection = () => {
  return (
    <div className="bg-main flex gap-2 p-2 rounded-md my-2">
      {COLORS.map((color, index) => {
        return (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className=" rounded-full w-4 h-4 cursor-pointer"
          ></div>
        );
      })}
    </div>
  );
};

export default ColorSelection;
