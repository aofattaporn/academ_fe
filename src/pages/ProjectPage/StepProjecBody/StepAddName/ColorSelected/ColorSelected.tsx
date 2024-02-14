type ColorSelectedProps = {
  handleSelected: (color: string) => void;
};

const ColorSelected = ({ handleSelected }: ColorSelectedProps) => {
  const colors: string[] = [
    "#AF8AE2",
    "#6985FF",
    "#3FB1B2",
    "#64C7A2",
    "#FABE34",
    "#E78945",
    "#DD646A",
    "#BDBDBD",
  ];

  return (
    <div>
      <p className="text-grey text-sm mb-2">Colors</p>
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleSelected(color)}
            className="rounded-full w-4 h-4 cursor-pointer"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelected;
