import React from "react";
import "./index.css";
import {Typography} from "@material-ui/core";


export default function App() {
  return (
    <div class="form-container">
      <Typography variant ="h3" gutterBottom>
        Contact Us
      </Typography>
      <form class="register-form">
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          id="subject"
          class="form-field"
          type="text"
          placeholder="subject"
          name="subject"
        />
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
         <input
          id="message"
          class="form-field"
          type="text"
          placeholder="message"
          name="messege"
        />
         <input
          id="phone"
          class="form-field"
          type="text"
          placeholder="phone"
          name="phone"
        />
         <input
          id="address"
          class="form-field"
          type="text"
          placeholder="address"
          name="address"
        />
         <button class="form-field" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}