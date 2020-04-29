import React, { useCallback, useRef, useEffect } from "react";
import TweenLite from "gsap";
import "./home.style.scss";
import Title from "../../images/title.png";
import Text from "../../images/text.png";

const HomePage = () => {
  const [treeRef] = useHookWithRefTreeCallback();

  const [headerRef] = useHookWithRefHeaderCallback();

  useEffect(() => {}, []);

  return (
    <div id="background-image">
      <div className="page-header" ref={headerRef}>
        <img src={Title}></img>
      </div>
      <div className="page-text">
        <img src={Text}></img>
      </div>
      <div className="tree-wrapper-1" ref={treeRef}></div>
      <div className="tree-wrapper-2" ref={treeRef}></div>
      <div className="tree-wrapper-3" ref={treeRef}></div>
    </div>
  );

  function useHookWithRefTreeCallback() {
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

  function useHookWithRefHeaderCallback() {
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
