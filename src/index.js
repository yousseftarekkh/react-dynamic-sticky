import React from 'react';
import Button from 'react-button';
import ReactDOM from 'react-dom';
import Sticky from 'react-sticky-el';
import StickyContainer from './StickyContainer.js';
import './index.css';

var tasksList = ["Task 1", "Task 2"];
class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tasks: props.tasks,
      i: 3,
      selectedElems: [],
    };
    this.addContent = this.addContent.bind(this);
  }
  addContent(){
    var updatedTasks =  this.state.tasks;
    updatedTasks.push("Task " + this.state.i);
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
      selected: [],
      isTop: true,
    }
  }
  handleClick(num) {
    var updatedSelection =  this.state.selected;
    updatedSelection.push(num);
    this.setState({
      selected: updatedSelection,
    })
  }
  render(){
    var items = this.props.tasks.map((elem, i) => {
      if(this.state.selected.indexOf(i)!==-1)
        return <Sticky scrollElement=".scroll-area" className="selectedOne" key= {i}><li key= {i} className={"contentNSelected"} onClick={() => this.handleClick(i)}>{elem}</li></Sticky>
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
