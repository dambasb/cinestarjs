import { useEffect, useState } from "react";
import useInout from "../hooks/use-inout";
import "../style/Forms.css";

const CreditCardForm = () => {
  return (
    <form>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-control">
            <label htmlFor="name">Full name (on the card)</label>
            <input type="text" id="name" placeholder="Enter your full name" />
          </div>
          <div className="form-control">
            <label htmlFor="name">Card number</label>
            <div className="input-group ">
              <input
                type="text"
                id="inlineFormInputGroupUsername2"
                placeholder="Your card number"
              />
              <div className="input-group-prepend">
                <div className="input-group-text">@ @ @</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div className="form-control">
                <label htmlFor="expiration">Expiration</label>
                <div class="input-group">
                  <input
                    type="number"
                    placeholder="MM"
                    name=""
                  />
                  <input
                    type="number"
                    placeholder="YY"
                    name=""
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-control mb-4">
                <label htmlFor="cvv">CVV</label>
                <input type="text"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreditCardForm;
