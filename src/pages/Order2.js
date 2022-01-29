import MoviesDb from "../database/MoviesDb";
import Select from "react-select";
import "react-dropdown-now/style.css";
import React, { useState } from "react";
import "./Order.css";
import { Seats } from "../database/Seats";

const Order2 = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    movieId: null,
    movieTitle: null,
    ticketAmount: null,
    moviePrice: null,
    seatAmount: null,
    totalBill: null,
  });

  function goNextPage() {
    if (page === 3) return;
    setPage(page + 1);
    console.log(page);
  }

  function goPreviousPage() {
    if (page === 1) return;
    setPage(page - 1);
    console.log(page);
  }

  function updateMovie(type, newData) {
    setData((data) => {
      return { ...data, [type]: newData };
    });
  }

  return (
    <div>
      <h1>Order</h1>

      <progress max="3" value={page} />

      <div>
        {page === 1 && (
          <PageOne
            data={(data.movieId, data.movieTitle, data.moviePrice)}
            update={updateMovie}
          />
        )}
        {page === 2 && (
          <PageTwo
            data={(data.moviePrice, data.ticketAmount, data.seatAmount)}
            update={updateMovie}
          />
        )}
        {page === 3 && <PageThree data={data.totalBill} update={updateMovie} />}
      </div>

      {page > 1 && <button onClick={goPreviousPage}>Back</button>}
      {page !== 3 && <button onClick={goNextPage}>Next</button>}
      {page === 3 && <button type="submit">Submit</button>}
    </div>
  );
};

function PageOne({ data, update }) {
  const [enteredTitle, setEnteredTitle] = useState(MoviesDb.label);
  const [moviePrice, setMoviePrice] = useState(MoviesDb.price);
  const [show, setShow] = useState(false);
  const getShow = () => setShow(true);

  var showClass = !show ? 'hide' : 'active';

  const getEnteredTitle = (e) => {
    console.log(e);
    setEnteredTitle(e.label);
    setMoviePrice(e.price);
    getShow()
    console.log('show',show)
  };

  const seatList = Seats;
  const [amountOfSeats, setAmountOfSeats] = useState(0);
  // Toggle seats
  const takeSeat = (rowId, seatId) => {
    // Select seat
    const toogleSeat = document.getElementById(seatId);

    /**
     *  If sit is not selected add class "selected" to it and add seat
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
        <p>
          Price of Movie '{enteredTitle}' is {moviePrice}$
        </p>
      )}

      <div className={showClass}>
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
            <p>
              You have selected seats {amountOfSeats} for{" "}
              {moviePrice * amountOfSeats}$
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function PageTwo({ data, update }) {
  return <div>I am page 2</div>;
}
function PageThree({ data, update }) {
  return <div>I am page 3</div>;
}

export default Order2;
