import { type MouseEventHandler, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { DiscoButton } from "@ui";

export const DiscoButtonPage = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#c0392b";
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#27ae60";
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#2980b9";
    }
  };

  return (
    <div>
      <Helmet>
        <title>{Route.MAGIC_BUTTON.title}</title>
      </Helmet>
      <h1>{Route.MAGIC_BUTTON.title}</h1>
      <DiscoButton
        ref={buttonRef}
        label="Click me"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};
