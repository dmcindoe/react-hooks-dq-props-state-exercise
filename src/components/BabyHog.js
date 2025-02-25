import React, {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({ eyeColor, name, hobby }) {
  const [weight, setWeight] = useState(0)


  
  function handleChangeWeight(e) {
    console.log(weight)
     if (e.target.name === "plus" ){
       setWeight(weight + 1)
  

     } else  {setWeight(weight - 1)}
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  }

  const eyeColorMapper = {
    blue: BlueBaby,
    sun: SunBaby,
    glowing: GlowingBaby,
    normal: normalBaby
  }
  

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight:{weight}</h3>
      <h3>Hobby:{hobby}</h3>
      <h4>Eye Color: { eyeColor }</h4>

      <button onClick = {handleChangeWeight} name="plus">Increase Weight</button>
      <button onClick = {handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src= {eyeColorMapper[eyeColor]}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
