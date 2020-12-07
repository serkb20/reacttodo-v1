
import React from 'react';
import { TextInput, Box, Grommet, Button } from 'grommet';
import { grommet } from 'grommet/themes';
import { Add } from 'grommet-icons';

class SearchBox extends React.Component {
  
  constructor(props){
  	super(props);
  	this.state={
  		text: ''
  	}
  }

  resetText=()=>{
    this.setState({text: ''});
  }

  render() {
    const { text } = this.state;
    const { loadSearchText } = this.props;
    return (
      <Grommet theme={grommet}>
        <Box fill align="center" justify="start" pad="large">
          <Box width="medium" direction="row" align="center">
            <TextInput
             placeholder="type here"
             value={text}
             onChange={event => this.setState({ text: event.target.value })}
            />
            <Button icon={<Add size="medium"/>} plain margin={{ left: "medium"}} onClick={()=> {
              loadSearchText(text);
              this.resetText();
              }} />
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default SearchBox;