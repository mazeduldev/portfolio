"use client";
import React, { ChangeEventHandler, SyntheticEvent, useState } from "react";
import classes from "./ContactForm.module.scss";
import { toast } from "react-hot-toast";
import { Button, Input, Textarea } from "@/components/ui";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const changeHandler: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
    }
  };

  const submitHandler = async (event: SyntheticEvent) => {
    event.preventDefault();

    setLoading(true);

    const data = { name, email, message };

    try {
      const res: Response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const jsonData = await res.json();

      if (res.status == 200) {
        toast.success(jsonData.message);
        clearForm();
      } else {
        toast.error(jsonData.error || "Something went wrong!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error("Error occurred during sending email.", err);
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={classes.formContainer}>
      <h4 className={classes.areaLabel}>Drop a mail</h4>
      <form onSubmit={submitHandler}>
        <Input
          value={name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <Input
          value={email}
          onChange={changeHandler}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <Textarea
          value={message}
          onChange={changeHandler}
          name="message"
          placeholder="Message..."
          rows={4}
          style={{ whiteSpace: "pre-wrap" }}
          required
        />
        <div className={classes.submitBtn}>
          <Button type="submit" loading={loading} disabled={loading}>
            {!loading && "Send Message"}
            {loading && "Sending Message"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
