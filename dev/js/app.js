var Comment = React.CreateClass({
    getInitialState: function () {
        return {editing: false}
    },
    edit: function () {
        this.setState({editing: true});
    },
    remove: function () {
        console.log("Removing comment");
    },
    save: function () {
        var val = this.refs.newText.value;
        console.log("New comment: " + val);
        this.setState({editing: false});
    },
    renderNormal: function () {
        return (
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button onclick={this.edit} className="button-primary">Edit</button>
                <button onclick={this.remove} className="button-danger">Remove</button>
            </div>
        );
    },
    renderForm: function () {
        return (
            <div className="commentContainer">
                <textarea ref="newText" defaultvalue={this.props.children}></textarea>
                <button onclick={this.save} className="button-success">Save</button>
            </div>
        );
    },
    render: function() {
        if(this.state.editing){
            return this.renderForm();
        }else{
            return this.renderNormal();
        }
    }
});

ReactDOM.render(
    <div className="board">
        <Comment>Hey my name is Bucky</Comment>
        <Comment>Beans</Comment>
        <Comment>Tuna</Comment>
    </div>
    document.getElementById("root");
);


//https://www.youtube.com/watch?v=bBiITqaO08E&list=PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA&index=10   10 - Multiple Child Components