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
      <div className="ground">
        <img ref={groundRef} src={Ground}></img>
      </div>
    </div>
  );

  function useHookWithRefTreeCallback() {
    const ref = useRef(null);
    const setRef = useCallback((node) => {
      if (node) {
        setTimeout(() => TweenLite.to(node, 6, { top: -100 }), 3000);
      }
      ref.current = node;
    }, []);
    return [setRef];
  }

  function useHookWithRefGroundCallback() {
    const ref = useRef(null);
    const setRef = useCallback((node) => {
      if (node) {
        setTimeout(() => TweenLite.to(node, 8, { bottom: 0 }), 3000);
      }
      ref.current = node;
    }, []);
    return [setRef];
  }
};

export default HomePage;
