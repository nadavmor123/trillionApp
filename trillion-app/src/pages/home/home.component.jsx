import React, { useCallback, useRef, useEffect } from "react";
import TweenLite from "gsap";
import "./home.style.scss";

const HomePage = () => {
  const [ref] = useHookWithRefCallback();

  useEffect(() => {}, []);

  return (
    <div className="home">
      <div className="tree-wrapper" ref={ref}></div>
    </div>
  );

  function useHookWithRefCallback() {
    const ref = useRef(null);
    const setRef = useCallback((node) => {
      if (node) {
        node.style.opacity = 0;
        TweenLite.to(node, 1, { opacity: 1 });
      }
      // Save a reference to the node
      ref.current = node;
    }, []);
    return [setRef];
  }
};

export default HomePage;
