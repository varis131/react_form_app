import logo from "./logo.svg";
import "./App.css";
import { computeHeadingLevel } from "@testing-library/dom";
import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstNameHandler(event) {
  //   // console.log("printing first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changelastNameHandler(event) {
  //   // console.log("printing last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  // console.log(formData.email)
  // console.log(formData.firstName);
  // console.log(formData.lastName);
  //console.log(formData);

  function changeHandler(event) {
    const { name, value, type, checked } = event.target; //deconstructing
    setFormData((prevFormData) => {
      return {
        ...prevFormData, //yaha pehle ka data rahega
        [name]: type === "checkbox" ? checked : value, //yaha checkbox ke liye checked aur baaki ke liye value rahega
      };
    });
  }
  function submitHandler(event){
     event.preventDefault();
     console.log("printing form ka data..")
     console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br />
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="lastName"
        />
        <br />
        <br />
        <input
          type="eamil"
          placeholder="enter your email here"
          onChange={changeHandler}
          name="email"
        />
        <br />
        <br />
        <textarea
          placeholder="enter your comments here.."
          name="comments"
          value={formData.comments}
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am i visible?</label>
        <br />
        <br />
        <fieldset>
          <legend>Mode selection</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="online-mode"
            id="online-mode"
            checked={formData.mode === "online-mode"} //formData me mode empty string hai isliye hum compare kar rahe hai
          />
          <label htmlFor="online-mode">Online mode </label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="offline-mode"
            id="offline-mode"
            checked={formData.mode === "offline-mode"}
          />
          <label htmlFor="offline-mode">Offline mode </label>
        </fieldset>
        <br />


        {/* Dropdown menu */}

        <label htmlFor="favCar">Tell me your favourite car</label>
        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Bolero">Bolero</option>
          <option value="Defender">Defender</option>
          <option value="Thar">Thar</option>
        </select>
        <br/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
