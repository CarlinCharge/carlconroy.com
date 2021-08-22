import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import TextField from "../TextField/TextField";
import TextArea from "../TextArea/TextArea";
import ContactButton from "../buttons/ContactButton";
import * as S from "./styles";
import { FormspreeProvider } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mayawkpp");
  useEffect(() => {
    if (state.succeeded) {
      handleReset();
    }
  }, [state]);
  const handleReset = () => {
    var element = document.getElementById("contactForm");
    element.reset();
  };
  return (
    <FormspreeProvider project={"1647251425975073942"}>
      <form onSubmit={handleSubmit} id="contactForm">
        <S.FieldLabel>Contact</S.FieldLabel>
        <S.SubFieldLabel>Let's Work Together!</S.SubFieldLabel>
        <TextField />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <TextArea />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        {state.succeeded && (
          <div>
            Looking forward to reading your message! I'll get back to you as
            quickly as possible!
          </div>
        )}
        <ContactButton submitting={state.submitting} />
      </form>
    </FormspreeProvider>
  );
}
export default ContactForm;
