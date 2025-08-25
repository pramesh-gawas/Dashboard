import React from "react";

export const TruncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return <span>{`${text.substring(0, maxLength)}...`}</span>;
  }
  return <span>{text}</span>;
};
