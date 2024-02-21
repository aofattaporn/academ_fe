import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { myTasks, project } from "../../../types/MyTasksType";
import ListMyTasks from "./ListMyTask";

type ProcessAccordionsProp = {
  project: project;
  myTasks: myTasks[];
};

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionHeader = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function ProcessAccordions({
  project,
  myTasks,
}: ProcessAccordionsProp) {
  return (
    <div className="my-4">
      {project.process.map((item, index) => (
        <Accordion key={index}>
          <AccordionHeader>
            <div className="flex">
              <div className="h-full w-1 bg-grey"></div>
              <p className="ml-2 text-black font-bold text-md">
                {project.process[index].processsName}
              </p>
            </div>
          </AccordionHeader>
          <AccordionDetails>
            <div className="flex">
              <div className="w-1/2 h-8 bg-grey mr-2 flex align-middle items-center">
                <p className="ml-2 text-black font-semibold text-sm">
                  Task Name
                </p>
              </div>
              <div className="w-1/2 h-8 bg-grey ml-2 flex align-middle justify-center items-center">
                <p className="ml-2 text-black font-semibold text-sm">
                  Due Date
                </p>
              </div>
            </div>
            <ListMyTasks
              myTasks={myTasks}
              processId={item.process_id}
              projectId={project.project_id}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
