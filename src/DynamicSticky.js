import React from 'react';
import Sticky from 'react-sticky-el';
import './index.css';

export default class DynamicSticky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: false,
    }
  }
  onScroll(){
    var scrolled = document.getElementsByClassName("scroll-area")[0].scrollTop;
    var scrollingheight = parseInt(document.getElementsByClassName("scroll-area")[0].style.height,10);
    var content = document.getElementsByClassName("contentNSelected").length>0?document.getElementsByClassName("contentNSelected")[this.props.containerSelected.indexOf(this.props.number)]:null;
    if(content !== null) {
       var index = this.props.number;
      this.setState({
      isTop: content.clientHeight*(index+1)+content.clientHeight<scrollingheight+scrolled?true:false,
      });
    }
  }
  componentDidMount(){
    this.listener = this.onScroll.bind(this);
    document.getElementsByClassName("scroll-area")[0].addEventListener('scroll',this.listener);
  }
  render () {
    return (
      <Sticky className="contentNSelected" mode={this.state.isTop?"top":"bottom"} scrollElement=".scroll-area" style={{zIndex:this.state.isTop?this.props.number:this.props.numElems-this.props.number}}>
        {this.props.children}
      </Sticky>
    )
  }
}
