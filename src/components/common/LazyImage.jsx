// import React from "react";

import { twMerge } from "tailwind-merge";

const LazyImage = ({ src, imgStyle }) => {
 return <img className={twMerge("flex", imgStyle)} src={src} alt="Portfolio" />;
};

export default LazyImage;
