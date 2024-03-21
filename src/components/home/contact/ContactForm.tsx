"use client";
import React, {
  ChangeEventHandler,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import classes from "./ContactForm.module.scss";
import { toast } from "react-hot-toast";
import { Button, Input, Textarea } from "@/components/ui";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";

function ContactForm() {
  const ref = useRef<HTMLFormElement>(null);

  const submitHandler = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const data = { name, email, message };

    try {
      const jsonData = await sendEmail(data);

      if (jsonData.message) {
        toast.success(jsonData.message);
        clearForm();
      } else {
        toast.error(jsonData.error || "Something went wrong!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error("Error occurred during sending email.", err);
    }
  };

  const clearForm = () => {
    ref.current?.reset();
  };

  return (
    <div className={classes.formContainer}>
      <h4 className={classes.areaLabel}>Drop a mail</h4>
      <form action={submitHandler} ref={ref}>
        <Input type="text" name="name" placeholder="Name" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Textarea
          name="message"
          placeholder="Message..."
          rows={4}
          style={{ whiteSpace: "pre-wrap" }}
          required
        />
        <div className={classes.submitBtn}>
          <SubmitButton title="Send Message" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
