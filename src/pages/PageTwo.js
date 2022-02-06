import { Component } from "react";
import "../style/Order.css";
export default class PageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPayed: false,
      value: ''
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
       this.setState({value: e.target.value})
    }
 }
  render() {
  
    const Submit = () => {
      this.state.isPayed = true;
    };

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
            <input type="text" minLength={12} maxLength={12} value={this.state.value} onChange={this.onChange} />
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
