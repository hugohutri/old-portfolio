import { useEffect } from "react";
import { FC, useState } from "react";

const NAME = "Hugo Hutri";

/**
 * Get a random delay for the typewriter effect (100ms - 200ms)
 * @returns Time in milliseconds
 */
const getRandomDelay = () => 100 + Math.random() * 100;

const waitRandomDelay = async () => {
  return new Promise((resolve) => setTimeout(resolve, getRandomDelay()));
};

/**
 * My name with typewriter effect
 */
const Name: FC<{}> = () => {
  const [cursorPosition, setCursorPosition] = useState(0);

  // Move the cursor
  useEffect(() => {
    if (cursorPosition > NAME.length) return;
    waitRandomDelay().then(() => setCursorPosition(cursorPosition + 1));
  }, [cursorPosition]);

  const partOfName = NAME.substring(0, cursorPosition);

  return <div className="name">{partOfName}</div>;
};

export default Name;
