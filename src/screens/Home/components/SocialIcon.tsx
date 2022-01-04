import { FC } from "react";
import { SocialIcon as ReactSocialIcon } from "react-social-icons";

interface SocialIconProps {
  url: string;
}

const SocialIcon: FC<SocialIconProps> = (props) => {
  return (
    <ReactSocialIcon
      className="social-icon"
      url={props.url}
      bgColor="#dedede"
    />
  );
};

export default SocialIcon;
