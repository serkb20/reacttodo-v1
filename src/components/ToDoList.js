
import React from 'react';
import ToDoElement from './ToDoElement';

class ToDoList extends React.Component {

  render() {
  	const { todolist, removeItem } = this.props;
    return (
    <div>
      {
        todolist.map((user, i) => {
          return (
            <ToDoElement 
              key={i}
              task={todolist[i]}
              removeItem={removeItem}
            />
          );
        })
      }
    </div>
    );
  }
}

export default ToDoList;