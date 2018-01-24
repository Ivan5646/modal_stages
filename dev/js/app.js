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
        this.state = {stage: 1, question: props.questions[0].question}  // need to pass const Questions here...? have to pass the whole array and change state to display required question. Now const Quesitons belongs to props.questions
        // this.state = {mystate: props.questions} // worked
        this.next = this.next.bind(this); 
        this.previous = this.previous.bind(this); 
    }
     
    next() {
        // this.setState({ stage: this.state.stage + 1});  // increment state.stage
        // console.log("next: " + this.state.stage);
        // console.log("state question: " + this.state.question);

        // console.log(this.state);

        const myQuestion = this.props.questions[0];
        console.log(myQuestion);
    }

    previous() {
        this.setState({ stage: this.state.stage - 1});
        console.log("previous: " + this.state.stage);
    }

    render() {
        const Stage = this.state.stage;
        // const question = this.state.

        return (
            <div>
                <Stages stage={Stage}/>
                <Content content={this.props.questions[0].question}/>
                <Buttons nextBtn={this.next.bind(this)} previousBtn={this.previous.bind(this)} />
            </div>
        );
    }
}

const Questions = [
    {sequence: "1", question: "What is you name?"},
    {sequence: "2", question: "How did you know about us?"},
    {sequence: "3", question: "What is your phone number?"}
];

ReactDOM.render(
    <ModalWindow questions={Questions}/>,
    document.getElementById('root')
);