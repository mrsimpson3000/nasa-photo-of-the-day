import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import styled from "styled-components";

const ContentWidth = styled.div`
  width: 80%;
  padding-left: 10%;
`;

const FooterStyles = styled.div`
  text-align: right;
`;

const ParagraphStyles = styled.div`
  text-align: justify;
`;

const PhotoStyles = styled.div`
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  text-align: unset;
`;

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
      <ContentWidth>
        <PhotoStyles>
          <img src={info.url} alt={info.title} />
        </PhotoStyles>
        <ParagraphStyles>
          <p>{info.explanation}</p>
        </ParagraphStyles>
        <hr />
        <FooterStyles>
          <p>A photo by {info.copyright}</p>
        </FooterStyles>
      </ContentWidth>
    </div>
  );
};

export default Content;
