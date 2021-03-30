import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import * as S from "./styles";

const Contact = () => {
  return (
    <div>
      <main>
        <S.Wrapper>
          <h1>Let's Build Together!</h1>
          <hr />
          <S.Form>
            <S.Wrapper>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="_replyto" />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
              <button type="submit">Submit</button>
            </S.Wrapper>
          </S.Form>
        </S.Wrapper>
      </main>
    </div>
  );
};

export default Contact;
