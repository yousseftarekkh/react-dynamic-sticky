### Overview
---
This component is a further enhancement for the pre-implemented component [Sticky](https://www.npmjs.com/package/react-sticky-el) for comprehending how the used component "Sticky" works : https://www.npmjs.com/package/react-sticky-el .

### Basic Example
---
The content that you want to stick should be wrapped in the <DynamicSticky /> tag with boundaries wrapped in the <StickyContainer /> tag.
This component differs from the one on [react-sticky-el](https://www.npmjs.com/package/react-sticky-el) through the mode props provided, dynamically switching its value between "top" and "bottom" considering the scrolled height in the <StickyContainer />and the dynamic position of the element in the scrolling area (StickyContainer).
