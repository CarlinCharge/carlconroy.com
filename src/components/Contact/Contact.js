import React, { useState } from "react";
import axios from "axios";
import * as S from "./styles";
import PrimaryButton from "../buttons/PrimaryButton";

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mayawkpp",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div>
      <main>
        <h1>Let's Build Together!</h1>
        <hr />
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="_replyto" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" onChange={handleOnChange} />
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
