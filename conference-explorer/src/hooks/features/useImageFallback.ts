/*
DEV NOTES:
- Check for any loaded image from URL, and then use the fallback image if there's any.
*/
import { useEffect, useState } from "react";

export const useImageFallback = (src: string, fallback: string) => {
  const [imgSrc, setImgSrc] = useState<string>(fallback);


  // Check if image has been rendered properly or not.
  useEffect(() => {
    if (!src) {
      setImgSrc(fallback);
      return;
      }
      
      const img = new Image();
      img.src = src;

      img.onload = () => setImgSrc(src);
      img.onerror = () => setImgSrc(fallback);

  }, [src, fallback]);

  return imgSrc;
};
