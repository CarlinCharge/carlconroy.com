import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const Contact = () => {
  return (
    <div>
      <main>
        <h1>Let's Work Together!</h1>
        <hr />
        <form>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="_replyto" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
