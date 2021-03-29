import React, { useState } from "react";
import * as S from "./styles";
import axios from "axios";
import PrimaryButton from "../buttons/PrimaryButton";

const Contact = () => {
  const [status, setStatus] = useState({
    submittted: false,
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
    <S.Form onSubmit={handleOnSubmit}>
      <label htmlFor="email">
        Contact - Email
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required={inputs.email}
        />
      </label>
      <label htmlFor="message">
        Let's Work Together
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required={inputs.message}
        />
      </label>
      <PrimaryButton type="submit" disabled={status.submitting}>
        {!status.submitting
          ? !status.submitted
            ? "Submit"
            : "Submitted"
          : "Submitting..."}
      </PrimaryButton>
    </S.Form>
  );
};

export default Contact;
