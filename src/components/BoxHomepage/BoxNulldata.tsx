type BoxNulldataProps = {
  title: string;
};

export const BoxNulldata = ({ title }: BoxNulldataProps) => {
  return (
    <div className="h-96 p-4 bg-background-white shadow-xl rounded-xl">
      <div className="p-2">
        <h2 className="text-black font-bold text-xl">{title}</h2>
      </div>
      <div className="h-4/5 bg-main rounded-xl grid place-content-center">
        <h2 className="text-grey font-normal text-xl">
          There are no nothing at moment.
        </h2>
      </div>
    </div>
  );
};
