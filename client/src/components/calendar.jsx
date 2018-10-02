import React, { Component } from "react";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isBusy: false,
      isEmpty: false,
      isLoading: true
    };
  }

  componentDidMount () {
    this.getEvents();
    setInterval(() => {
      this.tick();
    }, 1000);
    setInterval(() => {
      this.getEvents();
    }, 60000);
  }

  getEvents() {
  }


  render() {
    return (
      <div>
        <span>this is the calendar</span>
      </div>
    )
  }
}

export default Calendar;
