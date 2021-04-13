import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import TextField from "../TextField/TextField";
import TextArea from "../TextArea/TextArea";
function ContactForm() {
  const [state, handleSubmit] = useForm("mayawkpp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <TextArea />

      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default ContactForm;
