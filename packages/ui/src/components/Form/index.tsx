import React from "react";

export function Form() {
  return (
    <form className="form__group" >
      <div>
        <label className="form__label" htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
