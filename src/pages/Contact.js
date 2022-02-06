import { useState } from "react";
import "../style/Forms.css";

const Contact = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredMessageIsValid, setEnteredMessageIsValid] = useState(false);

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    if (e.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };
  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    if (e.target.value.trim() !== "") {
      setEnteredEmailIsValid(true);
    }
  };
  const messageInputChangeHandler = (e) => {
    setEnteredMessage(e.target.value);
    if (e.target.value.trim() !== "") {
      setEnteredMessageIsValid(true);
    }
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
    }
  };

  const messageInputBlurHandler = (e) => {
    setEnteredMessageTouched(true);
    if (enteredMessage.trim() === "") {
      setEnteredMessageIsValid(false);
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (
      enteredName.trim() === "" &&
      enteredName.trim() === "" &&
      enteredMessage.trim() === ""
    ) {
      return;
    }

    setEnteredNameIsValid(true);
    setEnteredEmailIsValid(true);
    setEnteredMessageIsValid(true);

    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredMessage);
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const messageInputIsInvalid = !enteredMessageIsValid && enteredMessageTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const messageInputClasses = messageInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please enter your name.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input type="text" id="email" onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter your email.</p>
        )}
      </div>
      <div className={messageInputClasses}>
        <label htmlFor="message">Your Message</label>
        <textarea
          type="text"
          id="message"
          onChange={messageInputChangeHandler}
          onBlur={messageInputBlurHandler}
          className="form-control"
          value="Enter your message"
        ></textarea>
        {messageInputIsInvalid && (
          <p className="error-text">Please enter your message.</p>
        )}
      </div>
      <div className="form-action">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Contact;
