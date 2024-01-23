import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionGroup from "@mui/material/AccordionGroup";
import AccordionSummary from "@mui/material/AccordionSummary";

const MytaskPage = () => {
  return (
    <div className="w-full h-full bg-main">
      <div className="w-full h-20 bg-primary-light grid content-center">
        <div className="ml-4">
          <p className="text-black font-bold text-2xl">My Task</p>
        </div>
      </div>
      {/* <div className="w-12/12 h-3/5 bg-background-white shadow-xl rounded-xl m-4">
        <div className="w-full h-1/4 bg-grey grid content-center">
          <div className="bg-primary w-16 h-16 rounded-md flex justify-center items-center text-center shadow-md">
            <p className="text-white text-center font-bold text-2xl">J</p>
          </div>
          <p className="text-black font-bold text-xl">Jit:D</p>
        </div>
      </div> */}
      <Accordion className="m-4">
        <AccordionSummary>Jit:D</AccordionSummary>
        <AccordionDetails>Content</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MytaskPage;
