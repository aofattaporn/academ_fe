const COLORS: string[] = [
  "#AF8AE2",
  "#6985FF",
  "#3FB1B2",
  "#72C554",
  "#64C7A2",
  "#F9E116",
  "#E68945",
  "#DD646A",
  "#C2C2C2",
];

type ColorSelectionProps = {
  disable: boolean;
  selectColor: string;
  handleColor: (color: string) => void;
};
const ColorSelection = ({
  disable,
  selectColor,
  handleColor,
}: ColorSelectionProps) => {
  return (
    <div className="bg-main flex gap-2 p-2 rounded-md my-2">
      {COLORS.map((color, index) => {
        return (
          <button
            disabled={disable}
            key={index}
            onClick={() => handleColor(color)}
            style={{
              backgroundColor: color,
              border: selectColor === color ? "solid 4px #CFBBEA" : "none",
            }}
            className="rounded-full w-4 h-4 cursor-pointer"
          ></button>
        );
      })}
    </div>
  );
};

export default ColorSelection;
