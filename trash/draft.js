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