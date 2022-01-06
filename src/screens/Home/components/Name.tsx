import { useEffect } from "react";
import { FC, useState } from "react";
import styled from "styled-components";

const StyledName = styled.div`
  width: 100%;
  text-align: center;
  font-size: max(min(13vw, 160px), 50px);
  font-family: "Roboto", sans-serif;
  padding-top: 3%;
  padding-bottom: 3%;
`;

const NAME = "Hugo Hutri";

/**
 * Get a random delay for the typewriter effect (100ms - 200ms)
 * @returns Time in milliseconds
 */
const getRandomDelay = () => 140 + Math.random() * 100;

const waitRandomDelay = async () => {
  return new Promise((resolve) => setTimeout(resolve, getRandomDelay()));
};

/**
 * My name with typewriter effect
 */
const Name: FC<{}> = () => {
  const [cursorPosition, setCursorPosition] = useState(1);

  // Move the cursor
  useEffect(() => {
    if (cursorPosition > NAME.length) return;
    waitRandomDelay().then(() => setCursorPosition(cursorPosition + 1));
  }, [cursorPosition]);

  const partOfName = NAME.substring(0, cursorPosition).padEnd(NAME.length, " ");

  return <StyledName>{partOfName}</StyledName>;
};

export default Name;
