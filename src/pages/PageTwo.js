import { Component } from "react";

export default class PageTwo extends Component {
  render() {
    const fakeCardCredentials = '';

    const getData= (event) => {
        console.log(event.value)
    }

    const Submit= () => {
        alert('222')
    }
    return (
      <div>
        <h5>
          You have ordered {this.props.seats} seats for movie {this.props.movie}
          .
        </h5>

        <h5>Total bill: {this.props.bill * this.props.seats}$</h5>

        <label>
          <h5>Enter your Fake Card Id</h5>
          <input type="text" min="1" onChange={getData} />
        </label>

        <button type="submit" className="btn btn-primary" onClick={Submit}>Submit</button>
      </div>
    );
  }
}
