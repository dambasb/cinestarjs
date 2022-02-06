import { useState } from "react";
import "../style/Order.css";

const PageTwo = ({ bill, seats, movie }) => {
  const [isPayed, setIsPayed] = useState(false);
  const [cardValue, setCardValue] = useState('')

  // TODO Make validation
  // TODO Hide back btn if payed
  // TODO Make form
    
  const onChange = (e) => {
    console.log(e.target.value);
    
    const re = /^[0-9\b]+$/;
    console.log(re.test(e.target.value));
    if (e.target.value === "" && re.test(e.target.value)) {
      setCardValue({ value: e.target.value });
    }
  };

  const submit = () => {
    setIsPayed(true);
  };

  return (
    <div>
      <div className={isPayed ? "hide" : ""}>
        <h5>
          You have ordered {seats} seats for movie {movie}
          .
        </h5>

        <h5>Total bill: {bill * seats}$</h5>

        <label>
          <h5>Enter your Fake Card Id</h5>
          <input
            type="text"
            minLength={12}
            maxLength={12}
            onChange={onChange}
          />
        </label>

        <button type="submit" className="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </div>
      <div>
        <div className={!isPayed ? "hide" : ""}>
          <h5>Thank you!</h5>
          <h5>Enjoy the move.</h5>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
