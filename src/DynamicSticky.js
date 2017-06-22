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
  componentWillMount(){
    this.isTop = false;
  }
  componentDidMount(){
    document.getElementsByClassName("scroll-area")[0].addEventListener('scroll', ()=>{
      var scrolled = document.getElementsByClassName("scroll-area")[0].scrollTop;
      var scrollingheight = parseInt(document.getElementsByClassName("scroll-area")[0].style.height,10);
      // var nodes = Array.prototype.slice.call( document.getElementsByClassName('list')[0].children);
      var content = document.getElementsByClassName("contentNSelected").length>0?document.getElementsByClassName("contentNSelected")[this.props.containerSelected.indexOf(this.props.number)]:null;
      // console.log(document.getElementsByClassName("contentNSelected"));
      // console.log(this.props.containerSelected.indexOf(this.props.number));
      // console.log(this.props.number);
      // console.log(this.props.number.parseInt);
      // console.log(this.props.containerSelected);
      if(content !== null) {
        // var index = content !== null?nodes.indexOf(content.parentElement):-1;
         var index = this.props.number;
        // console.log(index);
        this.setState({
        isTop: content.clientHeight*(index+1)<scrollingheight+scrolled?true:false,
        });
        //  setTimeout(console.log(this.props.number +" "+ this.state.isTop+" | "+ "Index: "+index), 10);
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
