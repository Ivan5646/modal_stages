const Questions = [
    {sequence: "1", question: "What is you name?"},
    {sequence: "2", question: "How did you know about us?"},
    {sequence: "3", question: "What is your phone number?"}
];
//need to convert to
const questionObj = {
    seq1: {sequence: "1", question: "What is you name?"},
    seq2: {sequence: "2", question: "How did you know about us?"},
    seq3: {sequence: "3", question: "What is your phone number?"}
}


// function
Questions.map(
	function(value, index){
		index: value;
	}
)


//conver array to object 2, using keys as first level obj
var Questions = {}; //create the empty output object
questionsArray.forEach( function(item, index){ 
  var key = Object.keys(item)[0]; //take the first key from every object in the array
  Questions[ key ] = item [ key ];  //assign the key and value to output obj
  //console.log(Questions);
});


class Stages extends React.Component {
    render() {
        return (
            <div>{this.props.stages}</div>
        );
    }
}


// active highlight  https://stackoverflow.com/questions/42101150/change-color-of-selected-element-react
var List = React.createClass({
  getInitialState: function(){
    return { active: null}
  },

  toggle: function(position){
    if (this.state.active === position) {
      this.setState({active : null})
    } else {
      this.setState({active : position})
    }
  },
  
  myColor: function(position) {
    if (this.state.active === position) {
      return "blue";
    }
    return "";
  },

  render: function () {
    return (
      <div>
        <li style={{background: this.myColor(0)}} onClick={() => {this.toggle(0)}}>one</li>
        <li style={{background: this.myColor(1)}} onClick={() => {this.toggle(1)}}>two</li>
        <li style={{background: this.myColor(2)}} onClick={() => {this.toggle(2)}}>three</li>
      </div>
    );
  }
});
ReactDOM.render(
    <List/>,
    document.getElementById('app')
);