import AcademIcon from "../../../../assets/svg/academ_icon.svg";

type AcademTitleProps = {
  isOpen: boolean;
};
const AcademTitle = ({ isOpen }: AcademTitleProps) => {
  return (
    <div className="flex gap-x-4 items-center bg-primary-dark rounded-md mt-8">
      <div className="flex items-center gap-4 px-2 h-12 bg-primary-dark rounded-md text-white">
        <img src={AcademIcon} alt="Academ-icons" />
        {isOpen ? <h1 className=" font-bold">Academ</h1> : null}
      </div>
    </div>
  );
};

export default AcademTitle;
