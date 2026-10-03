import { useState } from "react";

/**
 * <img> that falls back to a Chefchaouen-blue block if the file is missing,
 * so the layout never breaks while real photos are still being added.
 */
export default function SafeImage({ src, alt, className = "", ...props }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-linear-to-br from-[#0B4F91] to-[#073B70] ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
      {...props}
    />
  );
}
