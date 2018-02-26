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
        //this.state = { active: null }; // have to pass state here from ModalWindow?
        this.toggle =  this.toggle.bind(this);
        this.myColor =  this.myColor.bind(this);
        this.testColor =  this.testColor.bind(this);
    }

  toggle(position) {
    this.props.handleStage(position);
  }
  
  myColor(position) {
    this.props.changeColor(position);
    console.log("myColor position value: " + position);
  }

  testColor(){
    return this.props.changeColorTest();
  }

    render() {
        return (
            <div className="stages">
                <div className="stages_nav">
                    <div style={{background: this.testColor()}} onClick={() => {this.toggle(0)}}>
                        {this.props.stages[0]}
                    </div>
                    <div style={{background: this.myColor(1)}} onClick={() => {this.toggle(1)}}>
                        {this.props.stages[1]}
                    </div>
                    <div style={{background: this.myColor(2)}} onClick={() => {this.toggle(2)}}>
                        {this.props.stages[2]}
                    </div> 
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
        this.switchStage = this.switchStage.bind(this); 
        this.changeStageColor = this.changeStageColor.bind(this); 
        this.modalWindowColor = this.modalWindowColor.bind(this); 

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

    switchStage(position) { // this is gonna be the click handler for the stage num
        this.setState({stage: position});
    }

    changeStageColor(position) {
        if (this.state.stage == position) {
            console.log("changeStageColor position value, inside of if statement: " + position);
            return "blue";
        }
        console.log("changeStageColor returns out of if statement position value, " + position);
        return "";
    }

    modalWindowColor() {
        return "green";
    }

    render() {
        const Stage = Questions[this.state.stage].sequence; //this.state.stage; 
        const Question = Questions[this.state.stage].question;
        var stages = ["1", "2", "3"];

        return (
            <div className="modalWindow">
                <Stages stage={Stage} stages={stages} handleStage={this.switchStage.bind(this)} changeColor={this.changeStageColor.bind(this)} changeColorTest={this.modalWindowColor.bind(this)}/>
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