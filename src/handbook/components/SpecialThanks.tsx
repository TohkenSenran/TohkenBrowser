import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@material-ui/core';

export const SpecialThank: React.FC = () => (
  <Box paddingX={2}>
    <Box padding={2}>
      <Typography variant="h6">謝辞 </Typography>
    </Box>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Library Licenses</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <object data="../html/licenses.txt" type="text/plain" width="100%" height="360">
          {}
        </object>
      </AccordionDetails>
    </Accordion>
  </Box>
);
