import React, { useState } from "react";
import axios from "axios";
import PrimaryButton from "../buttons/PrimaryButton";
import * as S from "./styles";

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
        <S.Wrapper>
          <form onSubmit={handleOnSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="_replyto" />
            <label htmlFor="message">Message</label>
            <S.StyledTextarea
              id="message"
              name="message"
              onChange={handleOnChange}
            />
            <button type="submit">Send</button>
          </form>
        </S.Wrapper>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </main>
    </div>
  );
};

export default Contact;
