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
        super(props); //?
        this.state = {stage: 1}
        // this.next = this.next.bind(this); 
    }

    next() {
        this.setState({ stage: this.state.stage + 1});  // increment state.stage
        console.log(this.state.stage);
      }

      previous() {
        console.log("previous clicked");
      }

    render() {
        return (
            <div>
                <button onClick={nextStage}>Back</button>
                <button onClick={this.next}>Next</button>
            </div>
        );
    }
}

class ModalWindow extends React.Component {
    constructor(props) {
        super(props); //?
        this.state = {stage: 1}
        // this.next = this.next.bind(this); 
    }

    render() {
        const Stage = this.state.stage;
        // const question = this.state.

        return (
            <div>
                <Stages stage={Stage}/>
                <Content content={this.props.questions[0].question}/>
                <Buttons/>
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