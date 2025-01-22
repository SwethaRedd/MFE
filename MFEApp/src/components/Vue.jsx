import React, { useEffect, useRef } from "react";
import { mount } from "VueAppHost/VueApp";

const VueJs = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default VueJs;

// Import mount from view.js app
// call mount method async.. useEffect
// Reference the template from mount method and add it to our react app
