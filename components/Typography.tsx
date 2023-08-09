import React from "react";

interface HeadingProps {
  text?: string;
  color?: string;
}

const Heading = ({ text, color = "blue-100" }: HeadingProps) => {
  return (
    <p
      className={`typography-headings text-5xl ${color} font-extrabold font-poppins`}
    >
      {text}
    </p>
  );
};

export { Heading };
