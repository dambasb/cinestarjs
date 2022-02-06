import React, { useState } from "react";
import "../style/Order.css";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const Order2 = () => {
  const [page, setPage] = useState(1);
  const [seatData, setSeatData] = useState(0);
  const [billData, setBillData] = useState(0);
  const [movieTitleData, setMovieTitleData] = useState('');

  function goNextPage() {
    if (page === 3) return;
    setPage(page + 1);
  }

  function goPreviousPage() {
    if (page === 1) return;
    setPage(page - 1);
  }

  const childToParent = (childData, bill, movieTitle) => {
    
    setSeatData(childData);
    setBillData(bill);
    setMovieTitleData(movieTitle);
  };
  

  return (
    <div>
      <h1>Order{page > 1 && <button className="btn btn-link" onClick={goPreviousPage}>Back</button>}</h1>
      
      <div>
        {page === 1 && <PageOne childToParent={childToParent} goNextPage={goNextPage}/>}
        {page === 2 && <PageTwo bill={billData} seats={seatData} movie={movieTitleData}/>}
      </div>
      
    </div>
  );
};

function PageThree() {
  return <div>I am page 3</div>;
}

export default Order2;
