import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    console.log(e)
    console.log(form.current)
    e.preventDefault();

    emailjs.sendForm('service_woy976w', 'template_v25uirb', form.current,'user_kQnBf97XX0mJQXIuZpsrL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};