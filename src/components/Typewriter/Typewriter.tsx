import React from "react";
import "./Typewriter.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypewriterMessage = () => {
  // eslint-disable-next-line
  const { text, count } = useTypewriter({
    words: ["<Hello, I'm Joan. I am a Full-Stack Developer />"],
    loop: 1,
    typeSpeed: 100,
    // onLoopDone: () =>
    //   document?.getElementById("About")?.scrollIntoView({ behavior: "smooth" }),
  });

  return (
    <div className="Typewriter">
      <span>{text}</span>
      <Cursor />
      {/* <hr /> */}
    </div>
  );
};

export default TypewriterMessage;
