import { useState } from "react";
import "../style/Forms.css";

const Contact = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const enteredMessageIsValid = enteredMessage.trim() !== "";

  // Change Input Handlers
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const messageInputChangeHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  // Input Blur Handlers
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const messageInputBlurHandler = (e) => {
    setEnteredMessageTouched(true);
  };

  // Submit Form
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid && !enteredMessageIsValid) {
      return;
    }

    console.log('Name :', enteredName, 'Email :', enteredEmail, 'Message :', enteredMessage);


    setEnteredName('');
    setEnteredEmail('');
    setEnteredMessage('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
    setEnteredMessageTouched(false);
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
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
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
