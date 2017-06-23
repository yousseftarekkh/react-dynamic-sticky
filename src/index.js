import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-button';
import './index.css';
import StickyContainer from './StickyContainer.js';
import DynamicSticky from './DynamicSticky.js'

var tasksList = ["Task 1", "Task 2"];
class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tasks: props.tasks,
      i: 3,
      class: "contentN"
    };
    this.addContent = this.addContent.bind(this);
  }
  addContent(){
    var updatedTasks =  this.state.tasks;
    updatedTasks.push("Task "+this.state.i);
    this.setState({
      tasks: updatedTasks,
      i: this.state.i+1,
    });
  }
  render() {
    return(
    <div>
      <Button onClick={this.addContent}>More Tasks</Button>
      <StickyList className="tasklist" tasks={this.state.tasks}/>
    </div>)
  }
}
class StickyList extends React.Component {
  constructor() {
    super();
    this.state = {
      i: -1,
    }
  }
  handleClick(num) {
    this.setState({
      i: num,
    })
  }
  render(){
    var items = this.props.tasks.map((elem, i) => {
      if(this.state.i===i)
        return <DynamicSticky className="selectedSticky" number={i} key= {i}><li key= {i} onClick={() => this.handleClick(i)}>{elem}</li></DynamicSticky>
      return <li key= {i} className="contentN" onClick={ () => this.handleClick(i)}>{elem}</li>
    })
    return (
      <div>
        <StickyContainer>
            {items}
        </StickyContainer>
      </div>
    )
  }
}

ReactDOM.render(
  <Main tasks={tasksList}/>,
  document.getElementById('root')
);
