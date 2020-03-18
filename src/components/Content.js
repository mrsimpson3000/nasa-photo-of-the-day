import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

const Content = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        // console.log(error);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
    </div>
  );
};

export default Content;
