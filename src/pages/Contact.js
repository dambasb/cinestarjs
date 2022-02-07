import { useEffect, useState } from "react";
import useInout from "../hooks/use-inout";
import "../style/Forms.css";

const Contact = () => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInout((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInout((value) => value.includes("@"));

  const {
    value: enteredMessage,
    hasError: messageInputHasError,
    isValid: enteredMessageIsValid,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInout((value) => value.trim() !== "");

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
    console.log(formIsValid);
  }, [enteredNameIsValid, enteredEmailIsValid, enteredMessageIsValid]);

  // Submit Form
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log("form");

    if (!enteredNameIsValid && !enteredEmailIsValid && !enteredMessageIsValid) {
      return;
    }

    console.log(
      "Name :",
      enteredName,
      "Email :",
      enteredEmail,
      "Message :",
      enteredMessage
    );

    resetNameInput();
    resetEmailInput();
    resetMessageInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  const messageInputClasses = messageInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div>
      <h1>Get in touch</h1>
      <form onSubmit={formSubmissionHandler}>
        <div className="control-group">
          <div className={nameInputClasses}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              onChange={nameChangedHandler}
              onBlur={nameBlurHandler}
            placeholder="Enter your name"
            />
            {nameInputHasError && (
              <p className="error-text">Please enter your name.</p>
            )}
          </div>
          <div className={emailInputClasses}>
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              id="email"
              onChange={emailChangedHandler}
              onBlur={emailBlurHandler}
              
            placeholder="Enter your email"
            />
            {emailInputHasError && (
              <p className="error-text">Please enter your email that includes @.</p>
            )}
          </div>
        </div>
        <div className={messageInputClasses}>
          <label htmlFor="message">Your Message</label>
          <textarea
            type="text"
            id="message"
            value="textarea"
            onChange={messageChangedHandler}
            onBlur={messageBlurHandler}
            className="form-control"
            value={enteredMessage}
            placeholder="Enter your message"
          ></textarea>
          {messageInputHasError && (
            <p className="error-text">Please enter your message.</p>
          )}
        </div>
        <div className="form-action">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
