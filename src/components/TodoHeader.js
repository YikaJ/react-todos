/**
 * Created by YikaJ on 15/6/16.
 */
'use strict';
import React from "react";

class TodoHeader extends React.Component {

    handlerKeyUp(event){
        if(event.keyCode === 13){
            let value = event.target.value;

            if(!value) return false;

            let newTodoItem = {
                text: value,
                isDone: false
            };
            event.target.value = "";
            this.props.addTodo(newTodoItem);
        }
    }

    render(){
        return (
            <div className="panel-header">
                <input ref="todoInput" onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="what's your task ?"/>
            </div>
        )
    }
}

export default TodoHeader;

