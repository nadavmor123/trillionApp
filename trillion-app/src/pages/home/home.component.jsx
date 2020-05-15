import React, { useCallback, useRef, useEffect } from "react";
import TweenLite from "gsap";
import "./home.style.scss";
import Earth from "../../images/earth.png";
import Ground from "../../images/ground.png";

const HomePage = () => {
  const [earthRef] = useHookWithRefTreeCallback();
  const [groundRef] = useHookWithRefGroundCallback();

  useEffect(() => {}, []);

  return (
    <div id="background-image">
      <div className="earth" ref={earthRef}>
        <img src={Earth}></img>
      </div>
      <div className="ground" ref={groundRef}>
        <img src={Ground}></img>
      </div>
    </div>
  );

  function useHookWithRefTreeCallback() {
    const ref = useRef(null);
    const setRef = useCallback((node) => {
      // if (node) {
      //   node.style.opacity = 0;
      //   TweenLite.to(node, 2, { opacity: 1 });
      // }
      // Save a reference to the node
      ref.current = node;
    }, []);
    return [setRef];
  }

  function useHookWithRefGroundCallback() {
    const ref = useRef(null);
    const setRef = useCallback((node) => {
      // let delay = Math.floor(Math.random() * 9) + 1;
      // if (node) {
      //   node.style.opacity = 0;
      //   TweenLite.to(node, delay, { opacity: 1 });
      // }
      // Save a reference to the node
      ref.current = node;
    }, []);
    return [setRef];
  }
};

export default HomePage;
