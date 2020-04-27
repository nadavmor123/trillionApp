import React, { useCallback, useRef, useEffect } from "react";
import TweenLite from "gsap";
import "./home.style.scss";
import Title from "../../images/title.png";
import Text from "../../images/text.png";

const HomePage = () => {
  const [ref] = useHookWithRefCallback();

  useEffect(() => {}, []);

  return (
    <div id="background-image">
      <div className="page-header">
        <img src={Title}></img>
      </div>
      <div className="page-text">
        <img src={Text}></img>
      </div>
      <div className="tree-wrapper-1" ref={ref}></div>
      <div className="tree-wrapper-2" ref={ref}></div>
      <div className="tree-wrapper-3" ref={ref}></div>
    </div>
  );

  function useHookWithRefCallback() {
    const ref = useRef(null);
    const setRef = useCallback((node) => {
      let delay = Math.floor(Math.random() * 9) + 1;
      if (node) {
        node.style.opacity = 0;
        TweenLite.to(node, delay, { opacity: 1 });
      }
      // Save a reference to the node
      ref.current = node;
    }, []);
    return [setRef];
  }
};

export default HomePage;
