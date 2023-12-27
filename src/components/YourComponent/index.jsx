import React from "react";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import Button from "../Button";

class YourComponent extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  handleScrollTo() {
    scroll.scrollTo(200);
  }

  render() {
    return (
      <div>
        <Button
          title={"<"}
          color={"text-slate-50"}
          onClick={this.handleScrollTo}
        ></Button>
        <div></div>
      </div>
    );
  }
}

export default YourComponent;
