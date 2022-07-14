import { FC } from "react";
import { TableSimple } from "@kushki/connect-ui";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { ROW_SELECTION_PROPS } from "./props";

const RowSelection: FC = () => {
  return (
    <Box>
      <Box pb={3}>
        <Accordion>
          <AccordionSummary>
            <Typography>Props</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <pre>{JSON.stringify(ROW_SELECTION_PROPS, null, 2)}</pre>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box width={{ md: 1200 }}>
          <TableSimple {...ROW_SELECTION_PROPS} />
        </Box>
      </Box>
    </Box>
  );
};

export { RowSelection };
