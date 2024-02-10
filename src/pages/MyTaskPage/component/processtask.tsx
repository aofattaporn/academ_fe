import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ListMyTasks from "./listMyTasks";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="my-4">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionHeader aria-controls="panel1d-content" id="panel1d-header">
          <div className="flex">
            <div className="h-full w-1 bg-grey"></div>
            <p className="ml-2 text-black font-bold text-md">To do</p>
          </div>
        </AccordionHeader>
        <AccordionDetails>
          <div className="flex">
            <div className="w-1/2 h-8 bg-grey mr-2 flex align-middle items-center">
              <p className="ml-2 text-black font-semibold text-sm">Task Name</p>
            </div>
            <div className="w-1/2 h-8 bg-grey ml-2 flex align-middle justify-center items-center">
              <p className="ml-2 text-black font-semibold text-sm">Due Date</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 h-8 flex pl-8 align-middle items-center">
              <p className="text-black font-normal text-sm">task1</p>
            </div>
            <div className="w-1/2 h-8 flex ml-4  align-middle justify-center items-center">
              <p className="text-black font-normal text-sm">Today</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
