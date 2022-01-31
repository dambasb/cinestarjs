import { Component } from "react";
import "./Order.css";
export default class PageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPayed: false,
    };
  }
  render() {
    const getData = (event) => {
      console.log(event.value);
    };

    const Submit = () => {};

    return (
      <div>
        <div className={this.state.isPayed ? "hide" : ""}>
          <h5>
            You have ordered {this.props.seats} seats for movie{" "}
            {this.props.movie}.
          </h5>

          <h5>Total bill: {this.props.bill * this.props.seats}$</h5>

          <label>
            <h5>Enter your Fake Card Id</h5>
            <input type="text" min="1" onChange={getData} />
          </label>

          <button type="submit" className="btn btn-primary" onClick={Submit}>
            Submit
          </button>
        </div>
        <div>
          <div className={!this.state.isPayed ? "hide" : ""}>
            <h5>Thank you!</h5>
            <h5>Enjoy the move.</h5>
          </div>
        </div>
      </div>
    );
  }
}
