import { FC } from "react";
import AboutMe from "./components/AboutMe";
import ButtonRow from "./components/ButtonRow";
import Name from "./components/Name";
import ProfilePicture from "./components/ProfilePicture";
import SocialMedia from "./components/SocialMedia";
import "./styles.css";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="container page">
      <Name />
      <ProfilePicture />
      <AboutMe />
      <SocialMedia />
      <hr />
      <ButtonRow />
    </div>
  );
};

export default Home;
