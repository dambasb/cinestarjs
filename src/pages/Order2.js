import MoviesDb from "../database/MoviesDb";
import Select from "react-select";
import "react-dropdown-now/style.css";
import React, { useState } from "react";
import "./Order.css";
import { Seats } from "../database/Seats";
import PageOne from "./PageOne";

const Order2 = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(0);

  function goNextPage() {
    if (page === 3) return;
    setPage(page + 1);
    console.log(data);

  }

  function goPreviousPage() {
    if (page === 1) return;
    setPage(page - 1);
  }

  const childToParent = (childdata) => {
    setData(childdata);
    console.log(childdata)
    console.log(data)
  }

  return (
    <div>
      <h1>Order</h1>

      <progress max="3" value={page} />

      <div>
        {page === 1 && (
          <PageOne childToParent={childToParent}
          />
        )}
        {page === 2 && (
          <PageTwo
          />
        )}
        {page === 3 && <PageThree/>}
      </div>

      {page > 1 && <button onClick={goPreviousPage}>Back</button>}
      {page === 1 && <button onClick={goNextPage}>Order</button>}
      {page === 2 && <button type="submit">Submit</button>}
    </div>
  );
};


function PageTwo() {
  return <div>I am page 2</div>;
}
function PageThree() {
  return <div>I am page 3</div>;
}

export default Order2;
