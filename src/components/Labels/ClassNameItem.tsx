type ClassNameItemProps = {
  className: string;
};
const ClassNameItem = ({ className }: ClassNameItemProps) => {
  return (
    <div className="text-sm p-1 px-6 rounded-md border-2 border-primary text-primary">
      {className}
    </div>
  );
};

export default ClassNameItem;
