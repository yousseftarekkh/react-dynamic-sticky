
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
    };
    this.addContent = this.addContent.bind(this);
  }
  addContent(){
    var updatedTasks =  this.state.tasks;
    updatedTasks.push("Task "+this.state.i);
    this.setState({
      tasks: updatedTasks,
      i: this.state.i+1,
      class: "contentN"
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
      class: "contentN",
      bottomSelectedOffSet : 0,
      i: -1,
      isTop: true,
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
        return <DynamicSticky className="selectedSticky" key= {i}><li key= {i} className={"contentNSelected"} onClick={() => this.handleClick(i)}>{elem}</li></DynamicSticky>
      return <li key= {i} className={"contentN"} onClick={ () => this.handleClick(i)}>{elem}</li>
    })
    return (
      <div>
        <StickyContainer>
            {items}
        </StickyContainer>
        <div className={this.state.i === -1?"contentNSelected":"ref"} style={{display:"none"}}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Main tasks={tasksList}/>,
  document.getElementById('root')
);
