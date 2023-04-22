import "./App.css";
import { motion as m } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import images from "./image";

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  console.log(width);

  return (
    <div className="App">
      <m.div
        className="carousel"
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <m.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner_carousel"
        >
          {images.map((image) => (
            <m.div key={image} className="item">
              <img src={image} alt="" />
            </m.div>
          ))}
        </m.div>
      </m.div>
    </div>
  );
}

export default App;
