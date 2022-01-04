import { FC } from "react";

const ButtonRow: FC<{}> = () => {
  return (
    <div className="row button-row">
      <div className="four columns">
        <a className="button u-full-width" href="/projects">
          Projects
        </a>
      </div>
      <div className="four columns">
        <a className="button u-full-width" href="/projects">
          Projects
        </a>
      </div>
      <div className="four columns">
        <a className="button u-full-width" href="/projects">
          Projects
        </a>
      </div>
    </div>
  );
};

export default ButtonRow;
