import React from 'react'
import ReactDOM from 'react-dom'


class Comment extends React.Component {
      constructor(props) {
        super(props); 
        this.state = {editing: false}
        this.edit = this.edit.bind(this); 
        this.save = this.save.bind(this); 
    }

    // getInitialState: function () {
    //     return {editing: false}
    // }

    edit() {
        this.setState({editing: true});
    }

    remove() {
        console.log("Removing comment");
        this.props.deleteFromBoard(this.props.index)
    }

    save() {
        this.props.updateCommentText(this.refs.newText.value, this.props.index);
        // var val = this.refs.newText.value;
        // console.log("New comment: " + val);
        this.setState({editing: false});
    }

    renderNormal() {
        return (
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button onClick={this.edit} className="button-primary">Edit</button>
                <button onClick={this.remove} className="button-danger">Remove</button>
            </div>
        );
    }

    renderForm() {
        return (
            <div className="commentContainer">
                <textarea ref="newText" defaultvalue={this.props.children}></textarea>
                <button onClick={this.save} className="button-success">Save</button>
            </div>
        );
    }

    render() {
        if(this.state.editing){
            return this.renderForm();
        }else{
            return this.renderNormal();
        }
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {comments: ["I like bacon", "Want to get an icecream?", "Ok, we have enough comment now"]}
        this.updateComment = this.updateComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.eachComment = this.eachComment.bind(this);
    }

    removeComment(i) {
        console.log("Removing comment: " + i);
        var arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({comments: arr})
    }

    updateComment(newText, i) {
        console.log("Updating comment");
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({comments: arr})
    }

    eachComment(text, i) {
        return (
            <Comment key={i} index={i} updateCommentText={this.updateComment.bind(this)} deleteFromBoard={Board.removeComment}>
                {text}
            </Comment>
            );
    }

    render() {
        return  (
            <div className="board">
                {
                    this.state.comments.map(this.eachComment)
                }
            </div>
        )
    }

}

ReactDOM.render(<Board />, document.getElementById("root"));

