import React from 'react'
import ReactDOM from 'react-dom'


class Content extends React.Component {
    render() {
        return (
            <div>{this.props.content}</div>
        );
    }
}

class Stages extends React.Component {
  render() {
    return (
      <div>{this.props.stage}</div>
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
    }

    nextHandler() {
        // console.log("nextBtn");
        this.props.nextBtn();
    }

    previousHandler() {
        // console.log("previousBtn");
    }

    render() {
        return (
            <div>
                <button onClick={this.previousBtn}>Back</button>
                <button onClick={this.nextBtn}>Next</button>
            </div>
        );
    }
}

class ModalWindow extends React.Component {
    constructor(props) {
        super(props); //?
        this.state = {stage: 1}
        this.next = this.next.bind(this); 
        this.previous = this.previous.bind(this); 
    }

    // Need to change state after buttons click. Need to use click handlers from Buttons to change state here, 
    next() {
        this.setState({ stage: this.state.stage + 1});  // increment state.stage
        console.log(this.state.stage);
    }

    previous() {
        console.log("previous clicked");
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