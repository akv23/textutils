import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item"style={{backgroundColor: props.mode==='light'?'white':'#0b0a0a'}}>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body text-${props.mode==="light"?"dark":"light"}`}>
              It is a tool that allows you to analyse a text by counting the
              number of words and characters present. It also provides
              statistical information on the time to read the text and some features on text conversion.
              Our online text analyser / word counter is easy to use and free of
              charge.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
