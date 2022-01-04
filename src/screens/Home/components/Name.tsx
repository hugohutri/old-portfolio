import { useEffect } from "react";
import { FC, useState } from "react";

const Name: FC<{}> = () => {
  const [cursorPosition, setCursorPosition] = useState(0);

  useEffect(() => {
    setTimeout(
      () => setCursorPosition(cursorPosition + 1),
      100 + Math.random() * 100
    );
  }, [cursorPosition]);

  return (
    <div className="name">{"Hugo Hutri".substring(0, cursorPosition)}</div>
  );
};

export default Name;
