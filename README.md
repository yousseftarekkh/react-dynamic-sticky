### Overview
---
This component is a further enhancement of the pre-implemented component [Sticky](https://www.npmjs.com/package/react-sticky-el) to comprehend how the used "Sticky" component works : https://www.npmjs.com/package/react-sticky-el .

### Basic Explanation
---
- Allows multiple sticky elements.
- The contents that you want to stick should be wrapped in the <DynamicSticky>DynamicSticky</DynamicSticky> tag with boundaries wrapped in the <StickyContainer /> tag.
This component differs from the one on [react-sticky-el](https://www.npmjs.com/package/react-sticky-el) through the mode props provided, dynamically switching its value between "top" and "bottom" considering the scrolled height in the <StickyContainer />and the dynamic position of the element in the scrolling area (StickyContainer).
