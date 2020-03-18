import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

const Content = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        // console.log(response);
        setInfo(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='App'>
      <Header date={info.date} />
    </div>
  );
};

export default Content;
