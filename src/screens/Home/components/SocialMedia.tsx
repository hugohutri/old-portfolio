import { FC } from "react";
import { SocialIcon as ReactSocialIcon } from "react-social-icons";
import styled, { keyframes } from "styled-components";

const hoverAnimation = keyframes`
  0% { transform: scale(1); }
  40% { transform: scale(1.3); }
  100% { transform: scale(1.14); }
`;

const SocialIcon = styled(ReactSocialIcon)`
  margin: 5px;
  :hover {
    transform: scale(1.14);
    animation: ${hoverAnimation} 0.2s ease-in;
  }
`;

const SocialMedia: FC<{}> = () => {
  return (
    <div className="center-content">
      <SocialIcon url="https://github.com/hugohutri" bgColor="#dedede" />
      <SocialIcon
        url="https://fi.linkedin.com/in/hugo-hutri-9401a815b"
        bgColor="#dedede"
      />
      <SocialIcon url="https://www.instagram.com/huugooh" bgColor="#dedede" />
    </div>
  );
};

export default SocialMedia;
