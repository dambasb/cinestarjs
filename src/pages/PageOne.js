import MoviesDb from "../database/MoviesDb";
import Select from "react-select";
import "react-dropdown-now/style.css";
import React, { useState } from "react";
import "../style/PageOne.css";
import { Seats } from "../database/Seats";

const PageOne = ({ childToParent, goNextPage }) => {
  const [enteredTitle, setEnteredTitle] = useState(MoviesDb.label);
  const [moviePrice, setMoviePrice] = useState(MoviesDb.price);

  // Get values from Select element
  const getEnteredTitle = (e) => {
    setEnteredTitle(e.label);
    setMoviePrice(e.price);
  };

  const seatList = Seats;
  const [amountOfSeats, setAmountOfSeats] = useState(0);
  // Toggle seats
  const takeSeat = (rowId, seatId) => {
    // Select seat
    const toogleSeat = document.getElementById(seatId);

    /**
     *  If sit is not selected add class "selected" to it and add seat to
     *
     *  else remove class "selected" and remove seat
     *
     */
    if (toogleSeat.className === "seat") {
      toogleSeat.className = "seat selected";
      setAmountOfSeats(1 + amountOfSeats);
    } else {
      toogleSeat.classList.remove("selected");
      setAmountOfSeats(amountOfSeats - 1);
    }
  };

  return (
    <div>

      <h5>Which movie would you like to watch?</h5>
      <Select options={MoviesDb} onChange={getEnteredTitle} />
      {moviePrice && (
        <p className="priceOfMovie">
          Price of Movie <b>'{enteredTitle}'</b> is <b>{moviePrice} $</b>.
        </p>
      )}

      <div className={!enteredTitle ? 'hide':''}>
        <h5>Which seat do you want?</h5>
        <div className="groupSeats">
          <ul className="showcase ">
            <li>
              <div className="seat"></div>
              <small>N/A</small>
            </li>
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat taken"></div>
              <small>Taken</small>
            </li>
          </ul>

          <div className="">
            <div className="screen"></div>

            {seatList.map((seat) => {
              // Map all row
              return (
                <div key={seat.id} className="row">
                  {seat.seats.map((singleSeat) => {
                    // Map and display all seats
                    return (
                      <div
                        id={singleSeat.id}
                        key={singleSeat.id}
                        className={singleSeat.css}
                        onClick={(e) => takeSeat(seat.id, singleSeat.id)}
                      >
                        {singleSeat.row}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div>
            <p className="priceOfMovie">
              You have selected seats <b>{amountOfSeats}</b> for
              <b>{moviePrice * amountOfSeats} $</b>.
            </p>
          </div>
        </div>
      </div>

      {moviePrice && <button className="btn btn-primary" disabled={amountOfSeats<= 0} onClick={() => {childToParent(amountOfSeats, moviePrice, enteredTitle);goNextPage()}}>Order</button>}
    </div>
  );
};

export default PageOne;
