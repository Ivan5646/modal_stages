import React from 'react'
import ReactDOM from 'react-dom'
// import '../../src/css/main.css';
import '../scss/main.scss';

class Content extends React.Component {
    render() {
        return (
            <div className="content">{this.props.content}</div>
        );
    }
}

class Stages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { /* initial state */ };
        this.handleCLick = this.handleCLick.bind(this);
    }

    handleCLick() {
        this.props.handleStage();
    }

    // dispatching an action based on state change
    componentWillUpdate(nextProps, nextState) {
        if (nextProps) {
            
        }
    }

    render() {
        // let active = "stages_num";
        // if (this.props.stage == 1 ) {
        //     console.log(this.props.stage);
        //     // active = "stageActive";
        // }

        let active = "stageActive";
        if (this.props.stage == 1) {
            // assign active to stage1. khui prossysh' kak eto sdelat, takzhe takoy sposob ne yavlyatse react-vernym
            console.log(this.props.stage);
        }else if (this.props.stage == 2) {
            console.log(this.props.stage);
        }else{
            console.log(this.props.stage);
        }

        return (
            <div className="stages">
                <div className="stages_nav">
                    <div className="stages_num" onClick={this.handleCLick} ref="stage1">{this.props.stages[0]}</div>
                    <div className="stages_num" onClick={this.handleCLick} ref="stage2">{this.props.stages[1]}</div>
                    <div className="stages_num" onClick={this.handleCLick} ref="stage3">{this.props.stages[2]}</div>
                </div>
                <div className="stages_stage">{this.props.stage}</div> {/* gets updated as a state in ModalWindow */}
            </div>
        );
    }
}

class Buttons extends React.Component {
    constructor(props) {
        super(props); 
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
        this.state = {stage: 0}  //have to go through Quetion object
        this.next = this.next.bind(this); 
        this.previous = this.previous.bind(this); 
        this.highlightStage = this.highlightStage.bind(this); 
    }
     
    next() {
        if (this.state.stage < 2) {
            this.setState({ stage: this.state.stage += 1});  // increment state.stage
            console.log("next: " + this.state.stage);
        }else{
            console.log("next - over the limit");
        }
    }

    previous() {
        if (this.state.stage > 0) {
            this.setState({ stage: this.state.stage - 1});
            console.log("previous: " + this.state.stage);
        }else{
            console.log("previous - under the limit");
        }
    }

    highlightStage() {
        console.log("hi from highlightStage method of ModalWindow");
    }

    render() {
        const Stage = Questions[this.state.stage].sequence; //this.state.stage; 
        const Question = Questions[this.state.stage].question;
        var stages = ["1", "2", "3"];

        return (
            <div className="modalWindow">
                <Stages stage={Stage} stages={stages} handleStage={this.highlightStage.bind(this)}/>
                <Content content={Question}/>
                <Buttons nextBtn={this.next.bind(this)} previousBtn={this.previous.bind(this)} />
            </div>
        );
    }
}

var Questions = [ // need to convert to object
    {sequence: "1", question: "What is you name?"},
    {sequence: "2", question: "How did you know about us?"},
    {sequence: "3", question: "What is your phone number?"}
];

// var Questions = {
//     sequence1: {question: "What is you name?"},
//     sequence2: {question: "How did you know about us?"},
//     sequence3: {question: "What is your phone number?"},
// }

ReactDOM.render(
    <ModalWindow questions={Questions}/>,
    document.getElementById('root')
);