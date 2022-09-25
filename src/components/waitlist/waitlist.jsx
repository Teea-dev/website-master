import React from "react";
import "./waitlist.css";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import image from "../../assets/images/Macbook.png";
import logo from "../../assets/images/Axio.svg";
import desktop from "../../assets/images/AXIO 2.png";
import Footer from "../../components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Link } from "react-router-dom";

const Waitlist = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [firstname, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [lastname, setLastName] = React.useState("");

   function handleSubmit(e) {
    e.preventDefault();


    axios.post("https://axio-all-04.herokuapp.com/api/await-lists", {
      firstName: firstname,
      lastName: lastname,
      email: email,
    }).then( (response)=>{
      console.log(response);
    }).catch((error)=>{

      console.log(error);
    });
    // const data = {
    //   firstName:firstname,
    //   lastName:lastname,
    //   email: email,
    // };
    // fetch("https://axio-all-04.herokuapp.com/api/await-lists", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    //   body: JSON.stringify(data),
    // })
    //   .then((data) => {
    //     if(!data.ok){

    //       throw Error(data.status);
    //     }
    //     return data.json();
    //   })
    //   .then((response)=>
    //   console.log(response))
    //   .catch((err) => {
    //     console.log("error");
    //     console.log(err);
    //   });
  }
  // const [state, handleSubmit] = useForm("mjvzbnqz");
  // if (state.succeeded) {

  // }
  const form = (e) => {
    e.preventDefault();
    window.location.replace("/#form");
  };

  //     import React from 'react';

  // const Test = () => {
  //   const [firstname, setFirstName] = React.useState('');
  //   const [email, setEmail] = React.useState('');
  //   const [password, setPassword] = React.useState('');

  //   const [forValues, setForValues] = React.useState({
  //     firstname: '',
  //     email: '',
  //     password: '',
  //   });

  //   function handleChange(e) {
  //     setForValues((currentValues) => {
  //       console.log('currentValues', currentValues);
  //       console.log(e.target.name, e.target.value);

  //       return {
  //         ...currentValues,
  //         [e.target.name]: e.target.value,
  //       };
  //     });
  //   }

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     // console.log('firstname', firstname);
  //     // console.log('email', email);
  //     // console.log('password', password);
  //     console.log(forValues);
  //axios.post("https://axio-all-04-herokuapp.co/api/await-lists" , {data:payload})
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input type='text' name='firstname' value={forValues.firstname} onChange={handleChange} />
  //       <input type='email' name='email' value={forValues.email} onChange={handleChange} />
  //       <input type='password' name='password' value={forValues.password} onChange={handleChange} />

  //       <button type='submit'>Submit</button>
  //     </form>
  //   );
  // };

  // export default Test;

  return (
    <div className="">
      <div className="section1 row col-12">
        <div className="section1-text col-lg-6 col-md-12 col-sm-12">
          <div className="icon-div">
            <img src={logo} alt="icon" className="icon d-block d-md-none" />
            <img
              src={desktop}
              alt="desktop-logo"
              className="desktop-icon d-none d-md-block"
            />
          </div>
          <div className="">
            <h1 className="">
              Get connected with people traveling to the same destination as
              your goods.
            </h1>
          </div>
          <div className="">
            <p className="">
              Our mission is to provide decentralized delivering processes and
              create an opportunity for individuals to earn
            </p>
          </div>
          <a className="btn btn-primary " onClick={form}>
            Join the waitlist
          </a>
          <a
            className="btn story btn-primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRK7HvyPDu3ghe1MHm6DHFJVJ2GUcPr9SWSdnR4ltl8mUmQQ/viewform"
            target="_blank"
          >
            {" "}
            our market survey{" "}
          </a>
        </div>
        <div className="section1-img col-lg-6 col-md-12 col-sm-12 mt-3">
          <img src={image} alt="laptop" className="fadeIn" width="450px" />
        </div>
      </div>

      <div className="section2 col-12">
        <div>
          <p className="">
            Be the first to enjoy our endless services.Join the waitlist!!
          </p>
        </div>
        <form
          action=""
          method="POST"
          className="form1"
          id={"form"}
          onSubmit={handleSubmit}
        >
          <div className="col-12 section2-input">
            <input
              type="text"
              name="firstname"
              id="First name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              required
            />
            <input
              type="text"
              name="lastname"
              id="Last name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              required
            />
          </div>
          <div className="col-12 input1">
            <input
              type="email"
              name="email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <button
            type="submit"
            onClick={toggleModal}
            className="submit-btn btn-alert btn"
          >
            Join
          </button>
        </form>
        {modal && (
          <div className="popup" onClick={toggleModal}>
            <p>thanks for joining!</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Waitlist;
