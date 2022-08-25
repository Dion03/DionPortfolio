import { useEffect, useState } from "react";
import { animateScroll as scroll } from 'react-scroll'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const ToTop = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop()
  };
  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <ArrowUpwardIcon/>
        </button>
      )}
    </>
  );
};

export default ToTop;