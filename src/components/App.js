/**
 * Created by YikaJ on 15/6/16.
 */
'use strict';
import React from "react";
import LocalDb from "localDb";

import TodoHeader from "./TodoHeader.js";
import TodoMain from "./TodoMain.js";
import TodoFooter from "./TodoFooter.js";

class App extends React.Component {
    constructor(){
        super();
        this.db = new LocalDb('React-Todos');
        this.state = {
            todos: this.db.get("todos") || [],
            isAllChecked: false
        };
    }

    allChecked(){
        let isAllChecked = false;
        if(this.state.todos.every((todo)=> todo.isDone)){
            isAllChecked = true;
        }
        this.setState({todos: this.state.todos, isAllChecked});
    }

    addTodo(todoItem){
        this.state.todos.push(todoItem);
        this.allChecked();
        this.db.set('todos',this.state.todos);
    }

    changeTodoState(index, isDone, isChangeAll=false){
        if(isChangeAll){
            this.setState({
                todos: this.state.todos.map((todo) => {
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked: isDone
            })
        }else{
            this.state.todos[index].isDone = isDone;
            this.allChecked();
        }
        this.db.set('todos', this.state.todos);
    }

    clearDone(){
        this.setState({
            todos: this.state.todos.filter(todo => !todo.isDone)
        });
        this.db.set('todos', this.state.todos);
    }

    deleteTodo(index){
        this.state.todos.splice(index, 1);
        this.setState({todos: this.state.todos});
        this.db.set('todos', this.state.todos);
    }

    render(){
        var props = {
            todoCount: this.state.todos.length || 0,
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo)=>todo.isDone)).length || 0
        };
        return (
            <div className="panel">
                <TodoHeader addTodo={this.addTodo.bind(this)}/>
                <TodoMain deleteTodo={this.deleteTodo.bind(this)} todos={this.state.todos} changeTodoState={this.changeTodoState.bind(this)}/>
                <TodoFooter isAllChecked={this.state.isAllChecked} clearDone={this.clearDone.bind(this)} {...props} changeTodoState={this.changeTodoState.bind(this)}/>
            </div>
        )
    }
}
React.render(<App/>, document.getElementById("app"));
