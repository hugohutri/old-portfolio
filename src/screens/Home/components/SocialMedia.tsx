import { FC } from "react";
import { SocialIcon } from "react-social-icons";

const SocialMedia: FC<{}> = () => {
  return (
    <div className="center-content">
      <SocialIcon url="https://github.com/hugohutri" bgColor="#dedede" />
      <SocialIcon
        url="https://fi.linkedin.com/in/hugo-hutri-9401a815b"
        bgColor="#dedede"
      />
    </div>
  );
};

export default SocialMedia;
