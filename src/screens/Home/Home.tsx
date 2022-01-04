import { FC } from "react";
import AboutMe from "./components/AboutMe";
import Name from "./components/Name";
import ProfilePicture from "./components/ProfilePicture";
import SocialMedia from "./components/SocialMedia";
import "./styles.css";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="container">
      <Name />
      <AboutMe />
      <ProfilePicture />
      <SocialMedia />
      <hr />
    </div>
  );
};

export default Home;
