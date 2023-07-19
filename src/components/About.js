import React from "react";
import Links from "../components/Links"

function About({bio , links}) {
//issue is If a prop of bio is not passed down, 
//or if bio is an empty string, don't display the <p> tag
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 1 ? <p>{ bio }</p> : null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin}/>
    </div>
  );
}

export default About;
