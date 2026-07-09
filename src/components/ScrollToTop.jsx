import React, { useEffect, useState } from "react";
import { ChevronUpIcon } from "./Icons";
import "./FloatingButtons.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`float-btn float-btn--top ${visible ? "float-btn--visible" : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon />
    </button>
  );
}

export default ScrollToTop;
