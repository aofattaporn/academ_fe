import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import CustomizedAccordions from "./component/accordion";

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
      <div className="m-4">
        <Accordion className="mb-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className="flex align-middl items-center gap-4 p-2 cursor-pointer">
              <div className="bg-primary w-16 h-16 rounded-md flex justify-center items-center text-center shadow-md">
                <p className="text-white text-center font-bold text-2xl">J</p>
              </div>
              <div>
                <p className="font-bold text-3xl">Jit:D</p>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <CustomizedAccordions />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Accordion Actions
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </div>
    </div>
  );
};

export default MytaskPage;
