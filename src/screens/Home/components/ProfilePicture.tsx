import { FC } from "react";

const image = require("../../../assets/profile.jpg");

const ProfilePicture: FC<{}> = () => {
  return (
    <div className="center-horizontal">
      <img src={image} alt="Hugo" className="profile-picture" />
    </div>
  );
};

export default ProfilePicture;
