import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import TextField from "../TextField/TextField";
import TextArea from "../TextArea/TextArea";
import ContactButton from "../buttons/ContactButton";
import * as S from "./styles";
import { FormspreeProvider } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mayawkpp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <FormspreeProvider project={"1647251425975073942"}>
      <form onSubmit={handleSubmit}>
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
        <ContactButton submitting={state.submitting} />
      </form>
    </FormspreeProvider>
  );
}
export default ContactForm;
