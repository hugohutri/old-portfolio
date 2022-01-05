import { FC } from "react";
import styled from "styled-components";

const image = require("../../../assets/profile.jpg");

const ProfileImg = styled.img`
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 50% 50% 50% 50%;
  width: 30%;

  @media (max-width: 550px) {
    width: 70%;
  }
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfilePicture: FC<{}> = () => {
  return (
    <CenteredDiv>
      <ProfileImg src={image} alt="Hugo" />
    </CenteredDiv>
  );
};

export default ProfilePicture;
