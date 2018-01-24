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

