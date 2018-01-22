import React from 'react'
import ReactDOM from 'react-dom'


class Comment extends React.Component {
      constructor(props) {
        super(props); 
        this.state = {editing: false}
        // this.next = this.next.bind(this); 
    }

    // getInitialState: function () {
    //     return {editing: false}
    // }

    edit() {
        this.setState({editing: true});
    }

    remove() {
        console.log("Removing comment");
    }

    save() {
        var val = this.refs.newText.value;
        console.log("New comment: " + val);
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

ReactDOM.render(
    <div className="board">
        <Comment>Hey my name is Bucky</Comment>
        <Comment>Beans</Comment>
        <Comment>Tuna</Comment>
    </div>,
    document.getElementById("root")
);


//https://www.youtube.com/watch?v=bBiITqaO08E&list=PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA&index=10   10 - Multiple Child Components