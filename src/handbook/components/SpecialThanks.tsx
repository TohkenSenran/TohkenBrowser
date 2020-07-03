import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AccordionDetails, Box, Typography } from '@material-ui/core';

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
        <iframe src="../html/licenses.html" title="licenses" />
      </AccordionDetails>
    </Accordion>
  </Box>
);
