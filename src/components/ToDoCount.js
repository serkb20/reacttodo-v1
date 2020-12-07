
import React from 'react';
import { Text, Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';


class ToDoCount extends React.Component {
  
  constructor(props){
  	super(props);
  	this.state={
  		todo: 3
  	}
  }

  render() {
    const { count } = this.props;
    return (
      <Grommet theme={grommet}>
        <Box fill align="center" justify="start" pad="small">
          <Box direction="row">
            <Text size="xxlarge">{`${count} Todos`}</Text>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default ToDoCount;