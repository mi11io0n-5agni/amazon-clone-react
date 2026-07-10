import { useEffect, useState } from "react";
import "./banner.css";
import banners from "./bannerData";

function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="banner">
      <button className="arrow left" onClick={prev}>
        ❮
      </button>

      <img src={banners[current]} alt="Banner" />

      <button className="arrow right" onClick={next}>
        ❯
      </button>
    </div>
  );
}

export default Banner;