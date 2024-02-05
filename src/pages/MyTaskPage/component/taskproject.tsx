import Accordion from "@mui/material/Accordion";
import AccordionHeader from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CustomizedAccordions from "./processtask";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const Accordion = styled((props: AccordionProps) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   "&:not(:last-child)": {
//     borderBottom: 0,
//   },
//   "&::before": {
//     display: "none",
//   },
// }));

const TaskProject = () => {
  return (
    <div className="m-4">
      <Accordion className="mb-4">
        <AccordionHeader
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="flex align-middle items-center gap-4 p-2 cursor-pointer">
            <div className="bg-primary w-16 h-16 rounded-md flex justify-center items-center text-center shadow-md">
              <p className="text-white text-center font-bold text-2xl">J</p>
            </div>
            <div>
              <p className="font-bold text-3xl">Jit:D</p>
            </div>
          </div>
        </AccordionHeader>

        <AccordionDetails>
          {[1, 2].map(() => {
            return <CustomizedAccordions />;
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TaskProject;
