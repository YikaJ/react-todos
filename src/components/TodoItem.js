/**
 * Created by YikaJ on 15/6/17.
 */
'use strict';
export default class TodoItem extends React.Component{

    constructor(){
        super();
        this.state = {
            isShowDelete: false
        }
    }

    handlerChange(){
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }

    handlerMouseOver(e){
        this.setState({isShowDelete: true});
    }

    handlerMouseOut(e){
        this.setState({isShowDelete: false});
    }

    handlerDelete(){
        this.props.deleteTodo(this.props.index);
    }

    render(){
        let showStyle = this.state.isShowDelete ? {display: 'inline'} : {display: 'none'};
        let doneStyle = this.props.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'};

        return (
            <li
                onMouseOver={this.handlerMouseOver.bind(this)}
                onMouseOut={this.handlerMouseOut.bind(this)}
            >
                <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)}/>
                <span style={doneStyle}>{this.props.text}</span>
                <button onClick={this.handlerDelete.bind(this)} style={showStyle} className="fr">删除</button>
            </li>
        )
    }
}