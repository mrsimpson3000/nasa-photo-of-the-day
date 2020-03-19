import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

const Content = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response);
        setInfo(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='App'>
      <Header date={info.date} title={info.title} />
      <div className='photo-width'>
        <img src={info.url} alt='NASA Photo Of The Day' />
        <p>{info.explanation}</p>
        <hr />
        <p>A photo by {info.copyright}</p>
      </div>
    </div>
  );
};

export default Content;
