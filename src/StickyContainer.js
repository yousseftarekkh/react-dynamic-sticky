import React from 'react';

export default class StickyContainer extends React.Component {
  render(){
    return (
      <div {...this.props} className="scroll-area" style={{height: '200px', overflow: 'auto'}}>
        <ul className="list">
          {this.props.children}
        </ul>
        <div className="contentNSelected" style={{display:"none"}}/>
      </div>
    )
  }
}
