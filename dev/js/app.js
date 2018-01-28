import React from 'react'
import ReactDOM from 'react-dom'

class Content extends React.Component {
    render() {
        return (
            <div className="content">{this.props.content}</div>
        );
    }
}

class Stages extends React.Component {
  render() {
    return (
      <div className="stage">{this.props.stage}</div>
    );
  }
}

function nextStage(currentStage) {
    currentStage += 1;
    console.log("nextStage function");
    return currentStage;
}

class Buttons extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {stage: 1}
        this.nextHandler = this.nextHandler.bind(this); 
        this.previousHandler = this.previousHandler.bind(this); 
    }

    nextHandler() {
        // console.log("nextHandler");
        this.props.nextBtn();
    }

    previousHandler() {
        // console.log("previousHandler");
        this.props.previousBtn();
    }

    render() {
        return (
            <div>
                <button onClick={this.previousHandler}>Back</button>
                <button onClick={this.nextHandler}>Next</button>
            </div>
        );
    }
}

class ModalWindow extends React.Component {
    constructor(props) {
        super(props); //?
        this.state = {stage: 1, question: props.questions.sequence1.question}  
        this.next = this.next.bind(this); 
        this.previous = this.previous.bind(this); 
    }
     
    next() {
        this.setState({ stage: this.state.stage + 1});  // increment state.stage
        console.log("next: " + this.state.stage);
        console.log(this.state);
    }

    previous() {
        this.setState({ stage: this.state.stage - 1});
        console.log("previous: " + this.state.stage);
    }

    render() {
        const Stage = this.state.stage;
        const Question = this.state.question;

        return (
            <div>
                <Stages stage={Stage}/>
                <Content content={Question}/>
                <Buttons nextBtn={this.next.bind(this)} previousBtn={this.previous.bind(this)} />
            </div>
        );
    }
}

// var questionsArray = [ // need to convert to object
//     {sequence: "1", question: "What is you name?"},
//     {sequence: "2", question: "How did you know about us?"},
//     {sequence: "3", question: "What is your phone number?"}
// ];

var Questions = {
    sequence1: {question: "What is you name?"},
    sequence2: {question: "How did you know about us?"},
    sequence3: {question: "What is your phone number?"},
}

ReactDOM.render(
    <ModalWindow questions={Questions}/>,
    document.getElementById('root')
);