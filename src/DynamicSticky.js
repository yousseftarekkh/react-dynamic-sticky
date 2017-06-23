import React from 'react';
import Sticky from 'react-sticky-el';
import './index.css';

export default class DynamicSticky extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isTop: true,
    };
  }
  onScroll = () => {
    var scrolled = document.getElementsByClassName("scroll-area")[0].scrollTop;
    var scrollingheight = parseInt(document.getElementsByClassName("scroll-area")[0].style.height,10);
    var content = document.getElementsByClassName("contentNSelected").length>0?document.getElementsByClassName("contentNSelected")[0]:null;
    if(content !== null) {
      var index = this.props.number;
      this.setState({
        isTop: content.clientHeight*(index+1)+content.clientHeight<scrollingheight+scrolled?true:false,
      });
      setTimeout(console.log(this.state.isTop), 10);
    }
  }
  componentDidMount() {
    this.listener = this.onScroll.bind(this);
    document.getElementsByClassName("scroll-area")[0].addEventListener('scroll', this.listener);
  }
  componentWillUnmount() {
      document.getElementsByClassName("scroll-area")[0].removeEventListener('scroll', this.listener);
  }
  render () {
    return (
      <Sticky className="contentNSelected" mode={this.state.isTop?"top":"bottom"} scrollElement=".scroll-area">
        {this.props.children}
      </Sticky>
    )
  }
}
