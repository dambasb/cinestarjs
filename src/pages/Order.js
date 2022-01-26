import MoviesDb from "../database/MoviesDb";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import React, { useState } from "react";

const Order = () => {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [show, setShow] = useState(false);
  const getShow = () => setShow(true);
  const [enteredAmount, setEnteredAmount] = useState(1);
  var showClass = !show ? 'active' : '';
  const movieDropdown = MoviesDb.map((a) => a.title);

  const ticketAmount = 1;

  const titleChange = (event) => {
    console.log(event);
    setEnteredTitle(event.value);
    const movie = MoviesDb.find((quote) => enteredTitle);
    console.log(movie);
    const setMovie = {
      title: movie.title,
    };
    getShow();
  };

  const getAmount = (event) => {
    console.log('Click:'+ event.target.value);
    setEnteredAmount(event.target.value);
    //const enteredAmount = event.target.value;
    console.log(enteredAmount);
  }
  const movie = MoviesDb.find((quote) => enteredTitle);

  const pay = () => {
    alert("Enjoy the movie!")
  }

  return (
    <div className="row">
      <div className="col-sm-9">
        <h1>Order</h1>

        <Dropdown
          placeholder="Select a movie"
          options={movieDropdown}
          onChange={titleChange}
        />

        <div className={showClass}>
          <h5>{show ? movie.title : null}</h5>
          <p>
            Available seats: {show ? movie.seat.available : null}/
            {show ? movie.seat.max : null}
          </p>
          <p>{show ? movie.price : null} Kn</p>
          <label>
            How many tickets do you want?:
            <input type="number" min="1" value={enteredAmount} onChange={getAmount} />
          </label>

        </div>
      </div>
      <div className="col-sm-3">
        <h1>Bill</h1>
        <p className={showClass}>
          {show ? movie.title : null} - {show ? enteredAmount : null} x ticket
        </p>
        <p className={showClass}>{show ? movie.price : null} Kn</p>
        <h3 className={showClass} >Total</h3>
        <p className={showClass} >{show ? movie.price * enteredAmount : null} Kn</p>
        <button className={showClass} onClick={pay}>Pay</button>
      </div>
    </div>
  );
};

export default Order;
