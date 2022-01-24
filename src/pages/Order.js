import MoviesDb from "../database/MoviesDb";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import React, { useState } from "react";

const Order = () => {
  // const setMovie = {
  //   title:'test'
  // };
  const [enteredTitle, setEnteredTitle] = useState("");

  
  const [show, setShow] = useState(false);
  const onClick = () => setShow(true);
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
    onClick();
  };
  const movie = MoviesDb.find((quote) => enteredTitle);
  return (
    <div className="row">
      <div className="col-sm-9">
        <h1>Order</h1>

        <Dropdown
          placeholder="Select a movie"
          options={movieDropdown}
          onChange={titleChange}
        />
        <p>{show ? "SHOW" : "HIDE"}</p>

        <div className={showClass}>
          <h5>{show ? movie.title : null}</h5>
          <p>
            Available seats: {show ? movie.seat.available : null}/
            {show ? movie.seat.max : null}
          </p>
          <p>{show ? movie.price : null} Kn</p>
          <label>
            How many tickets do you want?:
            <input type="number" name="amount" min="1" />
          </label>
          <input type="submit" value="Add" />
        </div>
      </div>
      <div className="col-sm-3">
        <h1>Bill</h1>
        <p className={showClass}>
          {show ? movie.title : null} - {show ? ticketAmount : null} x ticket
        </p>
        <p className={showClass}>{show ? movie.price : null} Kn</p>
      </div>
    </div>
  );
};

export default Order;
