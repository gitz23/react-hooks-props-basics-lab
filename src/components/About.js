import React from "react";

function About(props) {
//issue is If a prop of bio is not passed down, 
//or if bio is an empty string, don't display the <p> tag
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
  );
}

export default About;
