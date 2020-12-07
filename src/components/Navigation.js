
import React from 'react';
import { Box, Grommet, Header, Heading } from 'grommet';
import { grommet } from 'grommet/themes';
import { Compliance } from 'grommet-icons';

const Navigation = () =>{
   return(
    <Grommet theme={grommet}>
      <Header background="neutral-2" pad="xsmall">
        <Box direction="row" align="center" gap="small" margin={{ left: "small" }}>
          <Compliance size="large"/>
          <Heading level="3">ReactToDo</Heading>
        </Box>
      </Header>
    </Grommet>
  );
} 

export default Navigation;

