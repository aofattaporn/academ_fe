import { Link } from "react-router-dom";
type SeemoreButtonProps = {
  navigate: string;
  title: string;
};
const SeemoreButton = ({ navigate, title }: SeemoreButtonProps) => {
  return (
    <Link to={navigate}>
      <div className="overflow-x-scroll px-4 py-2 bg-slate-300 rounded-md bg-gradient-to-r from-[#9379E0] via-[#AE78D6] to-[#D780E1] overflow-y-hidden h-10 mb-2">
        <p className="overflow-scroll text-white">
          {`see all ${title.toLocaleLowerCase()}`}
        </p>
      </div>
    </Link>
  );
};

export default SeemoreButton;
