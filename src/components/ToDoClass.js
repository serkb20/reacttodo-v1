
import React from 'react';
import Navigation from './Navigation';
import SearchBox from './SearchBox';
import ToDoCount from './ToDoCount';
import ToDoList from './ToDoList';


class ToDoClass extends React.Component{

	constructor(){
		super();
		this.state={
			searchtext: '',
			todolist: [],
			count: 0
		}
	}

	loadSearchText=(text)=>{
		this.setState({searchtext:text});
		this.addToList(text);
	}

	addToList=(text)=>{
        const { todolist, count } = this.state;
        if(text !== '' && !todolist.includes(text)){
          todolist.push(text);
          todolist.forEach((item)=>{
    		this.setState({count: count + 1});
    	  })
        }
    }

    removeItem=(task)=>{
    	const { todolist, count } = this.state;
    	todolist.forEach((item, i)=>{
            if(item === task){
            	 todolist.splice(i, 1);
            	 this.setState({count: count - 1});
            }
    	})
    }

    
	render(){
		const { todolist, count } = this.state;
		return(
		    <div>
              <Navigation />
              <SearchBox loadSearchText={this.loadSearchText}/>
              <ToDoCount count={count} />
              <ToDoList todolist={todolist} removeItem={this.removeItem}/>
            </div>
		);
	}
}

export default ToDoClass;