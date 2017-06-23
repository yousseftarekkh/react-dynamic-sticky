import React from 'react';
import Sticky from 'react-sticky-el';
import './index.css';

export default class DynamicSticky extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isTop: true,
    };
    // this.isTop = false;
  }
  componentDidMount(){
    document.getElementsByClassName("scroll-area")[0].addEventListener('scroll', ()=>{
      var scrolled = document.getElementsByClassName("scroll-area")[0].scrollTop;
      var scrollingheight = parseInt(document.getElementsByClassName("scroll-area")[0].style.height,10);
      var content = document.getElementsByClassName("contentNSelected").length>0?document.getElementsByClassName("contentNSelected")[0]:null;
      // console.log(content);
      if(content !== null) {
        var index = this.props.number;
        // console.log(content.clientHeight*(index+1)+content.clientHeight<scrollingheight+scrolled);
        this.setState({
          isTop: content.clientHeight*(index+1)+content.clientHeight<scrollingheight+scrolled?true:false,
        });
      }
    });
  }
  render () {
    return (
      <Sticky className="contentNSelected" mode={this.state.isTop?"top":"bottom"} scrollElement=".scroll-area">
        {this.props.children}
      </Sticky>
    )
  }
}
