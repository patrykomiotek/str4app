import type { Meta } from "@storybook/react";

import { DiscoButton } from "./DiscoButton";
import { MouseEventHandler, useEffect, useRef } from "react";

const meta = {
  title: "UI/Atoms/DiscoButton",
  component: DiscoButton,
  tags: ["autodocs"],
} satisfies Meta<typeof DiscoButton>;

export default meta;

export const _DiscoButton = () => {
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
    <DiscoButton
      ref={buttonRef}
      label="Click me"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
