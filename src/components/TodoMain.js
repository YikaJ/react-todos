/**
 * Created by YikaJ on 15/6/16.
 */
'use strict';
import React from "react";
import TodoItem from "./TodoItem.js"
export default class TodoMain extends React.Component{
    render(){
        return (
            <ul className="todo-list">
                {this.props.todos.map((todo, index) => {
                    return <TodoItem key={index} {...todo} index={index} {...this.props}/>
                })}
            </ul>
        )
    }
}