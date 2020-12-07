
import React from 'react';
import { Box, Text, Button, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import { Trash } from 'grommet-icons';

class ToDoElement extends React.Component{

  constructor(props){
    super(props);
    this.state={
       clicked: false
    }
  }

  clickChange=(clicked)=>{
    this.setState({clicked: clicked});
  }

  render(){
    const { clicked } = this.state;
    if(clicked === false){
    const { task, removeItem } = this.props;
      return(
        <Grommet theme={grommet}>
          <Box align="center" margin="small">
            <Box
              direction="row"
              border={{ color: 'black', size: 'xsmall' }}
              pad="small"
              width="medium"
            >
              <Box direction="row" pad="small" onClick={()=>this.clickChange(true)}>
                 <Text className="text-input">{task}</Text>
              </Box>
              <Box direction="row-reverse" flex>
                <Button icon={<Trash size="20"/>} onClick={()=>removeItem(task)}/>
              </Box>
            </Box>
          </Box> 
        </Grommet>    
      );
    }
    if(clicked === true){
      const { task, removeItem } = this.props;
      return(
        <Grommet theme={grommet}>
          <Box align="center" margin="small">
            <Box
              direction="row"
              border={{ color: 'black', size: 'xsmall' }}
              pad="small"
              width="medium"
            >
              <Box direction="row" pad="small" onClick={()=>this.clickChange(false)}>
                 <Text className="text-input2">{task}</Text>
              </Box>
              <Box direction="row-reverse" flex>
                <Button icon={<Trash size="20"/>} onClick={()=>removeItem(task)}/>
              </Box>
            </Box>
          </Box> 
        </Grommet>    
      );
    }  
  }
}

export default ToDoElement;