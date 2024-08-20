import React from "react";
import style from "./form.module.css";

function Form() {
  return (
    <div className={style.form_container}>
      <div className={style.form_inner_container}>
        <div className={style.form_title}>
          Addmition <span>Form</span>
        </div>
        <br />
        <form action="">
          <div className="form_input">
            <label>Enter Name : </label>
            <input type="text" />
            <label>Enter Phone No : </label>
            <input type="text" />
            <label>Enter Address : </label>
            <input type="text" />
            <label>Enter Email Address : </label>
            <input type="text" />
            <label>Select (School/College/Company) : </label>
            <select name="" id="">
              <option value="">School</option>
              <option value="">College</option>
              <option value="">Company</option>
            </select>
          </div>
          <div className={style.form_button}>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
